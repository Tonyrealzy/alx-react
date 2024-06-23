import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const select_Course = (index) => ({
    type: SELECT_COURSE,
    index
});

export const unSelect_Course = (index) => ({
    type: UNSELECT_COURSE,
    index
});

export const boundSelectCourse = (dispatch) => dispatch(select_Course(index));
export const boundUnselectCourse = (dispatch) => dispatch(unSelect_Course(index));
