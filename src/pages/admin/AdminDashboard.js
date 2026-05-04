import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileEditor from './FileEditor';

const PROXY_URL = process.env.REACT_APP_ADMIN_PROXY_URL;

const EDITABLE_FILES = [
  // Add file paths here
  // e.g., 'src/json/press.js'
];

const EDITABLE_FOLDERS = [
  // Add directory paths here to discover their contents dynamically.
  // e.g., 'src/json'
  'src/json',
];

function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return null;
  }
}

function isTokenValid(token) {
  const payload = parseJwt(token);
  return payload != null && payload.exp * 1000 > Date.now();
}

// Recursively flattens a tree response into relative file paths (blobs only).
function flattenTree(tree, prefix = '') {
  const files = [];
  for (const [name, node] of Object.entries(tree)) {
    const relPath = prefix ? `${prefix}/${name}` : name;
    if (node.type === 'blob') {
      files.push(relPath);
    } else if (node.type === 'tree') {
      files.push(...flattenTree(node.children, relPath));
    }
  }
  return files;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [activeTab, setActiveTab] = useState('files');
  const [selectedFile, setSelectedFile] = useState(null);
  // fileCache: { [path]: { content: string, sha: string } } — populated on first fetch
  const [fileCache, setFileCache] = useState({});
  // dirtyFiles: { [path]: string } — edited content, not yet submitted
  const [dirtyFiles, setDirtyFiles] = useState({});
  // folderTrees: { [folderPath]: { tree, truncated } | { error: true } | null (loading) }
  const [folderTrees, setFolderTrees] = useState({});
  const [fetchKey, setFetchKey] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('purpl_admin_token');
    if (!stored || !isTokenValid(stored)) {
      navigate('/admin');
      return;
    }
    setToken(stored);
  }, [navigate]);

  useEffect(() => {
    if (!token || EDITABLE_FOLDERS.length === 0) return;
    EDITABLE_FOLDERS.forEach(folder => {
      setFolderTrees(prev => ({ ...prev, [folder]: null }));
      fetch(`${PROXY_URL}/api/directory/${encodeURIComponent(folder)}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then(data => setFolderTrees(prev => ({ ...prev, [folder]: data })))
        .catch(() => setFolderTrees(prev => ({ ...prev, [folder]: { error: true } })));
    });
  // fetchKey lets PR submission force a re-fetch of all folder trees
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, fetchKey]);

  const handleLogout = () => {
    if (
      Object.keys(dirtyFiles).length > 0 &&
      !window.confirm('You have unsaved edits that will be discarded. Log out anyway?')
    ) {
      return;
    }
    setDirtyFiles({}); // Clear upon logout
    setFileCache({});
    setSelectedFile(null);
    
    localStorage.removeItem('purpl_admin_token');
    navigate('/admin');
  };

  const handleFileFetch = (path, content, sha) => {
    setFileCache(prev => ({ ...prev, [path]: { content, sha } }));
  };

  const handleFileEdit = (path, content) => {
    setDirtyFiles(prev => ({ ...prev, [path]: content }));
  };

  const dirtyCount = Object.keys(dirtyFiles).length;

  const getStagedContent = (path) => {
    if (dirtyFiles[path] != null) return dirtyFiles[path];
    if (fileCache[path] != null) return fileCache[path].content;
    return null;
  };

  const [showPrModal, setShowPrModal] = useState(false);
  const [prTitle, setPrTitle] = useState('');
  const [prDescription, setPrDescription] = useState('');
  const [prSubmitting, setPrSubmitting] = useState(false);
  const [prResult, setPrResult] = useState(null); // { url } | { error }

  const openPrModal = () => {
    setPrResult(null);
    setShowPrModal(true);
  };

  const closePrModal = () => {
    if (prSubmitting) return;
    setShowPrModal(false);
    setPrTitle('');
    setPrDescription('');
    setPrResult(null);
  };

  const handleSubmitPR = async (e) => {
    e.preventDefault();
    setPrSubmitting(true);
    setPrResult(null);
    try {
      const files = Object.entries(dirtyFiles).map(([path, content]) => ({
        path,
        // btoa doesn't handle non-ASCII; encodeURIComponent→unescape maps to latin1 first
        content: btoa(unescape(encodeURIComponent(content))),
        sha: fileCache[path]?.sha,
      }));
      const res = await fetch(`${PROXY_URL}/api/pr`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ title: prTitle, description: prDescription, files }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const { prUrl } = await res.json();
      setPrResult({ url: prUrl });
      setDirtyFiles({});
      setFileCache({});
      setFolderTrees({});
      setSelectedFile(null);
      setFetchKey(k => k + 1);
    } catch (err) {
      setPrResult({ error: err.message });
    } finally {
      setPrSubmitting(false);
    }
  };

  if (!token) return null;

  return (
    <div className="h-screen flex flex-col bg-dusk text-white overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-[#1e1b22] border-b border-oscuro flex-shrink-0">
        <div className="flex items-center space-x-6">
          <h1 className="font-display-bold text-sm text-white">PURPL Admin</h1>
          <nav className="flex space-x-1">
            {['files', 'images', 'prs'].map(tab => (
              <button
                key={tab}
                onClick={() => tab === 'files' && setActiveTab(tab)}
                className={`px-3 py-1 rounded font-display2 text-xs uppercase tracking-wider transition-colors ${
                  tab === activeTab
                    ? 'bg-stardust text-white'
                    : tab === 'files'
                    ? 'text-jet-grey hover:text-white'
                    : 'text-oscuro cursor-not-allowed'
                }`}
                title={tab !== 'files' ? 'Coming soon' : undefined}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          {dirtyCount > 0 && (
            <span className="font-display2 text-xs text-boilermaker-gold">
              {dirtyCount} unsaved {dirtyCount === 1 ? 'file' : 'files'}
            </span>
          )}
          <button
            onClick={openPrModal}
            disabled={dirtyCount === 0}
            className="px-3 py-1 bg-stardust hover:bg-moon text-white font-display2 text-xs rounded transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Submit PR
          </button>
          <button
            onClick={handleLogout}
            className="px-3 py-1 font-display2 text-xs text-jet-grey hover:text-white transition-colors"
          >
            Log out
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-52 flex-shrink-0 bg-[#1e1b22] border-r border-oscuro flex flex-col overflow-y-auto">
          {EDITABLE_FILES.length > 0 && (
            <>
              <p className="px-3 pt-3 pb-1 font-display2 text-xs text-jet-grey uppercase tracking-wider">
                Files
              </p>
              <ul>
                {EDITABLE_FILES.map(path => {
                  const name = path.split('/').pop();
                  const isDirty = dirtyFiles[path] != null;
                  const isSelected = selectedFile === path;
                  return (
                    <li key={path}>
                      <button
                        onClick={() => setSelectedFile(path)}
                        className={`w-full text-left px-3 py-2 font-display2 text-xs flex items-center justify-between transition-colors ${
                          isSelected
                            ? 'bg-moon text-white'
                            : 'text-jet-grey hover:bg-[#2a2730] hover:text-white'
                        }`}
                      >
                        <span>{name}</span>
                        {isDirty && (
                          <span className="w-1.5 h-1.5 rounded-full bg-boilermaker-gold flex-shrink-0" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {EDITABLE_FOLDERS.map(folder => {
            const folderName = folder.split('/').pop();
            const state = folderTrees[folder];
            const filePaths = state?.tree ? flattenTree(state.tree) : [];
            return (
              <div key={folder}>
                <p className="px-3 pt-3 pb-1 font-display2 text-xs text-jet-grey uppercase tracking-wider">
                  {folderName}/
                </p>
                {state == null && (
                  <p className="px-3 py-1 font-display2 text-xs text-oscuro">Loading…</p>
                )}
                {state?.error && (
                  <p className="px-3 py-1 font-display2 text-xs text-red-400">Failed to load</p>
                )}
                {state?.truncated && (
                  <p className="px-3 py-1 font-display2 text-xs text-boilermaker-gold">
                    Directory truncated — showing first 100 000 entries only.
                  </p>
                )}
                {filePaths.length > 0 && (
                  <ul>
                    {filePaths.map(relPath => {
                      const fullPath = `${folder}/${relPath}`;
                      const isDirty = dirtyFiles[fullPath] != null;
                      const isSelected = selectedFile === fullPath;
                      return (
                        <li key={fullPath}>
                          <button
                            onClick={() => setSelectedFile(fullPath)}
                            className={`w-full text-left px-3 py-2 font-display2 text-xs flex items-center justify-between transition-colors ${
                              isSelected
                                ? 'bg-moon text-white'
                                : 'text-jet-grey hover:bg-[#2a2730] hover:text-white'
                            }`}
                          >
                            <span className="truncate">{relPath}</span>
                            {isDirty && (
                              <span className="w-1.5 h-1.5 rounded-full bg-boilermaker-gold flex-shrink-0 ml-1" />
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </aside>

        {/* Editor area */}
        <main className="flex-1 overflow-hidden">
          {selectedFile ? (
            <FileEditor
              key={selectedFile}
              filePath={selectedFile}
              proxyUrl={PROXY_URL}
              token={token}
              stagedContent={getStagedContent(selectedFile)}
              onFetch={handleFileFetch}
              onEdit={handleFileEdit}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-jet-grey font-display2 text-sm">
              Select a file to edit
            </div>
          )}
        </main>
      </div>
      {showPrModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#1e1b22] border border-oscuro rounded-lg p-6 w-full max-w-md space-y-4">
            <h2 className="font-display-bold text-sm text-white">Submit Pull Request</h2>
            <p className="font-display2 text-xs text-jet-grey">
              {dirtyCount} {dirtyCount === 1 ? 'file' : 'files'} staged:{' '}
              {Object.keys(dirtyFiles).map(p => p.split('/').pop()).join(', ')}
            </p>
            {prResult?.url ? (
              <div className="space-y-3">
                <p className="font-display2 text-xs text-green-400">PR created successfully.</p>
                <a
                  href={prResult.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block font-display2 text-xs text-stardust hover:underline break-all"
                >
                  {prResult.url}
                </a>
                <button
                  onClick={closePrModal}
                  className="w-full px-3 py-2 font-display2 text-xs text-jet-grey hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitPR} className="space-y-3">
                <div className="space-y-1">
                  <label className="block font-display2 text-xs text-jet-grey uppercase tracking-wider">
                    Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={prTitle}
                    onChange={e => setPrTitle(e.target.value)}
                    required
                    disabled={prSubmitting}
                    placeholder="e.g. Update press articles"
                    className="w-full bg-dusk border border-oscuro rounded px-3 py-2 text-white font-display2 text-xs focus:outline-none focus:border-stardust transition-colors disabled:opacity-50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block font-display2 text-xs text-jet-grey uppercase tracking-wider">
                    Description
                  </label>
                  <textarea
                    value={prDescription}
                    onChange={e => setPrDescription(e.target.value)}
                    disabled={prSubmitting}
                    rows={3}
                    placeholder="Optional — describe what changed and why"
                    className="w-full bg-dusk border border-oscuro rounded px-3 py-2 text-white font-display2 text-xs focus:outline-none focus:border-stardust transition-colors resize-none disabled:opacity-50"
                  />
                </div>
                {prResult?.error && (
                  <p className="font-display2 text-xs text-red-400">Error: {prResult.error}</p>
                )}
                <div className="flex justify-end space-x-2 pt-1">
                  <button
                    type="button"
                    onClick={closePrModal}
                    disabled={prSubmitting}
                    className="px-3 py-1.5 font-display2 text-xs text-jet-grey hover:text-white transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={prSubmitting}
                    className="px-3 py-1.5 bg-stardust hover:bg-moon text-white font-display2 text-xs rounded transition-colors disabled:opacity-50"
                  >
                    {prSubmitting ? 'Creating PR…' : 'Create PR'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
