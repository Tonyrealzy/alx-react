import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';


function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      
      <div className="App">
        <div className='App-header'>
          <Header />
        </div>

        <div className='App-body'>
          {isLoggedIn ? <CourseList/> : <Login/>}
        </div>

        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
App.defaultProps = {
  isLoggedIn: false,
};

export default App;