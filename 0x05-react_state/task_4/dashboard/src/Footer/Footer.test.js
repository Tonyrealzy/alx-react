import React from "react";
import { shallow } from 'enzyme';
import Footer from "../Footer/Footer";
import AppContext from "../App/AppContext";


describe('Footer', () => {
    it('renders without crashing', () => {
        shallow(<Footer />);
    });
    
    it('renders the text "Copyright"', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text().toContain('Copyright'));
    });

    it('should not display contact link when the user is not logged in', () => {
        const contextValue = {isLoggedIn: false};
        const wrapper = mount(
            <AppContext.Provider value={contextValue}>
                <Footer/>
            </AppContext.Provider>
        );
        expect(wrapper.find('a[href="/contact"]').exists()).toBe(false);
    });

    it('should display contact link when the user is logged in', () => {
        const contextValue = {isLoggedIn: true};
        const wrapper = mount(
            <AppContext.Provider value={contextValue}>
                <Footer/>
            </AppContext.Provider>
        );
        expect(wrapper.find('a[href="/contact"]').exists()).toBe(true);
    });
});