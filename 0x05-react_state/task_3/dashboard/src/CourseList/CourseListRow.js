import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    const [isChecked, setIsChecked] = React.useState(false);

    handleCheckBoxChange = () => {
        setIsChecked(!isChecked);
    };

    if(isHeader) {
        return (
          <tr className={css(styles.header)}>
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
        <tr className={css(styles.body)}>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
        </tr>
        );
    }
}

return (
    <tr className={isChecked ? 'rowChecked' : ''}>
        <td>
            <input type='checkbox' onChange={handleCheckBoxChange} checked={isChecked} />
            { textFirstCell }
        </td>

        <td>{ textSecondCell }</td>
    </tr>
);

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

const styles = StyleSheet.create({
    rowChecked: {
        backgroundColor: '#e6e4e4'
    },
    header: {
        backgroundColor: '#deb5b545'
    },
    body: {
        backgroundColor: '#f5f5f5ab'
    }
});

export default CourseListRow;
