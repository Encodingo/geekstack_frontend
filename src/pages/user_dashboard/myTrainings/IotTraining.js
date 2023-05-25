import { React, useEffect, useState } from 'react'
import Usersidebar from '../../../components/Usersidebar';
import UserBottombar from '../../../components/UserBottombar';
import TopbarCourses from '../../../components/TopbarCourses';
import axios from 'axios';
import Card from '../../../components/Card';
import CourseCard from '../../../components/CourseCard';
// Images 
import TopbarMyTrainings from '../../../components/TopbarMyTrainings';


// IOT Images 
import iotImg from "../../../assets/images/iot/iot.jpg"


const IotTraining = () => {
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
        const activeItems = document.getElementsByClassName("active");
        for (let i = 0; i < activeItems.length; i++) {
            activeItems[i].classList.remove("active")
        }
        document.getElementById('allCourses1').classList.add('active');
        document.getElementById('enrolledCourses').classList.add('active');
        document.getElementById('iot_tr').classList.add('active');




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

            <UserBottombar />
        </>
    )
}
export default IotTraining