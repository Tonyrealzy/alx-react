import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, css } from "aphrodite";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import AppContext from "./AppContext";
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
} from "../actions/uiActionCreators";

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.get("isUserLoggedIn"),
    displayDrawer: state.ui.get("isNotificationDrawerVisible"),
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      logOut: this.logOut,
      listNotifications: [],
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      event.preventDefault();
      alert("Logging you out");
      this.props.logout;
    }
  };

  render() {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    const { user, logOut } = this.state;
    const { isLoggedIn, displayDrawer } = this.props;

    return (
      <AppContext.Provider
        value={{
          user,
          logOut,
          isLoggedIn,
          displayDrawer,
          displayNotificationDrawer,
          hideNotificationDrawer,
        }}
      >
        <article>
          <Notifications
            displayDrawer={this.state.displayDrawer}
          />

          <div className={css(styles.app)}>
            <div className={css(styles.appHeader)}>
              <Header />
            </div>

            <div className={css(styles.body)}>
              <aside>
                {user.isLoggedIn ? (
                  <BodySectionWithMarginBottom title="Course list">
                    <CourseList listCourses={listCourses} />
                  </BodySectionWithMarginBottom>
                ) : (
                  <BodySectionWithMarginBottom title="Log in to continue">
                    <Login logIn={this.logIn} />
                  </BodySectionWithMarginBottom>
                )}
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
    textAlign: "center",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    fontSize: "18px",
  },
  appHeader: {
    width: "100%",
    borderBottom: "4px solid rgb(212, 37, 37)",
  },
  h1: {
    color: "rgb(212, 37, 37)",
    fontSize: "2rem",
    margin: " auto 2rem",
  },
  body: {
    height: "100vh",
    textAlign: "left",
    padding: "2rem",
  },
  footer: {
    fontStyle: "italic",
    borderTop: "2px solid rgb(212, 37, 37)",
  },
});

App.defaultProps = {
  logout: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
