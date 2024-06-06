it("contains a div with class App-Header", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".App-header").exists()).toBe(true);
});

it("contains a div with class App-body", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("App-body").exists()).toBe(true);
});

it("contains a div with class App-footer", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("App-footer").exists()).toBe(true);
});
