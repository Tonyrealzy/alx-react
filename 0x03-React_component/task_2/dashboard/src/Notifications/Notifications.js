import React, {Component} from 'react';
import './Notifications.css';
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

    render() {
        const { displayDrawer, listNotifications } = this.props;
        return (
            <div className='menuItem'>
                <p className='right'>Your notifications</p>
                {displayDrawer && 
                <div className='Notifications'>
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

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};
Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

export default Notifications; 