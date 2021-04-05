import React from 'react';
import './Music.css';

function Music(props) {
    return (
        <div className="music">
            <div className="cd-song">
                <img src="" alt="" />
            </div>
            <div className="title-song">
                <lable className="name-song">
                    Power Ranger Light Speed Rescue
                </lable>
                <lable className="name-singer">V.A</lable>
            </div>
            <div className="button-media">
                <i class="fa fa-step-backward" aria-hidden="true"></i>
                <i class="fa fa-play" aria-hidden="true"></i>
                <i class="fa fa-step-forward" aria-hidden="true"></i>
            </div>
            <div className="process-song">
                <lable id="time-current" className="time">
                    1:20
                </lable>
                <div className="process"></div>
                <lable id="time-total" className="time">
                    3:40
                </lable>
            </div>
            <div className="options">
                <i class="fa fa-ellipsis-v"></i>
            </div>
        </div>
    );
}

export default Music;
