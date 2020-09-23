import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './main.css'
import './fonts/iransans/iransans.css'
import './fonts/fontawsome/css/all.min.css'

// pages
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notFountPage";

function Application() {
    return (<Router>
        <Switch>
            <Route exact={"/"} path={"/"} component={HomePage}/>
            <Route path={"/home"} component={HomePage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </Router>)
}

export default Application