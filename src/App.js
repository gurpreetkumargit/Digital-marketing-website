import GlobalStyle from "./globalStyles";
import React from "react";
import { Navbar, Footer } from "./components";

import Home from "./pages/HomePage/Home";
import Partners from "./pages/Partners/Partners";
import Growth from "./pages/Growth/Growth";
import Services from "./pages/ServicesPage/Services";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return ( <
        Router >
        <
        GlobalStyle / >

        <
        Navbar / >
        <
        Routes >

        <
        Route exact path = "/"
        element = { < Home / > }
        />{" "} <
        Route exact path = "/Services"
        element = { < Services / > }
        /> <
        Route exact path = "/Partners"
        element = { < Partners / > }
        /> <
        Route exact path = "/Growth"
        element = { < Growth / > }
        />

        <
        /Routes> <
        Footer / >
        <
        /Router>
    );
}

export default App;