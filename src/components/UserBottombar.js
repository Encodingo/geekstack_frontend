import { React } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


// Images 
// import dashboardImg from "../assets/images/usersImg/dashboard.png"
import allcourses from "../assets/images/usersImg/allCourses.png"
import enrolledCourses from "../assets/images/usersImg/enrolledCourses.png"
// import wishlist from "../assets/images/usersImg/wishlist.png"
import settings from "../assets/images/usersImg/setting.png"
import logout from "../assets/images/usersImg/logout.png"

const UserBottombar = () => {
    const navigate = useNavigate();
    // const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem(process.env.REACT_APP_LOCALHOST_KEY);
        navigate('/');
    }


    return (
        <>

            <section className='bottom'>
                {/* <div className="main-bottom"> */}
                <ul>

                    <li id='allCourses1' className='active'>
                        <NavLink to="/user"><img src={allcourses} alt='all Courses' /></NavLink>
                    </li>
                    <li id='enrolledCourses1'>
                        <NavLink to="/user/enrolledcourses"><img src={enrolledCourses} alt='enrolled Courses' /></NavLink>
                    </li>
                    <li id='settings1'>
                        <NavLink to="/user/settings"><img src={settings} alt='settings Courses' /></NavLink>
                    </li>
                    <li onClick={handleLogout}>
                        <img src={logout} alt='Logout' />
                    </li>

                </ul>
                {/* </div> */}
            </section >
        </>
    )
}

export default UserBottombar