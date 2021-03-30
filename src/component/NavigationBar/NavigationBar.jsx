import React, { useContext, useRef } from 'react';
import { HomeContext } from '../../stores/Home';
import './NavigationBar.css';

NavigationBar.propTypes = {};

function NavigationBar() {
    const {
        ActiveTodo: { activeTodo, setActiveTodo },
    } = useContext(HomeContext);
    const navigation = useRef(null);

    const handleTodoClick = (event) => {
        setActiveTodo(!activeTodo);
    };

    const handleOpenCloseNavigation = (event) => {
        // console.log(event.target);
        event.target.classList.toggle('active');
        navigation.current.classList.toggle('active');
    };

    return (
        // <nav className="navigation">
        //     <ul>
        //         <li>
        //             <a href="/">
        //                 <div className="icon">
        //                     <i className="fa fa-home" aria-hidden="true"></i>
        //                     <i className="fa fa-home" aria-hidden="true"></i>
        //                 </div>
        //             </a>
        //         </li>
        //         <li>
        //             <a href="#">
        //                 <div className="icon" onClick={handleTodoClick}>
        //                     <i className="fa fa-list" aria-hidden="true"></i>
        //                     <i className="fa fa-list" aria-hidden="true"></i>
        //                 </div>
        //             </a>
        //         </li>
        //     </ul>
        // </nav>
        <div className="navigation">
            <div className="nav-body" ref={navigation}>
                <ul>
                    <li>
                        <a href="">
                            <span className="icon">
                                <i
                                    className="fa fa-home"
                                    aria-hidden="true"
                                ></i>
                            </span>
                            <span className="title">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={handleTodoClick}>
                            <span className="icon">
                                <i
                                    className="fa fa-list-ul"
                                    aria-hidden="true"
                                ></i>
                            </span>
                            <span className="title">Todo</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <i
                                    className="fa fa-music"
                                    aria-hidden="true"
                                ></i>
                            </span>
                            <span className="title">Music</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="toggle" onClick={handleOpenCloseNavigation}></div>
        </div>
    );
}

export default NavigationBar;
