import React, { useEffect, useState }  from "react";
import styled from "styled-components";
import Sidebar from "../components/adminComponents/Sidebar";
import Statistics from "../components/adminComponents/Statistics";
import Course from "../components/Course";
import Createtraining from "../components/adminComponents/Createtraining";
import { useNavigate } from "react-router-dom";
import Users from "../components/adminComponents/Users";


const HomeBox= styled.div`
  margin: 10px; 

margin-top:80px;
padding-top:20px;

@media only screen and (max-width: 625px) {
margin : 0;
margin-top:80px;
padding:0; 

}
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width:100%;
  min-height:100vh;
  ${'' /* background-color: #dddce1; */}


  @media only screen and (max-width:678px){
  
    flex-direction: column;
  }
`;

const Dashboard = () => {
  const navigate=useNavigate();
  const [buttonClicked,setButtonClicked]=useState("statistics");
  
  useEffect(() => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
    else{
      const user= JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      )
      if(user.isAdmin===false) {
        navigate("/");
      }
    }
  }, [])
  


  return (
    <>
    <HomeBox >

    <HomeContainer >
      <Sidebar setButtonClicked={setButtonClicked}/>
      {buttonClicked==="statistics" && <Statistics />}
      {buttonClicked==="course" && <Course admin={true}/>}
      {buttonClicked==="createtraining" && <Createtraining />}
      {buttonClicked==="users" && <Users />}
   
    
    </HomeContainer>
    </HomeBox>
  
    </>
  );
};
export default Dashboard;
