import { React, useState, useEffect } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import headerlogo from "../assets/images/headerlogo.png"
import favicon from "../assets/images/facicon.png"
import { IoCloseSharp } from "react-icons/io5";
import "../assets/css/authentication_styles.css"
import 'animate.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes"
import { loginRoute } from "../utils/APIRoutes";
import axios from "axios";


import userLogo from "../assets/images/usersImg/user.png"



const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [Admin, setadmin] = useState(false);
  const [hamBurger, setHamBurger] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [toggleregister, setRegister] = useState(false);
  const [isloggedin, setLoggedIn] = useState(false);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY) != null) {
      setLoggedIn(true);
      setShowModal(false);
      homeItems();
    }


  }, []);



  useEffect(() => {
    const storedUsername = localStorage.getItem(
      process.env.REACT_APP_LOCALHOST_KEY
    );
    setHamBurger("");
    if (storedUsername) {
      setLoggedIn(true);
      setShowModal(false);
      const user = JSON.parse(storedUsername);
      if (user.isAdmin === true) {
        setadmin(true);
      }
    } else setLoggedIn(false);
  }, [location]);




  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };



  const handleRegisterValidation = () => {
    const { password, confirmPassword, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    }
    else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (handleRegisterValidation()) {
      const { email, password } = values;
      const { data } = await axios.post(registerRoute, {
        email,
        password,
      });

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        setLoggedIn(true);
        setShowModal(false);
        navigate("/user");
      }
    }
  };



  const validateLoginForm = () => {
    const { email, password } = values;
    if (email === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (validateLoginForm()) {
      const { email, password } = values;
      const { data } = await axios.post(loginRoute, {
        email,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        setLoggedIn(true);
        setShowModal(false);
        if (data.user.isAdmin === true) {
          navigate("/dashboard/admin");
        }
        else {
          navigate("/user")
        }
      }
    }
  };



  const handleLogout = () => {
    localStorage.removeItem(process.env.REACT_APP_LOCALHOST_KEY);
    setLoggedIn(false);
    homeItems();
    navigate("/");
    // setShowModal(false);
  }






  function userItems() {

    document.getElementsByClassName("userLogo")[0].style.display = "block";

    const loginButton = document.getElementsByClassName('buttons')[0];
    // const authButton = document.getElementById("#auth");
    loginButton.style.display = "none";
    // authButton.style.display = "none";

    const logo1 = document.getElementById("logo1")
    const logo2 = document.getElementById("logo2")
    logo1.style.display = "block";
    logo2.style.display = "none";
  }

  const homeItems = () => {
    // const loginButton = document.getElementsByClassName('buttons')[0];
    // const authButton = document.getElementById('auth');
    // loginButton.style.display = "block";
    // authButton.style.display = "none";

    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY != null)) {
      document.getElementsByClassName("userLogo")[0].style.display = "block";
      document.getElementsByClassName('buttons')[0].style.display = "none";
      // const authButton = document.getElementById("#auth");
      // loginButton.style.display = "none";
    }
    else {
      document.getElementsByClassName("userLogo")[0].style.display = "none";
      document.getElementsByClassName('buttons')[0].style.display = "block";
      setLoggedIn(false);
    }


    const logo1 = document.getElementById("logo1")
    const logo2 = document.getElementById("logo2")
    logo1.style.display = "none";
    logo2.style.display = "block";
  }











  useEffect(() => {

    setHamBurger("");
    const path = location.pathname;


    if (path.includes("/user")) {
      userItems();
      if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY) == null) {
        homeItems();
        navigate('/');

      }
      else {
        userItems();
      }
    }
    // else if (path.includes("/user") && localStorage.getItem("geekstacks-user") === '') {
    //   homeItems();
    //   navigate('/');
    // }
    else {
      if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY) == null) {
        homeItems();
      }
      else {
        userItems();
      }
    }

    // if (localStorage.getItem("geekstacks-user") === '') {
    //   setLoggedIn(false);
    //   document.getElementsByClassName("userLogo")[0].style.display = "none";
    //   // document.getElementById("auth").style.display = "block";
    // }
    // else {
    //   document.getElementsByClassName("userLogo")[0].style.display = "block";
    //   // document.getElementById("auth").style.display = "none";
    // }


    // if (isloggedin) {
    //   document.getElementsByClassName("userLogo")[0].style.display = "block";
    //   document.getElementById("auth").style.display = "none";
    // }
    // else {
    //   document.getElementsByClassName("userLogo")[0].style.display = "none";
    //   document.getElementById("auth").style.display = "block";
    // }


  }, [location])




  const handleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (showModal) {
      body.style.overflowX = "hidden";

    } else {
      body.style.overflowX = "auto";
    }
  }, [showModal]);

  return (
    <>
      <header className="header">

        <nav className="navbar" id='navbar'>
          <button className={`nav-toggle-btn ${hamBurger}`} onClick={() => { hamBurger === "" ? setHamBurger("active") : setHamBurger("") }}>
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </button>

          <div className="navbar-brand">
            <img src={headerlogo} id='logo1' alt="Educator Logo" />
            <img src={favicon} id='logo2' alt="Logo for mobile" />
          </div>

          <ul className={`navbar-nav ${hamBurger}`}>

            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/training">Trainings</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/robotics">Robotics</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="drone">Drone</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/iot">IoT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/forcollege">For College</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="https://internship.geekstacks.com" target="_blank">Internship</NavLink>
            </li>

          </ul>
          <div className="buttons">
            {isloggedin === false && <button id="auth" className="btn btn-primary" onClick={handleModal}>
              <NavLink to="#">
                <p className="btn-text" style={{ color: "white" }}>LogIn / Register</p>
              </NavLink>
              <span className="square"></span>
            </button>
            }
            {isloggedin === true && <button id="auth" className="btn btn-primary" onClick={handleLogout}>
              <NavLink to="#">
                <p className="btn-text" style={{ color: "white" }}>Log Out</p>
              </NavLink>
              <span className="square"></span>
            </button>
            }

            {/* <button className={`nav-toggle-btn ${hamBurger}`} onClick={() => { hamBurger === "" ? setHamBurger("active") : setHamBurger("") }}>
              <span className="one"></span>
              <span className="two"></span>
              <span className="three"></span>
            </button> */}


          </div>
          <div className="userLogo">
            <NavLink to={Admin ? "/dashboard/admin" : "/user"}>
              <img src={userLogo} alt="User Logo" />
            </NavLink>
          </div>
        </nav>

      </header>
      {showModal && (
        <div className="modal">
          <button className="close-btn" onClick={handleModal}>{<IoCloseSharp />}</button>
          <section className='animate__animated animate__fadeInDownBig'>
            <div className="form-box" >
              <div className="form-value">
                <form action="">
                  {toggleregister === false && <h2 className='heading'>Login</h2>}
                  {toggleregister === true && <h2 className='heading'>Register</h2>}
                  <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" name="email" onChange={(e) => handleChange(e)} required />
                    <label htmlFor="" >Email</label>
                  </div>
                  <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" name="password" required onChange={(e) => handleChange(e)} />
                    <label htmlFor="">Password</label>
                  </div>
                  {toggleregister === true && <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" name="confirmPassword" required onChange={(e) => handleChange(e)} />
                    <label htmlFor="">Confirm Password</label>
                  </div>}
                  <div className="forget">
                    <label htmlFor=""><input type="checkbox" />Remember Me  <Link to="#">Forget Password</Link></label>
                  </div>

                  {toggleregister === false && <button className='login_btn' onClick={(event) => handleLogin(event)}>Log in</button>}
                  {toggleregister === true && <button className='login_btn' onClick={(event) => handleRegister(event)}>Register</button>}
                  <div className="register">
                    <p>Don't have a account <Link to="#" onClick={() => (setRegister(!toggleregister))}>{toggleregister ? "Login" : "Register"}</Link></p>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      )}
      <ToastContainer />
    </>
  )
}

export default Header;