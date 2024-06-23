import React from "react";

const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: false
}

const defaultLogout = () => {}

const AppContext = React.createContext({
    user: defaultUser,
    logOut: defaultLogout
});

export default AppContext;