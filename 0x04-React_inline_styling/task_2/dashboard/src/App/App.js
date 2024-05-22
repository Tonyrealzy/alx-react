import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';


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
      <article>
        <Notifications />
        
        <div className={css(styles.app)}>
          <div className={css(styles.appHeader)}>
            <Header />
          </div>
  
          <div className={css(styles.body)}>
            <aside>
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
            </aside>
            
            <aside>
              <BodySection title='News from the School' children='Exciting things are happening at our school this month! Our science fair showcased incredible projects from students across all grades, with innovative experiments and groundbreaking research. The sports teams have also been on a winning streak, bringing home multiple championships. Additionally our school has introduced new extracurricular activities, including a coding club and a gardening program, to further enrich student learning and engagement. Stay tuned for more updates and achievements in the coming weeks!' />
            </aside>
          </div>
  
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </article>
    );

  }
}


const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    fontSize: '18px'
  },
  appHeader: {
    width: '100%',
    borderBottom: '4px solid rgb(212, 37, 37)'
  },
  h1: {
    color: 'rgb(212, 37, 37)',
    fontSize: '2rem',
    margin:' auto 2rem'
  },
  body: {
    height: '100vh',
    textAlign: 'left',
    padding: '2rem'
  },
  footer: {
    fontStyle: 'italic',
    borderTop: '2px solid rgb(212, 37, 37)'
  }
});

App.defaultProps = {
  logout: () => {}
};


export default App;