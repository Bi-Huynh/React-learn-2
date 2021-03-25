import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home.jsx';

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
