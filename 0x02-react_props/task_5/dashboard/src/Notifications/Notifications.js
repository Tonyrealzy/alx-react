import React from 'react';
import './Notifications.css';
import CloseIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ displayDrawer, listNotifications }) => {
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    }

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
                <ul>
                    (
                        listNotifications.map(notification => (
                            <div key={notification.id}>{notofication.value}</div>
                        ))
                    )
                </ul>
                }
            </div>
            }
        </div>
    );
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};
Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

export default Notifications;