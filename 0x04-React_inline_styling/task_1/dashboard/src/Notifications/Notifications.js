import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import CloseIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.displayDrawer = this.props.displayDrawer;
        this.listNotifications = this.props.listNotifications;
        this.markAsRead = this.markAsRead.bind(this);
    }
    
    handleButtonClick() {
        console.log('Close button has been clicked');
    }
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }
    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }


    render() {
        const { displayDrawer, listNotifications } = this.props;

        return (
            <div className='menuItem'>
                <p className={css(styles.right)}>Your notifications</p>
                {displayDrawer && 
                <div className={css(styles.Notifications)}>
                    <aside style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>Here is the list of notifications</p>
                        <button
                        aria-label='Close'
                        onClick={handleButtonClick}
                        >
                            <img src={CloseIcon} style={{ height: '0.5rem', border: 'none' }} alt='close icon' />
                        </button>
                    </aside>

                    {listNotifications.length === 0 ?
                    (<NotificationItem value='No new notification for now'/>)
                    :
                    (listNotifications.map(notifications => (
                    <NotificationItem key={notifications.id} value={notifications.value} />
                    )))
                    }
                </div>
                }
            </div>
        );
    }
}

const styles = StyleSheet.create({
    Notifications: {
        padding: '1rem',
        border: '1px dotted rgb(212, 37, 37)'
    },
    
    // .Notifications ul .NotificationItem[type='default'] {
    //     color: blue;
    // }
    
    // .Notifications ul .NotificationItem[type='urgent'] {
    //     color: red;
    // }
    
    right: {
        float: 'right',
        padding: '0 1rem'
    }
});

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

exp