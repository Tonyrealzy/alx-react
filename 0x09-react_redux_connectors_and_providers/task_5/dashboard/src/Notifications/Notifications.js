import React, { PureComponent } from "react";
import { StyleSheet, css } from "aphrodite";
import CloseIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { fetchNotifications } from "../actions/notificationActionCreators";

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
    this.displayDrawer = this.props.displayDrawer;
    this.listNotifications = this.props.listNotifications;
    this.fetchNotifications = this.props.fetchNotifications;
    this.markAsRead = this.markAsRead.bind(this);
  }

  handleButtonClick() {
    console.log("Close button has been clicked");
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;
    const opacityAnimation = StyleSheet.create({
      atZero: {
        opacity: 0.5,
      },
      atHundred: {
        opacity: 1,
      },
    });
    const bounceAnimation = StyleSheet.create({
      atZero: {
        transform: "translateY(0px)",
      },
      atFifty: {
        transform: "translateY(-5px)",
      },
      atHundred: {
        transform: "translateY(5px)",
      },
    });
    const menuStyles = StyleSheet.create({
      Notifications: {
        border: "1px dotted rgb(212, 37, 37)",
        width: "100%",
      },
      right: {
        float: "right",
        padding: "0 1rem",
      },
      menuItem: {
        float: "right",
        backgroundColor: "#fff8f8",
        pointer: "cursor",
        ":hover": {
          animationName: [opacityAnimation, bounceAnimation],
          animationDuration: "1s, 0.5s",
          animationIterationCount: "3",
        },
      },
    });

    React.useEffect(() => {
      fetchNotifications();
    }, [fetchNotifications]);

    return (
      <div className={css(menuStyles.menuItem)}>
        <p className={css(styles.right)}>Your notifications</p>
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            <aside style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Here is the list of notifications</p>
              <button aria-label="Close" onClick={handleDisplayDrawer}>
                <img
                  src={CloseIcon}
                  style={{ height: "0.5rem", border: "none" }}
                  alt="close icon"
                  onClick={handleHideDrawer}
                />
              </button>
            </aside>

            {listNotifications.length === 0 ? (
              <NotificationItem value="No new notification for now" />
            ) : (
              listNotifications.map((notifications) => (
                <NotificationItem
                  key={notifications.id}
                  value={notifications.value}
                  onClick={() => markNotificationAsRead(notifications.id)}
                />
              ))
            )}
          </div>
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  Notifications: {
    border: "1px dotted rgb(212, 37, 37)",
    width: "100%",
  },
  right: {
    float: "right",
    padding: "0 1rem",
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  fetchNotifications: PropTypes.func,
  markNotificationAsRead: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  fetchNotifications: () => {},
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.get("isUserLoggedIn"),
    displayDrawer: state.ui.get("isNotificationDrawerVisible"),
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
