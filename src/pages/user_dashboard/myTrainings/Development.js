import { React, useEffect, useState } from 'react'
import UserBottombar from '../../../components/UserBottombar';
import CourseCard from '../../../components/CourseCard';
import TopbarCourses from '../../../components/TopbarCourses';
import Card from '../../../components/Card'
import Usersidebar from '../../../components/Usersidebar';
import axios from 'axios';
// Images 
import developmentImg from "../../../assets/images/development/development.jpg"
// import developmentImg from "../../../assets/images/robotics/robotics.jpg"
import TopbarMyTrainings from '../../../components/TopbarMyTrainings';


const Development = () => {

    const cards = [
        { id: 1, heading: 'Robotics (Career Building Course)', price: '11799', image: developmentImg },
        { id: 2, heading: 'Animatronics Hand', price: '11799', image: developmentImg },
        { id: 3, heading: 'Surveillance Robot', price: '2799', image: developmentImg },
        { id: 4, heading: '7 Robots (Combo Course)', price: '3599', image: developmentImg },
        { id: 5, heading: 'Robotic Arm', price: '2599', image: developmentImg },
        { id: 6, heading: 'Biped Walking Robot', price: '3199', image: developmentImg },
        { id: 7, heading: 'Sensor Guided Robotics', price: '1399', image: developmentImg },
        { id: 8, heading: 'Hexapod', price: '2599', image: developmentImg },
        { id: 9, heading: 'Swarm Robotics', price: '1999', image: developmentImg },
        { id: 10, heading: 'Mobile robotics', price: '1699', image: developmentImg },
        { id: 11, heading: 'Sexth Sense Robot', price: '1899', image: developmentImg },
        { id: 12, heading: '2 Mechatronics Projects', price: '4799', image: developmentImg },
        { id: 13, heading: 'Gesture Based Robotics', price: '1699', image: developmentImg },
        { id: 14, heading: 'Voice Controlled Robot', price: '1699', image: developmentImg },
        { id: 15, heading: 'WiFi Controlled Robot', price: '1699', image: developmentImg },
        { id: 16, heading: 'maze Solver Robot', price: '1599', image: developmentImg },
        { id: 17, heading: 'Bluetoth Robotics', price: '1699', image: developmentImg },
        { id: 18, heading: 'Fire Fighting Robot', price: '1599', image: developmentImg },
        { id: 19, heading: 'Robotics Training & Internship', price: '29999', image: developmentImg }
    ];

    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        const activeItems = document.getElementsByClassName("active");
        for (let i = 0; i < activeItems.length; i++) {
            activeItems[i].classList.remove("active")
        }
        document.getElementById('allCourses1').classList.add('active');
        document.getElementById('enrolledCourses').classList.add('active');
        document.getElementById('development_tr').classList.add('active');




        // Fetching All Trainings 
        axios.get(`${process.env.REACT_APP_HOST_URL}/api/training/alltrainings`)
            .then(res => { setTrainings(res.data) })
            .catch(err => { console.log(err); })

    });

    return (
        <>
            <section className='user'>
                <Usersidebar />
                {/* <UserBottombar /> */}
                <div className="mainContainer">
                    <TopbarMyTrainings />


                    <div className="allCourses">


                        <section className="course" id="course">

                            <p className="section-subtitle">Development Trainings</p>

                            <h2 className="section-title"></h2>

                            <div className="course-grid">

                                {trainings.map(training => {
                                    return (
                                        (training.category == "development") && <CourseCard key={training._id} imgurl={training.image} category={training.category} subcategory={training.subcategory} title={training.trainingName} users={training.users} price={training.price} />
                                    )
                                })}
                            </div>
                        </section >
                    </div>

                </div>





            </section >
            <UserBottombar />

        </>
    )
}

export default Development