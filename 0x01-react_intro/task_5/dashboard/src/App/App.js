import React from 'react';
import './App.css';
import Logo from '../assets/HolbertonLogo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <img src={Logo} className='App-logo' alt='Holberton Logo' />
        <h1>School dashboard</h1>
      </div>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <aside>
          <label htmlFor='email'>
            Email:
          </label>
          <input type='email' id='email' />

          <label htmlFor='password'>
            Password:
          </label>
          <input type='password' id='password' />

          <button>OK</button>
        </aside>
      </div>

      <div className='App-footer'>
        <p>Copyright { getFullYear() } - { getFooterCopy() }</p>
      </div>
    </div>
  );
}

export default App;
