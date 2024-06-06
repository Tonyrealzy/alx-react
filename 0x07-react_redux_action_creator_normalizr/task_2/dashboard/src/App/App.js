import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import AppContext from './AppContext';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
      password: '',
      isLoggedIn: false
      },
      logOut: this.logOut,
      listNotifications: []
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true
      }
    });
  }

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      }
    });
  }

  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true
    });
  }

  handleHideDrawer() {
    this.setState({
      displayDrawer: false
    });
  }

  markNotificationAsRead(id) {
    this.setState(prevState => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id)
    }));
  }

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
    const { user, logOut } = this.state;
  

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <article>
          <Notifications
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          listNotifications={this.state.listNotifications}
          markNotificationAsRead={this.markNotificationAsRead}
          />
          
          <div className={css(styles.app)}>
            <div className={css(styles.appHeader)}>
              <Header />
            </div>
    
            <div className={css(styles.body)}>
              <aside>
                {
                user.isLoggedIn ?
                <BodySectionWithMarginBottom title='Course list'>
                  <CourseList listCourses={listCourses}/> 
                </BodySectionWithMarginBottom>
                :
                <BodySectionWithMarginBottom title='Log in to continue'>
                  <Login logIn={this.logIn}/>
                </BodySectionWithMarginBottom>
                }
              </aside>
            </div>
    
            <div className={css(styles.footer)}>
              <Footer />
            </div>
          </div>
        </article>
      </AppContext.Provider>
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