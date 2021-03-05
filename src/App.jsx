import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style/index.css';
import { CustomizedSnackbar, ScrollToTop } from './components/UiKits';
import { createMuiTheme } from '@material-ui/core/styles';
import { getUserID } from './redux/users/selectors';
import Header from './components/Header/Header';
import Router from './Router';
import { ThemeProvider } from '@material-ui/core/styles';
import { fetchUsersLikes, listenAuthState } from './redux/users/operations';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#447B64',
        },
    },
});

const App = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const userID = getUserID(selector);

    useEffect(() => {
        dispatch(listenAuthState());
        if (userID) {
            dispatch(fetchUsersLikes(userID));
        }
    }, [userID]);

    return (
        <ThemeProvider theme={theme}>
            <ScrollToTop />
            <CustomizedSnackbar />
            <Header />
            <Router />
        </ThemeProvider>
    );
};

export default App;
