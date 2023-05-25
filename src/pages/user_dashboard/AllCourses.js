import { React, useEffect, useState } from 'react'
import Usersidebar from '../../components/Usersidebar'
import Courses from '../../components/Course'
import CourseCard from '../../components/CourseCard';
import UserBottombar from '../../components/UserBottombar';
import axios from 'axios';
import TopbarCourses from '../../components/TopbarCourses';


const AllCourses = () => {

    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        const activeItems = document.getElementsByClassName("active");
        for (let i = 0; i < activeItems.length; i++) {
            activeItems[i].classList.remove("active")
        }
        document.getElementById('allCourses1').classList.add('active');
        document.getElementById('allCourses').classList.add('active');
        document.getElementById('allTrainings').classList.add('active');

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
                    <TopbarCourses />


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

export default AllCourses