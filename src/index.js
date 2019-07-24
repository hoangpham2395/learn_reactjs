import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ComponentAndProps from "./Demo/ComponentAndProps";
import Clock from "./Demo/StateAndLifecycle";
import Toggle from "./Demo/HandlingEvents";
import ConditionalRendering from "./Demo/ConditionalRendering";
import ListsAndKeys from "./Demo/ListsAndKeys";
import ComponentFunction from "./Demo/ComponentFunction";
import NameForm from "./Demo/Form/NameForm";
import FlavorForm from "./Demo/Form/FlavorForm";
import Reservation from "./Demo/Form/Reservation";
import LiftingStateUp from "./Demo/LiftingStateUp";

// ===================================
// Hello word, component, props

// ReactDOM.render(<App />, document.getElementById('root'));

// ===================================
// Rendering Elements

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
//
// setInterval(tick, 1000);

// ===================================
// State and Lifecycle

// ReactDOM.render(<Clock />, document.getElementById('root'));

// ===================================
// Handling Events

// ReactDOM.render(<Toggle />, document.getElementById('root'));

// ===================================
// Conditional Rendering

// ReactDOM.render(<ConditionalRendering />, document.getElementById('root'));

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/ComponentFunction">Component Function</Link>
                </li>
                <li>
                    <Link to="/ComponentAndProps">Component and Props</Link>
                </li>
                <li>
                    <Link to="/StateAndLifecycle">State and Lifecycle</Link>
                </li>
                <li>
                    <Link to="/HandlingEvents">Handling Events</Link>
                </li>
                <li>
                    <Link to="/ConditionalRendering">Conditional Rendering</Link>
                </li>
                <li>
                    <Link to="/ListsAndKeys">Lists and Keys</Link>
                </li>
                <li>
                    <Link to="/NameForm">Name Form</Link>
                </li>
                <li>
                    <Link to="/FlavorForm">Flavor Form</Link>
                </li>
                <li>
                    <Link to="/Reservation">Reservation</Link>
                </li>
                <li>
                    <Link to="/LiftingStateUp">Lifting State Up</Link>
                </li>
            </ul>
            <hr/>
            <Route exact path="/" component={App} />
            <Route path="/ComponentFunction" component={ComponentFunction} />
            <Route path="/ComponentAndProps" component={ComponentAndProps} />
            <Route path="/StateAndLifecycle" component={Clock} />
            <Route path="/HandlingEvents" component={Toggle} />
            <Route path="/ConditionalRendering" component={ConditionalRendering} />
            <Route path="/ListsAndKeys" component={ListsAndKeys} />
            <Route path="/NameForm" component={NameForm} />
            <Route path="/FlavorForm" component={FlavorForm} />
            <Route path="/Reservation" component={Reservation} />
            <Route path="/LiftingStateUp" component={LiftingStateUp} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
