import React from 'react';
import Logo from '../assets/HolbertonLogo.jpg';
import { StyleSheet, css } from 'aphrodite';


function Header() {
  return (
    <div className='App-header'>
      <img src={Logo} className={css(styles.appHeader)} alt='Holberton Logo' />
      <h1>School dashboard</h1>
    </div>
  );
}


const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    width: '100%',
    borderBottom: '2px solid rgb(212, 37, 37)'
  },
  h1: {
    color: 'rgb(212, 37, 37)',
    fontSize: '2rem',
    margin: 'auto 2rem'
  }
});

export default Header;
