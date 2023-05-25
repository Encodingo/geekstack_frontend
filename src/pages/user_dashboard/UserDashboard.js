import { React, useEffect } from 'react'
import Usersidebar from '../../components/Usersidebar'

const UserDashboard = () => {

    useEffect(() => {
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.querySelector("#userDashboard").classList.add('active');
    });

    return (
        <>
            <section className='user'>
                <Usersidebar />
                <p className='heading1'>Dashboard</p>
            </section>
        </>
    )
}

export default UserDashboard

