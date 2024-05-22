import React from 'react';
import { StyleSheet, css } from 'aphrodite';


function Login() {
  return (
    <div className={css(styles.appBody)}>
    <p>Login to access the full dashboard</p>
    <aside>
      <form>
        <label htmlFor='email'>
        Email:
        </label>
        <input type='email' className={css(styles.email)} />

        <label htmlFor='password'>
        Password:
        </label>
        <input type='password' className={css(styles.password)} />

        <button className={css(styles.button)}>OK</button>
      </form>
    </aside>
    </div>
  );
}

const styles = StyleSheet.create({
  appBody: {
    height: '100vh',
    textAlign: 'left',
    padding: '2rem'
  },
  email, password: {
    padding: '0.5rem',
    margin: '0.5rem 1rem',
    border: '0.1px solid grey',
    outline: 'none'
  },
  button: {
    padding: '0.5rem 1rem',
    margin: '0.5rem 1rem',
    border: '0.1px solid grey',
    borderRadius: '5px'
  }
});

export default Login;
