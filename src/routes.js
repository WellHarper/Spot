import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/header';
import Main from './components/main';
import HeaderCSS from './components/header.css'
import MainCSS from './components/main.css'
import Lista from './components/lista';
import App from './App'

// react-router-dom

class Routes extends Component {

    render() {
        return <BrowserRouter>
        
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/lista" component={Lista}/>
        </Switch>
        
        </BrowserRouter>
    }
}

export default Routes