import { React, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import UserBottombar from '../../components/UserBottombar';
import Usersidebar from '../../components/Usersidebar';
import CourseCard from '../../components/CourseCard';
import TopbarMyTrainings from '../../components/TopbarMyTrainings';
import axios from 'axios';

const EnrolledCourses = () => {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        const activeItems = document.getElementsByClassName("active");
        for (let i = 0; i < activeItems.length; i++) {
            activeItems[i].classList.remove("active")
        }
        document.getElementById('enrolledCourses1').classList.add('active');
        document.getElementById('enrolledCourses').classList.add('active');
        document.getElementById('allTrainings_tr').classList.add('active');

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

                            <p className="section-subtitle">All Trainings</p>

                            <h2 className="section-title"></h2>

                            <div className="course-grid">



                                {trainings.map(training => {
                                    return (
                                        <CourseCard key={training._id} imgurl={training.image} category={training.category} subcategory={training.subcategory} title={training.trainingName} users={training.users} price={training.price} />
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

export default EnrolledCourses


















        // <>
        //     <section className='user'>
        //         <Usersidebar />
        //         {/* <UserBottombar /> */}

        //         <div className="enrolledCourses">
        //             <p className='heading1'>Enrolled Courses</p>

        //             <div className="coursesState">
        //                 <p className="p1 active"><NavLink to="#">Enrolled Courses (3)</NavLink></p>
        //                 <p className="p2"><NavLink to="#">Active Courses (2)</NavLink></p>
        //                 <p className="p3"><NavLink to="#">Complete Courses (1)</NavLink></p>
        //             </div>
        //             {/* <hr /> */}
        //             <div className="mainContainer">
        //                 <button id="auth" className="btn btn-primary">
        //                     <NavLink to="/user">
        //                         <p className="btn-text" style={{ color: "white" }}>Please Enroll</p>
        //                     </NavLink>
        //                     <span className="square"></span>
        //                 </button>
        //             </div>
        //         </div>

        //     </section>
        //     <UserBottombar />
        // </>