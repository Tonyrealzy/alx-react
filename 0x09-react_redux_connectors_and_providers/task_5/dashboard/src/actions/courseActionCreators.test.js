import { select_Course, unSelect_Course } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe('a test for the selectCourse action', () => {
    it('selectCourse calls the right arguments', () => {
        const index = 1;
        const expectedAction = { type: SELECT_COURSE, index: 1 };
        expect(select_Course(index)).toEqual(expectedAction);
    });

    it('unSelectCourse calls the right arguments', () => {
        const index = 1;
        const expectedAction = { type: UNSELECT_COURSE, index: 1 };
        expect(unSelect_Course(index)).toEqual(expectedAction);
    });
});