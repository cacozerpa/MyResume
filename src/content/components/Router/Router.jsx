import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../../styles/style.css';

import Navbar from '../Navbar/Navbar'
import HomeNav from '../Navbar/HomeNavBar'
import Home from '../Home/Home';
import SpanishHome from '../Spanish/HomeSpanish';
import DataSpanish from "../Spanish/DataSpanish";

function Index(){
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <HomeNav/>
                        <Home/>
                    </Route>
                    <Route path='/esp'>
                        <Navbar/>
                        <SpanishHome/>
                    </Route>
                    <Route path='/espdata'>
                        <Navbar/>
                        <DataSpanish/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default Index