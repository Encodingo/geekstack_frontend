import { React, useEffect } from 'react'
import UserBottombar from '../../components/UserBottombar';
import Usersidebar from '../../components/Usersidebar';

const Settings = () => {


    useEffect(() => {
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.getElementById('settings1').classList.add('active');


        document.getElementsByClassName("active")[1].classList.remove("active");
        document.getElementById('settings').classList.add('active');


    });



    return (
        <>
            <section className='user'>
                <Usersidebar />
                {/* <UserBottombar /> */}

                <div className="settings">
                    <p className='heading1'>Settings</p>
                    <div className="mainContainer">
                        <form action="">
                            <div className="formRow">
                                <div className="form-item">
                                    <label htmlFor="First Name">First Name</label>
                                    <input type="text" name="fname" id="fname" placeholder='First Name' required />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="Last Name">Last Name</label>
                                    <input type="text" name="lname" id="lname" placeholder='Last Name' required />
                                </div>
                            </div>
                            <div className="formRow">
                                <div className="form-item">
                                    <label htmlFor="Username">User Name</label>
                                    <input type="text" name="uname" id="uname" placeholder='User name' required />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="First Name">Skill/Occupation</label>
                                    <input type="text" name="fname" id="fname" placeholder='UX Designer' required />
                                </div>
                            </div>
                            <div className="form-item">
                                <label htmlFor="bio">Bio</label>
                                <textarea type="text" rows='3' name="bio" id="bio" placeholder='UX Designer' required />
                            </div>
                            <div className="form-item">
                                <label htmlFor="bio">Display name publicly as</label>
                                <select name="bio" id="bio">
                                    <option value="student">Student</option>
                                    <option value="professional">Professional</option>
                                </select>
                            </div>
                            <input type="submit" value="Update Profile" />
                        </form>
                    </div>
                </div>

            </section>
            <UserBottombar />
        </>
    )
}

export default Settings