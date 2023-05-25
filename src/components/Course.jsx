import React, { useState, useEffect } from "react";
// import {Link} from "react-router-dom"
// Images

// import web1 from "../assets/images/web 1.png";
// import python1 from "../assets/images/python 1.png";
// import ccpp1 from "../assets/images/ccpp 1.png";
// import java1 from "../assets/images/java 1.png";
// import mren1 from "../assets/images/mren 1.png";
// import app1 from "../assets/images/app 1.png";
// import student_icon from "../assets/images/student-icon.png";
// import Card from "./Card"

import { alltrainingsRoute } from "../utils/APIRoutes";
import CourseCard from "./CourseCard";
import axios from "axios";

const Course = () => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const gettraining = async () => {
      try {
        const response = await axios.get(alltrainingsRoute);
        setTrainings(response.data);
      } catch (error) {
        console.error("Error retrieving trainings:", error);
      }
    };
    gettraining();
  }, []);
};

export default Course;

// import React from "react";
// import Card from "./Card";
// // Images

// import web1 from "../assets/images/web 1.png";
// import python1 from "../assets/images/python 1.png";
// import ccpp1 from "../assets/images/ccpp 1.png";
// import java1 from "../assets/images/java 1.png";
// import mren1 from "../assets/images/mren 1.png";
// import app1 from "../assets/images/app 1.png";
// import robot from "../assets/images/robot.jpg";
// import drone from "../assets/images/drone.jpg";
// import iot from "../assets/images/iot.jpg";

// const Course = () => {
//   const cards = [
//     { id: 1, heading: 'Complete Master Class For Web Development.', price: '1999', image: web1 },
//     { id: 2, heading: 'Getting Started With Python For Beginner', price: '1999', image: python1 },
//     { id: 3, heading: 'Getting Started With C/C++ For Beginner', price: '1999', image: ccpp1 },
//     { id: 4, heading: 'Learn Java With The Industry Expert', price: '1999', image: java1 },
//     { id: 5, heading: 'Full Stack Web Development With MERN', price: '1999', image: mren1 },
//     { id: 6, heading: 'Android App Development with Scratch', price: '1999', image: app1 },
//     { id: 7, heading: 'Learn Robotics Technologies', price: '1999', image: robot },
//     { id: 8, heading: 'Learn Drone Technologies & Innovations', price: '1999', image: drone },
//     { id: 9, heading: 'Learn Internet Of Things', price: '1999', image: iot },
//   ];

//   return (
//     <section className="course" id="course">
//       <p className="section-subtitle">GeekStacks Training Program</p>

//       <h2 className="section-title"></h2>

//       <div className="course-grid">
//         {cards.map((card) => {
//           return (
//             <Card
//               key={card.id}
//               heading={card.heading}
//               price={card.price}
//               image={card.image}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Course;
