import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
    toke: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
});

export default AuthContext;

function calculateRemainingTime(expirationTime) {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;

    return remainingDuration;
};

function retrieveStoredToken() {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime')

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime <= 6000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return {
        toke: storedToken,
        duration: remainingTime
    };
};

export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken();

    let initialToken;
    if (tokenData) {
        initialToken = tokenData.toke;
    }
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');

        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    function loginHandler(token, expirationTime) {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);

        const remainingTime = calculateRemainingTime(expirationTime);

        logoutTimer = setTimeout(logoutHandler, remainingTime);
    };

    useEffect(() => {
        if (tokenData) {
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
