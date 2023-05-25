import React from 'react';

// Images 
import shape_1 from "../assets/images/shape-1.png";
import shape_2 from "../assets/images/shape-2.png";
import shape_3 from "../assets/images/shape-3.png";
import shape_4 from "../assets/images/shape-4.png";

import a1 from "../assets/images/a1.png";
import a2 from "../assets/images/a2.png";
import a3 from "../assets/images/a3.png";

import banner from "../assets/images/banner-img1.png";

import banner_aliment_icon_4 from "../assets/images/banner-aliment-icon-4.png";
import abou_img1 from "../assets/images/abou-img1.png";

import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";

import web1 from "../assets/images/web 1.png";
import python1 from "../assets/images/python 1.png";
import ccpp1 from "../assets/images/ccpp 1.png";
import java1 from "../assets/images/java 1.png";
import mren1 from "../assets/images/mren 1.png";
import app1 from "../assets/images/app 1.png";
import student_icon from "../assets/images/student-icon.png";


// Events 
import event_img from "../assets/images/event-img.jpg";

// Features 
import feature_icon_1 from "../assets/images/feature-icon-1.png";
import feature_icon_2 from "../assets/images/feature-icon-2.png";
import feature_icon_3 from "../assets/images/feature-icon-3.png";

// Courses
import core_feature_img from "../assets/images/coure-features-img.jpg";
import Course from "../components/Course.jsx"

// Blog 
import calendar from "../assets/images/calendar.png";
import comment from "../assets/images/comment.png";



