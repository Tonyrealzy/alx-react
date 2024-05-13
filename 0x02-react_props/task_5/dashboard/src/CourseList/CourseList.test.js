import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });

  it('renders "No course available yet" message when listCourses is empty', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.text()).toContain('No course available yet');
  });
  
  it('renders course list rows when listCourses contains elements', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 }
    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(2);
  });
  
  it('renders course list rows correctly with the right content', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 }
    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    expect(wrapper.contains('ES6')).toBe(true);
    expect(wrapper.contains(60)).toBe(true);
    expect(wrapper.contains('Webpack')).toBe(true);
    expect(wrapper.contains(20)).toBe(true);
  });
  
  it('renders correctly if listCourses is not passed', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.text()).toContain('No course available yet');
  });
});