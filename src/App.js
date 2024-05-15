import './App.css';

import Landing from './pages/Landing';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
