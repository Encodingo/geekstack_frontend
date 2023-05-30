import './App.css';
import { Routes, Route } from "react-router-dom";

// CSS 
import "./assets/css/style.css";
import "./assets/css/animation.css";
import "./assets/css/media_queries.css";
import "./assets/css/variable.css";

// Components 
import Header from './components/Header';
import Footer from './components/Footer';

// Pages 
import Home from './pages/Home';
import About from './pages/About';
import Training from './pages/Training';
import Robotics from './pages/Robotics';
import RobotTrainings from './pages/user_dashboard/allTrainings/RobotTrainings';
import Iottraining from './pages/user_dashboard/allTrainings/IotTraining';
import Forcollege from './pages/Forcollege';
import Paymentsuccess from './pages/paymentsuccess';

//admin dashboard 
import Dashboard from "./pages/Dashboard"


//user dashboard
import UserDashboard from './pages/user_dashboard/UserDashboard';
import AllCourses from './pages/user_dashboard/AllCourses';
import EnrolledCourses from './pages/user_dashboard/EnrolledCourses';
import Wishlist from './pages/user_dashboard/Wishlist';
import Settings from './pages/user_dashboard/Settings';
import Development from './pages/user_dashboard/allTrainings/Development';
import Coding from './pages/user_dashboard/allTrainings/Coding';
import Iot from './pages/Iot'

// my Trainings 
import Development_tr from "./pages/user_dashboard/myTrainings/Development";
import Coding_tr from "./pages/user_dashboard/myTrainings/CodingTr";
import Robotics_tr from "./pages/user_dashboard/myTrainings/RobotTrainings";
import Iot_tr from "./pages/user_dashboard/myTrainings/IotTraining";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />


        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/training' element={<Training />} />
          <Route path='/robotics' element={<Robotics />} />
          <Route path='/iot' element={<Iot />} />
          <Route path='/forcollege' element={<Forcollege />} />
          <Route path='/paymentsucces' element={<Paymentsuccess/>}/>

          {/* Routes for User Dashboard  */}
          <Route path='/user' element={<AllCourses />} />
          <Route path='/user/development' element={<Development />} />
          <Route path='/user/coding' element={<Coding />} />
          <Route path='/user/robitcstraining' element={<RobotTrainings />} />
          <Route path='/user/iottraining' element={<Iottraining />} />
          <Route path='/user/enrolledcourses' element={<EnrolledCourses />} />
          <Route path='/user/wishlist' element={<Wishlist />} />
          <Route path='/user/settings' element={<Settings />} />

          {/* For myTrainings  */}
          <Route path='/user/mytrainings' element={<EnrolledCourses />} />
          <Route path='/user/mytrainings/development' element={<Development_tr />} />
          <Route path='/user/mytrainings/coding' element={<Coding_tr />} />
          <Route path='/user/mytrainings/robitcs' element={<Robotics_tr />} />
          <Route path='/user/mytrainings/iot' element={<Iot_tr />} />


          <Route path='/dashboard/admin' element={<Dashboard />} />
        </Routes>

        <Footer />

      </div>
    </div>

  );
}

export default App;
