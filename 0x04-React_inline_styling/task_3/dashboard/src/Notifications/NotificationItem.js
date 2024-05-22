import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value } = this.props;

    handleClick = () => {
      this.props.markAsRead(this.props.id);
    }
    return (
      <>
        <li 
        className={css(styles.li, type === 'urgent' ? styles.urgent : styles.default)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html ? html : { __html: value}}
        onClick={this.handleClick}
        >
          { value }
        </li>
      </>
      );
  }
}
  
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({    
  li: {
    borderBottom: '2px solid black',
    paddingBottom: '10px',
    default: {
        color: 'blue'
    },
    urgent: {
        color: 'red'
    }
  }
});

export default NotificationItem;
