import React from 'react';
import './App.css';
import Order from './components/order';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container align-items-center">
      <header className="App-header">
        <h2 >Order Details </h2>
        <Order />
      </header>
    </div >
  );
}

export default App;
