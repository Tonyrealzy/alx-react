import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function App() {
  return (
    <>
      <Notifications />
      
      <div className="App">
        <div className='App-header'>
          <Header />
        </div>

        <div className='App-body'>
          <Login />
        </div>

        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
