import React, {Component} from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn
    };
  }

  render() {
    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];
  
    return (
      <>
        <Notifications />
        
        <div className="App">
          <div className='App-header'>
            <Header />
          </div>
  
          <div className='App-body'>
            {this.state.isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login/>}
          </div>
  
          <div className='App-footer'>
            <Footer />
          </div>
        </div>
      </>
    );

  }
}

export default App;