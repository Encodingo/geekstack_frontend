import { React, useEffect } from 'react'
import Usersidebar from '../../components/Usersidebar'

const Wishlist = () => {

    useEffect(() => {
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.querySelector("#wishlist").classList.add('active');
    });

    return (
        <>
            <section className='user'>
                <Usersidebar />
                <p className='heading1'>Wishlist</p>
            </section>
        </>
    )
}

export default Wishlist