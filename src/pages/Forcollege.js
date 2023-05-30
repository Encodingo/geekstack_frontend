import { React, useState } from 'react'
import { college } from '../utils/APIRoutes';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

// import { college } from '../utils/APIRoutes';
const Forcollege = () => {

    const navigate = useNavigate();

    const toastOptions = {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        // theme: "dark",
    };


    const [FormValues, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        designation: "",
        organization: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...FormValues, [name]: value });
        // console.log(FormValues);

    };

    const handleValidation = () => {
        const { name, email, phone, designation, organization, message } = FormValues;
        if (name === "") {
            toast.error("name is required", toastOptions);
            return false;
        } else if (email === "") {
            toast.error("email is required", toastOptions);
            return false;
        } else if (phone === "") {
            toast.error("phone is required", toastOptions);
            return false;
        } else if (designation === "") {
            toast.error("designation is required", toastOptions);
            return false;
        } else if (organization === "") {
            toast.error("organization is required", toastOptions);
            return false;
        } else if (organization === "") {
            toast.error("organization is required", toastOptions);
            return false;
        } else if (message === "") {
            toast.error("message is required", toastOptions);
            return false;
        }

        return true;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const { name, email, phone, designation, organization, message } = FormValues;

            if (handleValidation()) {
                // const response = await college(FormValues);
                const { response } = await axios.post(college, FormValues);
                toast.success("Form Submitted successfully");
                setFormData({ name: "", email: "", phone: "", designation: "", organization: "", message: "" });
                navigate("/forcollege");

            }
        } catch (e) {
            // console.log("error: " + e);
            toast.error("Some Error Occured")
        }
    }

    return (
        <>
            <div className="forcollege">
                <div className="mainContainer">
                    <h1>Request Workshop in Your College/School</h1>
                    {/* <collegeForm> */}
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div className="form-item">
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="name" id="name" placeholder='Name' value={FormValues.name} onChange={handleChange} required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder='Email' value={FormValues.email} onChange={handleChange} required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" id="phone" placeholder='Phone' value={FormValues.phone} required onChange={handleChange} />
                        </div>
                        <div className="form-item">
                            <label htmlFor="designation">Designation</label>
                            <input type="text" name="designation" id="designation" placeholder='Designation' value={FormValues.designation} onChange={handleChange} required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="organization">Organization</label>
                            <input type="text" name="organization" id="organization" placeholder='Organization' value={FormValues.organization} onChange={handleChange} required />
                        </div>


                        <div className="form-item">
                            <label htmlFor="message">Message</label>
                            <textarea type="text" rows='5' name="message" id="message" placeholder='Message' value={FormValues.message} onChange={handleChange} required />
                        </div>

                        {/* <input type="submit" onClick={handleSubmit} value="Submit" /> */}
                        <button onClick={handleSubmit}>Submit</button>
                    </form>
                    {/* </collegeForm> */}
                </div>
            </div>

        </>
    )
}

export default Forcollege




