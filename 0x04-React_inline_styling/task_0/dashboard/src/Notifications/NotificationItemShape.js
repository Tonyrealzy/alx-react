import React from "react";
import PropTypes, { shape } from "prop-types";

const NotificationItemShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    shape: PropTypes.shape({ '\_\_html': 'string' }).isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string
});


export default NotificationItemShape;