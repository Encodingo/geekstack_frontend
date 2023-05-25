import React from 'react'
import { NavLink } from 'react-router-dom'
const TopbarMyTrainings = () => {
    return (
        <div className="coursesState">
            <p className="p1" id='allTrainings_tr'><NavLink to="/user/enrolledcourses">All Trainings</NavLink></p>
            <p className="p2" id='development_tr'><NavLink to="/user/mytrainings/development">Development</NavLink></p>
            <p className="p3" id='coding_tr'><NavLink to="/user/mytrainings/coding">Coding</NavLink></p>
            <p className="p4" id='robotics_tr'><NavLink to="/user/mytrainings/robitcs">Robotics</NavLink></p>
            <p className="p5" id='iot_tr'><NavLink to="/user/mytrainings/iot">IoT</NavLink></p>
        </div>
    )
}
export default TopbarMyTrainings