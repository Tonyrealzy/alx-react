import React from 'react';
import Logo from '../assets/HolbertonLogo.jpg';
import { StyleSheet, css } from 'aphrodite';


function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={Logo} alt='Holberton Logo' />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  );
}


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    width: '100%',
  },
  h1: {
    color: 'rgb(212, 37, 37)',
    fontSize: '2rem',
    margin: 'auto 2rem'
  }
});

export default Header;
