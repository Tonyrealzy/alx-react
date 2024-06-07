import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';



const CourseList = ({ listCourses }) => {
  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true}/>
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>

      <tbody>
        {listCourses.length === 0 ? 
        <CourseListRow textFirstCell='No course available yet'/>
        :
        (listCourses.map(course => (
          <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} className={css(index === 0 ? styles.firstChild : styles.others)} />
        )
      ))
        }
      </tbody>
    </table>
  )
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};
CourseList.defaultProps = {
  listCourses: [],
};

const styles = StyleSheet.create({
  table: {
    border:' 2px solid #000',
    width: '100%'
  },
  firstChild: {
      textAlign: 'center'
  },
  others: {
    textAlign: 'left'
},
  tr: {
      borderBottom: '1px solid #000'
  }
});

export default CourseList;