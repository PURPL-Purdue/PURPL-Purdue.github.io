import './App.css';

import Header from './components/navbar/Header';
import Footer from './components/navbar/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';

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
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
