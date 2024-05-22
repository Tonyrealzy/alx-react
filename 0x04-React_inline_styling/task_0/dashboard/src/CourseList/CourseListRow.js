import React from 'react';
import PropTypes from 'prop-types';


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    if(isHeader) {
        return (
          <tr style={{backgroundColor: '#deb5b545'}}>
            {textSecondCell === null ? (
                <th colSpan={2}>{textFirstCell}</th>
            ) : (
                <>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
                </>
            ) }
          </tr>
        );
    } else {
        return (
        <tr style={{backgroundColor: '#f5f5f5ab'}}>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
        </tr>
        );
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

export default CourseListRow;
