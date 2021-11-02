import React from "react"
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import Properties from './components/Properties';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Products from "./components/Products";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Products />
        <Counter valor={0} />
        <img src={logo} className="App-logo" alt="logo" />
        <FirstComponent />
        <Properties saludo="Alfio" numero={100}/>
      </header>
        <Footer />
    </div>
  );
}

export default App;
