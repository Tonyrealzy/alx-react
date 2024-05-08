import React from 'react';
import './Notifications.css';
import CloseIcon from './close-icon.png';
import { getLatestNotification } from './utils';

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
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    );
};

export default Notifications;