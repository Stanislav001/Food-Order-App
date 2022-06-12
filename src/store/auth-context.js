import React, { useState } from "react";

const AuthContext = React.createContext({
    toke: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
});

export default AuthContext;

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);

    const userIsLoggedIn = !!token;

    function loginHandler(token) {
        setToken(token);
    };

    function logoutHandler() {
        setToken(null);
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContextProvider value={contextValue}>
            {props.children}
        </AuthContextProvider>
    )
}
