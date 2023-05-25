import React from 'react'

import Card from '../components/Card';
import { NavLink } from 'react-router-dom'

// Images 

import web1 from "../assets/images/web 1.png";
import python1 from "../assets/images/python 1.png";
import ccpp1 from "../assets/images/ccpp 1.png";
import java1 from "../assets/images/java 1.png";
import mren1 from "../assets/images/mren 1.png";
import app1 from "../assets/images/app 1.png";
import student_icon from "../assets/images/student-icon.png";



// Category 
import course_category_icon1 from "../assets/images/course-category-icon-1.png";
import course_category_icon2 from "../assets/images/course-category-icon-2.png";
import course_category_icon3 from "../assets/images/course-category-icon-3.png";
import course_category_icon4 from "../assets/images/course-category-icon-4.png";
import course_category_icon5 from "../assets/images/course-category-icon-5.png";
import course_category_icon6 from "../assets/images/course-category-icon-6.png";

import course_category_icon1w from "../assets/images/course-category-icon-1-w.png";
import course_category_icon2w from "../assets/images/course-category-icon-2-w.png";
import course_category_icon3w from "../assets/images/course-category-icon-3-w.png";
import course_category_icon4w from "../assets/images/course-category-icon-4-w.png";
import course_category_icon5w from "../assets/images/course-category-icon-5-w.png";
import course_category_icon6w from "../assets/images/course-category-icon-6-w.png";



// Courses
import robot from "../assets/images/robot.jpg";
import drone from "../assets/images/drone.jpg";
import iot from "../assets/images/iot.jpg";


// Robotics Images 
import robotImg from "../assets/images/robotics/robotics.jpg"



const TopbarCourses = () => {
    return (
        <div className="coursesState">
            <p className="p1" id='allTrainings'><NavLink to="/user">All Trainings</NavLink></p>
            <p className="p2" id='development'><NavLink to="/user/development">Development</NavLink></p>
            <p className="p3" id='coding'><NavLink to="/user/coding">Coding</NavLink></p>
            <p className="p4" id='robotics'><NavLink to="/user/robitcstraining">Robotics</NavLink></p>
            <p className="p5" id='iot'><NavLink to="/user/iottraining">IoT</NavLink></p>
        </div>
    )
}

export default TopbarCourses