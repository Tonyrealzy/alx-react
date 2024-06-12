import React, { useContext } from 'react';
import AppContext from '../App/AppContext';
import Logo from '../assets/HolbertonLogo.jpg';
import { StyleSheet, css } from 'aphrodite';


function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <div className={css(styles.appHeader)}>
      <img src={Logo} alt='Holberton Logo' />
      <h1 className={css(styles.h1)}>School dashboard</h1>
      {user.isLoggedIn && (
        <section className={css(styles.logoutSection)}>
          Welcome {user.email}!
          <a href='#' onClick={logOut}>Log-out</a>
        </section>
      )}
    </div>
  );
}


const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    width: '100%',
  },
  h1: {
    color: 'rgb(212, 37, 37)',
    fontSize: '2rem',
    margin: 'auto 2rem'
  },
  logoutSection: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default Header;
