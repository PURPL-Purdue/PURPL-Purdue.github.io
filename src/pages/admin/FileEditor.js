import { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';

const FileEditor = ({ filePath, proxyUrl, token, stagedContent, onFetch, onEdit }) => {
  const [content, setContent] = useState(stagedContent ?? null);
  const [loading, setLoading] = useState(stagedContent == null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (stagedContent != null) return;

    const encodedPath = encodeURIComponent(filePath);
    fetch(`${proxyUrl}/api/files/${encodedPath}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(({ content: b64, sha }) => {
        const decoded = atob(b64);
        setContent(decoded);
        onFetch(filePath, decoded, sha);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filePath]);

  const handleChange = value => {
    setContent(value);
    onEdit(filePath, value);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full text-jet-grey font-display2 text-sm">
        Loading {filePath}…
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full text-red-400 font-display2 text-sm">
        Error loading file: {error}
      </div>
    );
  }

  return (
    <Editor
      height="100%"
      language="javascript"
      theme="vs-dark"
      value={content ?? ''}
      onChange={handleChange}
      options={{
        minimap: { enabled: false },
        fontSize: 13,
        wordWrap: 'on',
        scrollBeyondLastLine: false,
        tabSize: 2,
      }}
    />
  );
};

export default FileEditor;