const Home = () => {
    return (
        <>

            <main>


                <section className="home" id="home">

                    <div className="deco-shape shape-1">
                        <img src={shape_1} alt="art shape" width="70" />
                    </div>
                    <div className="deco-shape shape-2">
                        <img src={shape_2} alt="art shape" width="55" />
                    </div>
                    <div className="deco-shape shape-3">
                        <img src={shape_3} alt="art shape" width="120" />
                    </div>
                    <div className="deco-shape shape-4">
                        <img src={shape_4} alt="art shape" width="30" />
                    </div>

                    <div className="home-left">

                        <p className="section-subtitle">Creating Tech Minds</p>

                        <h1 className="main-heading">
                            Get Training From Top
                            <span className="underline-img">Instructor </span>
                        </h1>


                        <p className="section-text">
                            Start, switch, or advance your career with more than 20+ trainings, Professional Certificates, and degrees
                            from top instructors.
                        </p>

                        <div className="home-btn-group">
                            <button className="btn btn-primary" style={{ boxShadow: "rgb(0 0 0 / 20%) 0px 20px 30px" }}>

                                <p className="btn-text">Explore Training</p>

                                <span className="square"></span>
                            </button>


                        </div>

                    </div>

                    <div className="home-right">

                        <div className="img-box">

                            {/* <img src="./assets/images/banner-img-bg.png" alt="colorful background shape" className="background-shape"> */}
                            <img src={banner} alt="banner image" className="banner-img" />

                            <img src={a1} alt="" className="icon-1 smooth-zigzag-anim-1" width="250" />
                            <img src={a2} alt="" className="icon-2 smooth-zigzag-anim-2" width="240" />
                            <img src={a3} alt="" className="icon-3 smooth-zigzag-anim-3" width="195" />
                            <img src={banner_aliment_icon_4} alt="" className="icon-4 drop-anim" />

                        </div>

                    </div>

                </section>


                {/* <!--
  - #ABOUT SECTION
--> */}

                <section className="about" id="about">

                    <div className="about-left">

                        <div className="img-box">
                            {/* <!-- <img src="./assets/images/about-img-bg.png" alt="about bg" className="about-bg"> -- /> */}

                            <img src={abou_img1} alt="about person" className="about-img" />

                            <img src={c1} alt="" className="icon-1 smooth-zigzag-anim-1" width="250" />
                            <img src={c2} alt="" className="icon-2 smooth-zigzag-anim-3" width="195" />
                        </div>

                    </div>

                    <div className="about-right">

                        <p className="section-subtitle">About Us</p>

                        <h2 className="section-title">Our goal is to reach out to anyone who is eager to learn more.</h2>

                        <p className="section-text">
                            At GeekStacks, we believe in the power of technology, and we want to share our passion and knowledge with
                            you. Join us
                            and let us help you achieve your goals in the tech industry.

                        </p>

                        <ul className="about-ul">

                            <li>
                                <ion-icon name="checkmark-circle"></ion-icon>
                                <p> <b>Integrity</b> </p>
                            </li>

                            <li>
                                <ion-icon name="checkmark-circle"></ion-icon>
                                <p><b>Excellence</b></p>
                            </li>

                            <li>
                                <ion-icon name="checkmark-circle"></ion-icon>
                                <p><b>Deliver</b></p>
                            </li>

                        </ul>

                        <button className="btn btn-primary">
                            <p className="btn-text">Explore More</p>
                            <span className="square"></span>
                        </button>

                    </div>

                </section>

                {/* <!--
  - #COURSE SECTION
--> */}

               <Course />


                {/* <!--
  - #EVENT SECTION
--> */}

                <section className="event">

                    <div className="event-left">

                        <div className="event-banner">
                            <img src={event_img} alt="event banner" className="banner-img" />
                        </div>

                        <button className="play smooth-zigzag-anim-1">
                            <div className="play-icon pulse-anim">
                                <ion-icon name="play-circle"></ion-icon>
                            </div>

                            <p>Watch Us !</p>
                        </button>

                    </div>

                    <div className="event-right">

                        <p className="section-subtitle">Our Events</p>

                        <h2 className="section-title">Join Our Upcoming Events</h2>

                        <div className="event-card-group">

                            <div className="event-card">

                                <div className="content-left">
                                    <p className="day">28</p>
                                    <p className="month">Aug, 2022</p>
                                </div>

                                <div className="content-right">
                                    <div className="schedule">
                                        <p className="time">10:30am To 2:30pm</p>
                                        <p className="place">Virtual</p>
                                    </div>

                                    <a href="#" className="event-name">Full Stack Development Workshop</a>
                                </div>

                            </div>

                            <div className="event-card">

                                <div className="content-left">
                                    <p className="day">15</p>
                                    <p className="month">Sep, 2022</p>
                                </div>

                                <div className="content-right">
                                    <div className="schedule">
                                        <p className="time">4:30pm To 6:30pm</p>
                                        <p className="place">Virtual</p>
                                    </div>

                                    <a href="#" className="event-name">Career opportnity in India </a>
                                </div>

                            </div>

                            <div className="event-card">

                                <div className="content-left">
                                    <p className="day">20</p>
                                    <p className="month">Oct, 2022</p>
                                </div>

                                <div className="content-right">
                                    <div className="schedule">
                                        <p className="time">10:30am To 1:30pm</p>
                                        <p className="place">Virtual</p>
                                    </div>

                                    <a href="#" className="event-name">Digital transformation in India</a>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>




                {/* 
<!--
  - #FEATURES SECTION
--> */}

                <section className="features">

                    <div className="features-left">

                        <p className="section-subtitle">Core Features</p>

                        <h2 className="section-title">See What Our Mission Are</h2>

                        <ul>

                            <li className="features-item">
                                <div className="item-icon-box blue">
                                    <img src={feature_icon_1} alt="feature icon" />
                                </div>

                                <div className="wrapper">

                                    <h3 className="item-title">Tech Environement</h3>

                                    {/* <!-- <p className="item-text">Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim
            dictum.</p> --> */}

                                </div>
                            </li>

                            <li className="features-item">
                                <div className="item-icon-box pink">
                                    <img src={feature_icon_2} alt="feature icon" />
                                </div>

                                <div className="wrapper">

                                    <h3 className="item-title">Best Online Training</h3>

                                    {/* <!-- <p className="item-text">Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim
            dictum.</p> --> */}

                                </div>
                            </li>

                            <li className="features-item">
                                <div className="item-icon-box purple">
                                    <img src={feature_icon_3} alt="feature icon" />
                                </div>

                                <div className="wrapper">

                                    <h3 className="item-title">24x7 Training Program</h3>

                                    {/* <!-- <p className="item-text">Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim
            dictum.</p> --> */}

                                </div>
                            </li>

                        </ul>

                    </div>

                    <div className="features-right">
                        <img src={core_feature_img} alt="core features image" />
                    </div>

                </section>





                {/* <!--
  - #INSTRUCTOR SECTION
--> */}

                {/* <!-- <section className="instructor">

  <p className="section-subtitle">Best Coach</p>

  <h2 className="section-title">Our Expert Instructor</h2>

  <div className="instructor-grid">

    <div className="instructor-card">

      <div className="instructor-img-box">
        <img src="./assets/images/instructor-1.jpg" alt="instructor louis sullivan" />

        <div className="social-link">
          <a href="#" className="facebook">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>

          <a href="#" className="instagram">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>

          <a href="#" className="twitter">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
      </div>

      <h4 className="instructor-name">Suresh Vidyarthi</h4>

      <p className="instructor-title" style="font-size: 18px;">CTO - Techiiefy</p>

    </div>

    <div className="instructor-card">

      <div className="instructor-img-box">
        <img src="./assets/images/instructor-2.jpg" alt="instructor camden david" />

        <div className="social-link">
          <a href="#" className="facebook">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>

          <a href="#" className="instagram">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>

          <a href="#" className="twitter">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
      </div>

      <h4 className="instructor-name">Shubham Raj</h4>

      <p className="instructor-title" style="font-size: 18px;">SDE - MobStac</p>

    </div>

    <div className="instructor-card">

      <div className="instructor-img-box">
        <img src="./assets/images/instructor-2.jpg" alt="instructor fiona dean" />

        <div className="social-link">
          <a href="#" className="facebook">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>

          <a href="#" className="instagram">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>

          <a href="#" className="twitter">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
      </div>

      <h4 className="instructor-name">Manish Anand</h4>

      <p className="instructor-title" style="font-size: 18px;">SDE - Nagarro</p>

    </div>

    <div className="instructor-card">

      <div className="instructor-img-box">
        <img src="./assets/images/instructor-1.jpg" alt="instructor cherish sosa" />

        <div className="social-link">
          <a href="#" className="facebook">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>

          <a href="#" className="instagram">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>

          <a href="#" className="twitter">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
      </div>

      <h4 className="instructor-name">Anand Kumar</h4>

      <p className="instructor-title" style="font-size: 18px;">SDE - Virtusa</p>

    </div>

  </div>

</section> --> */}


                {/* <!--
  - #BLOG
--> */}

                <section className="blog" id="blog">

                    <p className="section-subtitle">Our Blog</p>

                    <h2 className="section-title">Latest Blog & News</h2>

                    <div className="blog-grid">

                        <div className="blog-card">

                            <div className="blog-banner-box">
                                <img src={app1} alt="blog banner" />
                            </div>

                            <div className="blog-content">

                                <h3 className="blog-title">
                                    <a href="#">Better Node.js Console Console Dumps with console-probe</a>
                                </h3>

                                <div className="wrapper">

                                    <div className="blog-publish-date">
                                        <img src={calendar} alt="calendar icon" />

                                        <a href="#">07 Jan, 2022</a>
                                    </div>

                                    <div className="blog-comment">
                                        <img src={comment} alt="comment icon" />

                                        <a href="#">3 Comments</a>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="blog-card">

                            <div className="blog-banner-box">
                                <img src={java1} alt="blog banner" />
                            </div>

                            <div className="blog-content">

                                <h3 className="blog-title">
                                    <a href="#">Extracting email addresses using regular expressions in Python.</a>
                                </h3>

                                <div className="wrapper">

                                    <div className="blog-publish-date">
                                        <img src={calendar} alt="calendar icon" />

                                        <a href="#">04 Jan, 2022</a>
                                    </div>

                                    <div className="blog-comment">
                                        <img src={comment} alt="comment icon" />

                                        <a href="#">10 Comments</a>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="blog-card">

                            <div className="blog-banner-box">
                                <img src={web1} alt="blog banner" />
                            </div>

                            <div className="blog-content">

                                <h3 className="blog-title">
                                    <a href="#">Node.js: How to mock the imports of an ES6 module</a>
                                </h3>

                                <div className="wrapper">

                                    <div className="blog-publish-date">
                                        <img src={calendar} alt="calendar icon" />

                                        <a href="#">01 Jan, 2022</a>
                                    </div>

                                    <div className="blog-comment">
                                        <img src={comment} alt="comment icon" />

                                        <a href="#">5 Comments</a>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </main>


        </>
    )
}

export default Home