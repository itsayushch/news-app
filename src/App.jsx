import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/App.css';
import './styles/Navbar.css';

import Navbar from './components/Navbar/index';
import Home from './components/Home';
import NewsProvider from './components/NewsProvider';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:id" component={NewsProvider} />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default App;