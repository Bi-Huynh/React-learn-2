import React from 'react';
import StoresHome from '../../stores/Home.jsx';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import Todo from '../Todo/Todo.jsx';
import './Home.css';

Home.propTypes = {};

function Home(props) {
    return (
        <StoresHome>
            <div className="Content">
                <NavigationBar></NavigationBar>
                <Todo></Todo>
            </div>
        </StoresHome>
    );
}

export default Home;
