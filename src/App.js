import './App.css';

import Header from './components/navbar/Header';
import Footer from './components/navbar/Footer';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
