import './App.css';

import Header from './components/navbar/Header';
import Footer from './components/navbar/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
