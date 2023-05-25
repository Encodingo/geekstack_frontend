import { React, useEffect, useState } from 'react'
import axios from 'axios';
import CourseCard from '../components/CourseCard';

// Images 


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



// IOT Images 
import robotImg from "../assets/images/robotics/robotics.jpg"
import iotImg from "../assets/images/iot/iot.jpg"

const Iot = () => {
    const cards = [
        { id: 1, heading: 'IoT (Career building Course', price: '11799', image: iotImg },
        { id: 2, heading: 'Home Automation using IoT', price: '1999', image: iotImg },
        { id: 3, heading: 'Smart irrigation System', price: '1899', image: iotImg },
        { id: 4, heading: 'Smart Building using IoT', price: '1799', image: iotImg },
        { id: 5, heading: 'IoT using Arduino', price: '1399', image: iotImg },
        { id: 6, heading: '2 IoT Projects (Combo Course)', price: '2199', image: iotImg },
        { id: 7, heading: '5 IoT Projects (Combo Course)', price: '4599', image: iotImg },
        { id: 8, heading: 'Smart Water Monitoring', price: '1799', image: iotImg },
        { id: 9, heading: 'Automated Street Lighting', price: '1699', image: iotImg },
        { id: 10, heading: 'IoT Training & Internship', price: '29999', image: iotImg },
        { id: 11, heading: 'Home Automation System using IoT & Raspberry Pi', price: '4999', image: iotImg },
    ];


    const [trainings, setTrainings] = useState([]);
    useEffect(() => {

        // Fetching All Trainings 
        axios.get(`${process.env.REACT_APP_HOST_URL}/api/training/alltrainings`)
            .then(res => { setTrainings(res.data) })
            .catch(err => { console.log(err); })

    });

    return (
        <>


            {/* Category  */}
            <section className="category">

                <p className="section-subtitle"></p>

                <h2 className="section-title">IOT Highlights</h2>

                <ul className="course-item-group">

                    <li className="course-category-item">

                        <div className="wrapper">
                            <img src={course_category_icon1} alt="category icon /"
                                className="category-icon default" />

                            <img src={course_category_icon1w} alt="category icon white /"
                                className="category-icon hover" />
                        </div>

                        <div className="course-category-content">
                            <h3 className="category-title">
                                <a href="#">Beginner Friendly</a>
                            </h3>

                            <p className="category-subtitle">No Prior Knowledge Required</p>
                        </div>

                    </li>


                    <li className="course-category-item">

                        <div className="wrapper">
                            <img src={course_category_icon2} alt="category icon /"
                                className="category-icon default" />

                            <img src={course_category_icon2w} alt="category icon white /"
                                className="category-icon hover" />
                        </div>

                        <div className="course-category-content">
                            <h3 className="category-title">
                                <a href="#">Project & Assignment</a>
                            </h3>

                            <p className="category-subtitle">For hands-on practice</p>
                        </div>

                    </li>


                    <li className="course-category-item">

                        <div className="wrapper">
                            <img src={course_category_icon3} alt="category icon /"
                                className="category-icon default" />

                            <img src={course_category_icon3w} alt="category icon white /"
                                className="category-icon hover" />
                        </div>

                        <div className="course-category-content">
                            <h3 className="category-title">
                                <a href="#">Learn Art & Design</a>
                            </h3>

                            <p className="category-subtitle">Fun & Challenging</p>
                        </div>

                    </li>


                    <li className="course-category-item">

                        <div className="wrapper">
                            <img src={course_category_icon4} alt="category icon /"
                                className="category-icon default" />

                            <img src={course_category_icon4w} alt="category icon white /"
                                className="category-icon hover" />
                        </div>

                        <div className="course-category-content">
                            <h3 className="category-title">
                                <a href="#">Learn Lifestyle</a>
                            </h3>

                            <p className="category-subtitle">New Skills, New You</p>
                        </div>

                    </li>


                    <li className="course-category-item">

                        <div className="wrapper">
                            <img src={course_category_icon5} alt="category icon /"
                                className="category-icon default" />

                            <img src={course_category_icon5w} alt="category icon white /"
                                className="category-icon hover" />
                        </div>

                        <div className="course-category-content">
                            <h3 className="category-title">
                                <a href="#">Placement Assistance</a>
                            </h3>

                            <p className="category-subtitle">To build your career</p>
                        </div>

                    </li>


                    <li className="course-category-item">

                        <div className="wrapper">
                            <img src={course_category_icon6} alt="category icon /"
                                className="category-icon default" />

                            <img src={course_category_icon6w} alt="category icon white /"
                                className="category-icon hover" />
                        </div>

                        <div className="course-category-content">
                            <h3 className="category-title">
                                <a href="#">Get Certified</a>
                            </h3>

                            <p className="category-subtitle">Get certified upon successful completion</p>
                        </div>

                    </li>

                </ul>

            </section>

            <section className='user'>
                {/* <Usersidebar /> */}
                {/* <UserBottombar /> */}
                <div className="mainContainer">
                    {/* <TopbarCourses /> */}
                    <div className="allCourses">
                        {/* <p className='heading1'>All Courses</p> */}
                        {/* <Courses /> */}

                        <section className="course" id="course">

                            <p className="section-subtitle">IOT Trainings</p>

                            <h2 className="section-title"></h2>

                            <div className="course-grid">

                                {trainings.map(training => {
                                    return (
                                        (training.category == "iot") && <CourseCard key={training._id} imgurl={training.image} category={training.category} subcategory={training.subcategory} title={training.trainingName} users={training.users} price={training.price} />
                                    )
                                })}
                            </div>
                        </section >
                    </div>

                </div>





            </section >



        </>
    )
}
export default Iot