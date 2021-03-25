import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './component/Home/Home.jsx';
import './App.css';

function App() {
    return (
        <div className="container">
            <Router>
                {/* <Navigate></Navigate> */}
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    {/* <Route path="/todo">
                        <Home />
                    </Route> */}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
