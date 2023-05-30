import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiTrash, BiEdit } from "react-icons/bi";
import styled from "styled-components";
import { deletetrainingRoute } from "../utils/APIRoutes";

import axios from "axios";

import student_icon from "../assets/images/student-icon.png";
import { toast } from "react-toastify";
// import web1 from "../assets/images/web 1.png";
// import student_icon from "../assets/images/student-icon.png";
import pdf from "../assets/images/pdf/details.pdf";

const CourseCard = ({
  imgurl,
  category,
  subcategory,
  title,
  userId,
  price,
  Admin,
  id,
  setEdit,
}) => {
  // const handleApply = () => {
  //   // console.log("Applied");
  //   if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY) != null) {
  //     window.location.replace("https://pages.razorpay.com/geekstacks-training");
  //   } else {
  //     toast.error("Please Login First", {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //   }
  // };

  const [isDeleted, setIsDeleted] = useState(false);

  const handledelete = async () => {
    // console.log("delete");
    try {
      const { data } = await axios.post(deletetrainingRoute, { id });
      if (data.status) {
        // console.log(data.status);
        setIsDeleted(true);
      }
    } catch (error) {
      console.error("Error delete trainings:", error);
    }
  };

  const handleEdit = async () => {
    setEdit({ editOpen: true, editId: id });
  };

  const handleApply = async () => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY) != null) {
      try {
        console.log("training id is" + id);
        console.log("user id is " + userId);
        const {data:{order} }= await axios.post("http://localhost:5000/apipay/checkout",{
          price
      });
      console.log(price,title);
      const {data:{key}}=await axios.post("http://localhost:5000/apipay/getkey");
      
      var options = {
        key:key,
         // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Vidyayan Eduventure Pvt Ltd",
        description: "Test Transaction",
        image: "https://media.licdn.com/dms/image/C4D0BAQFvqR2yqXYzsQ/company-logo_200_200/0/1680119587249?e=1693440000&v=beta&t=fiQMknfmCrszgJ9Z062TFdDes2iTU2g2-Fi-ArhVSss",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:5000/apipay/paymentverification",
        prefill: {
            "name":'Gaurav Kumar',
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    const razor = new window.Razorpay(options);
     razor.open();
  
      } catch (error) {
        console.error("Error delete trainings:", error);
      }
    } else {
      toast.error("Please Login First", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      {isDeleted === false && (
        <div className="course-card">
          <div className="course-banner">
            <img src={imgurl} alt="course banner" />

            <div className="course-tag-box">
              <Link to="#" className="badge-tag orange">
                {category}
              </Link>
              <Link to="#" className="badge-tag blue">
                {subcategory}
              </Link>
            </div>
          </div>

          <div className="course-content">
            <h3 className="card-title">
              <Link to="#">{title}</Link>
            </h3>

            <div className="wrapper border-bottom">
              <div className="enrolled">
                {/* <div className="icon-user">
              <img src={student_icon} alt="user icon" />
            </div>

            <p>600k</p> */}
                <div className="course-price">₹{price}</div>
              </div>

              <div className="rating">
                <ion-icon name="star"></ion-icon>
                <p>5.0 (2k)</p>
              </div>
            </div>

            <div className="wrapper">
              {/* <div className="course-price">₹{price}</div> */}
              <div className="course-view">
                <a href={pdf} target="_blank">
                  View Details
                </a>
              </div>
              <div className="course-view">
                <Link onClick={handleApply}>Apply</Link>
              </div>
            </div>
          </div>
          {Admin === true && (
            <CardOptions>
              <span>
                <BiEdit onClick={handleEdit} />{" "}
              </span>
              <span>
                <BiTrash onClick={handledelete} />
              </span>
            </CardOptions>
          )}
        </div>
      )}
    </>
  );
};

export default CourseCard;

const CardOptions = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: flex-end;

  span {
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }
`;
