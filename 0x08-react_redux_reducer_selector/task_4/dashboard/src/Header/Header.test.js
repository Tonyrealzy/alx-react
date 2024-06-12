import React from "react";
import { shallow } from 'enzyme';
import Header from "../Header/Header";
import AppContext from "../App/AppContext";


describe('Header', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
    });
    
    it("renders an image tag and h1 tag", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    const userContext = {
        isLoggedIn: true,
        user: {
            email: email
        },
        logOut: jest.fn()
    };

    it('should render logOutSection when isLoggedIn is true and email is set', () => {
        const wrapper = mount(
            <AppContext.Provider value={userContext}>
                <Header/>
            </AppContext.Provider>
        );
        expect(wrapper.find('.logOutSection').exists()).toBe(true);
    });
});