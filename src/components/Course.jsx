import React, { useState, useEffect } from 'react'
import { alltrainingsRoute } from '../utils/APIRoutes'
import CourseCard from "./CourseCard"
import axios from 'axios'
import EditTraining from "./adminComponents/EditTraining"

const Course = () => {
  const [trainings, setTrainings] = useState([]);
  const [Admin, setadmin] = useState(false);
  const [{ editOpen, editId }, setEdit] = useState({ editOpen: false, editId: null });
  const [userid, setuserId] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);
    if (storedUsername) {

      const user = JSON.parse(storedUsername);
      setuserId(user._id);
      if (user.isAdmin === true) {
        setadmin(true);
        console.log(user._id);
      }
    }
  }, []);
  useEffect(() => {
    const gettraining = async () => {
      try {
        const response = await axios.get(alltrainingsRoute);
        setTrainings(response.data);

      } catch (error) {
        console.error("Error retrieving trainings:", error);
      }
    }
    gettraining();
  }, [editOpen]);

  return (
    <>
      {editOpen && <EditTraining editId={editId} setEdit={setEdit} trainings={trainings} />}
      {editOpen === false &&
        <section className="course" id="course">

          <p className="section-subtitle">GeekStacks Training Program</p>

          <div className="course-grid">
            {trainings.map((item, index) => {
              return <CourseCard key={index} userId={userid} id={item._id} Admin={Admin} imgurl={item.image} setEdit={setEdit} category={item.category} subcategory={item.subcategory} price={item.price} title={item.trainingName} />
            })}

          </div>



        </section>
      }
    </>
  )
}

export default Course