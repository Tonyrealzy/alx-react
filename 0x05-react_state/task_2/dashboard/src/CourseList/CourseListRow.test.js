import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";


describe("CourseListRow", () => {
  it("renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header" />
    );
    expect(wrapper.find("th")).toHaveLength(1);
    expect(wrapper.find("th").prop("colSpan")).toEqual(2);
  });

  it("renders two cells when textSecondCell is present and isHeader is true", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Header"
        textSecondCell="Subheader"
      />
    );
    expect(wrapper.find("th")).toHaveLength(2);
  });
  
  it("renders two td elements within a tr element when isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="Data"
        textSecondCell="Value"
      />
    );
    expect(wrapper.find("td")).toHaveLength(2);
    expect(wrapper.find("tr")).toHaveLength(1);
  });
  
  it('renders a header row with the correct background color', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(wrapper.find("tr").prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('renders a regular row with the correct background color', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Row 1" textSecondCell="Row 2" />);
    expect(wrapper.find("tr").prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });
});