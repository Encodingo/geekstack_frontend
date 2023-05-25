import React from 'react'

import web1 from "../assets/images/web 1.png";
import student_icon from "../assets/images/student-icon.png";

const Card = (props) => {
    return (

        <div className="course-card">

            <div className="course-banner">
                <img src={props.image} alt="course banner" />

                <div className="course-tag-box">
                    <a href="#" className="badge-tag orange">Development</a>
                    <a href="#" className="badge-tag blue">Web Development</a>
                </div>
            </div>

            <div className="course-content">

                <h3 className="card-title">
                    <a href="#">{props.heading}</a>
                </h3>

                <div className="wrapper border-bottom">
                    <div className="enrolled">
                        <div className="icon-user">
                            <img src={student_icon} alt="user icon" />
                        </div>

                        <p>600k</p>
                    </div>



                    <div className="rating">
                        <ion-icon name="star"></ion-icon>
                        <p>5.0 (2k)</p>
                    </div>

                </div>

                <div className="wrapper">
                    <div className="course-view">
                        <a href="https://pages.razorpay.com/geekstacks-training">
                            View
                            Details</a>
                    </div>
                    <div className="course-price">₹{props.price}</div>

                </div>

            </div>

        </div>
    )
}

export default Card