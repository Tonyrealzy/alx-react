import React from 'react';
import './Notifications.css';
import CloseIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

const Notifications = () => {
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    }

    return (
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

            <ul>
                <NotificationItem type='default' value='New course available' />
                <NotificationItem type='urgent' value='New resume available' />
                <NotificationItem type='urgent' html={{ __html: getLatestNotification() }}  />
            </ul>
        </div>
    );
};

export default Notifications;