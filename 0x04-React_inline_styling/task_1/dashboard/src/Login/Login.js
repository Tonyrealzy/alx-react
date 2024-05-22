import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='App-body'>
    <p>Login to access the full dashboard</p>
    <aside>
      <form>
        <label htmlFor='email'>
        Email:
        </label>
        <input type='email' id='email' />

        <label htmlFor='password'>
        Password:
        </label>
        <input type='password' id='password' />

        <button>OK</button>
      </form>
    </aside>
    </div>
  );
}

export default Login;
