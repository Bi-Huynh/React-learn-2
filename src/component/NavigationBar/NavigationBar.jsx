import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { HomeContext } from '../../stores/Home';

import './NavigationBar.css';
import IconTodo from '../../image/icon/to-do.svg';

NavigationBar.propTypes = {};

function NavigationBar() {
    const {
        ActiveTodo: { activeTodo, setActiveTodo },
    } = useContext(HomeContext);

    const handleTodoClick = (event) => {
        setActiveTodo(!activeTodo);
    };

    return (
        <nav className="navigation">
            <ul>
                <li>
                    <a href="/">
                        <div className="icon">
                            <i className="fa fa-home" aria-hidden="true"></i>
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        {/* <div className="name">
                            <span data-text="Home">Home</span>
                        </div> */}
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="icon" onClick={handleTodoClick}>
                            <i className="fa fa-list" aria-hidden="true"></i>
                            <i className="fa fa-list" aria-hidden="true"></i>
                        </div>
                        {/* <div className="name">
                            <span data-text="Todo">Todo</span>
                        </div> */}
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;
