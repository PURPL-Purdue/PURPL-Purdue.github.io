import './App.css';

import { Suspense } from 'react';
import Header from './components/navbar/Header';
import Footer from './components/navbar/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';

// Matches the dark page background so a lazy route chunk loading in doesn't flash white.
const RouteFallback = () => <div className="min-h-screen bg-dusk" />;

function App() {

  const handleSkipToMain = (e) => {
    e.preventDefault();
    const main = document.getElementById('main-content');
    if (main) {
      main.scrollIntoView({ behavior: 'smooth' });
      main.focus();
    }
  };

  return (
    <div className="App">
      <a
        href="#main-content"
        className="skip-link"
        onClick={handleSkipToMain}
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Header/>
      <main id="main-content" tabIndex="-1">
        <Suspense fallback={<RouteFallback />}>
          <Outlet/>
        </Suspense>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
