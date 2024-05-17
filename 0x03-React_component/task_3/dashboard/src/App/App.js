import React, {Component} from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import '../BodySection/BodySectionWithMarginBottom.css';
import PropTypes from 'prop-types';


class App extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if(event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logout;
    }
  };

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
            {
            this.props.isLoggedIn ?
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={listCourses}/> 
            </BodySectionWithMarginBottom>
            :
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login/>
            </BodySectionWithMarginBottom>
            }
            <div>
              <BodySection title='News from the School' children='Exciting things are happening at our school this month! Our science fair showcased incredible projects from students across all grades, with innovative experiments and groundbreaking research. The sports teams have also been on a winning streak, bringing home multiple championships. Additionally our school has introduced new extracurricular activities, including a coding club and a gardening program, to further enrich student learning and engagement. Stay tuned for more updates and achievements in the coming weeks!' />
            </div>
          </div>
  
          <div className='App-footer'>
            <Footer />
          </div>
        </div>
      </>
    );

  }
}

App.propTypes = {
  logout: PropTypes.func,
};

App.defaultProps = {
  logout: () => {},
};

export default App;