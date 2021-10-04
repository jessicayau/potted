import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./App.css";
import { IconContext } from "react-icons";
import GlobalStyle from "./assets/styles/globalStyles";
import ScrollToTop from "./components/ScrollToTop";
import { checkUserSession } from "./redux/user/userSlice";
import { fetchProductsStart } from "./redux/shop/shopSlice";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchProductsStart());
    }, [dispatch]);

    return (
        <div className="app">
            <GlobalStyle />
            <IconContext.Provider
                value={{
                    style: {
                        display: "flex",
                        fontSize: "1.3rem",
                        alignSelf: "center",
                    },
                }}
            >
                <Router>
                    <ScrollToTop />
                    <Header />
                    <Main />
                    <Footer />
                </Router>
            </IconContext.Provider>
        </div>
    );
};

export default App;
