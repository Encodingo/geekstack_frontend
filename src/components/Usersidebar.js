import { React, useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

// Images 
// import dashboardImg from "../assets/images/usersImg/dashboard.png"
import allcourses from "../assets/images/usersImg/allCourses.png"
import enrolledCourses from "../assets/images/usersImg/enrolledCourses.png"
// import wishlist from "../assets/images/usersImg/wishlist.png"
import settings from "../assets/images/usersImg/setting.png"
import logout from "../assets/images/usersImg/logout.png"

const Usersidebar = () => {
    const [hamBurger, setHamBurger] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        setHamBurger("");
    }, [location]);




    const handleClick = () => {
        if (hamBurger === "") {
            const sidebar = document.getElementsByClassName('user-sidebar')[0];
            setHamBurger("active");
            // sidebar.classList.add("active");
            sidebar.style.display = "block";
            sidebar.style.width = "90vw";
            sidebar.style.border = "2px solid black";
            sidebar.style.borderRadius = "5px";
            sidebar.style.margin = "13px auto";


        } else {
            const sidebar = document.getElementsByClassName('user-sidebar')[0];
            setHamBurger("");
            sidebar.style.display = "none";


        }
    }


    const handleLogout = () => {
        localStorage.removeItem(process.env.REACT_APP_LOCALHOST_KEY);
        navigate('/');

    }



    return (
        <>
            <div className="sidebar" id='sidebar-btn'>
                {/* <button className={`nav-toggle-btn ${hamBurger}`} onClick={() => { hamBurger === "" ? setHamBurger("active") : setHamBurger("") }}> */}
                <button className={`nav-toggle-btn ${hamBurger}`} onClick={handleClick}>
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                </button>
            </div>

            <section className='user-sidebar'>
                <ul>
                    {/* <li className='active' id='userDashboard'><NavLink to="/user">
                    <span><img src={dashboardImg} /></span> Dashboard
                </NavLink></li> */}
                    <li id='allCourses'><NavLink to="/user">
                        <span><img src={allcourses} alt='all Courses' /></span> All Trainings</NavLink>
                    </li>
                    <li id='enrolledCourses'><NavLink to="/user/enrolledcourses">
                        <span><img src={enrolledCourses} alt='enrolled Courses' /></span> My Trainings</NavLink>
                    </li>
                    {/* <li id='robotics'><NavLink to="/user/robitcs">
                        <span><img src={wishlist} /></span> Robotics</NavLink>
                    </li>
                    <li id='iot'><NavLink to="/user/iot">
                        <span><img src={wishlist} /></span> IoT</NavLink>
                    </li> */}
                    <hr />
                    <li id='settings'><NavLink to="/user/settings">
                        <span><img src={settings} alt='settings' /></span> Settings</NavLink>
                    </li>
                    <li onClick={handleLogout}>
                        <div className="logout">
                            <span><img src={logout} alt='logout' /></span> Logout
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Usersidebar