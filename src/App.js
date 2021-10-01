import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./App.css";
import { IconContext } from "react-icons";
import GlobalStyle from "./assets/styles/globalStyles";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
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
