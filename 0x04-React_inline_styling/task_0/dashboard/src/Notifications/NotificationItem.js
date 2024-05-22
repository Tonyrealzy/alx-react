import React from 'react';
import PropTypes from 'prop-types';


class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value } = this.props;

    handleClick = () => {
      this.props.markAsRead(this.props.id);
    }
    return (
      <>
        <li data-notification-type={type} dangerouslySetInnerHTML={html ? html : { __html: value}} onClick={this.handleClick}>
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

export default NotificationItem;
