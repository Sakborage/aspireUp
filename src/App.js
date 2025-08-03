import logo from './logo.svg';
import './App.css';

import AdminLayout from './components/Admin/AdminLayout';
import AdminJobs from './components/Admin/Cards/Job/AdminJobs';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from './components/Admin/Cards/Dashboard/AdminDashboard';
import AdminCourses from './components/Admin/Cards/Courses/AdminCourses';
import ApplicationTracker from './components/Admin/Cards/Application/ApplicationTracker';
import AddCourse from './components/Admin/Cards/Courses/AddCourse';
import AddJob from './components/Admin/Cards/Job/AddJob';
import DashBoard from './components/LandingPage/dashboard';
import LoginPage from '../src/pages/LoginPage';
import SignUp from '../src/pages/SignUp';
import UserHome from './components/User/UserHome';
import UserJob from './components/User/UserJob';
import UserProfile from './components/User/SubParts/UserProfile';
import UserLayout from './components/User/UserLayout';
import JobApplicationForm from './components/User/SubParts/JobApplicationForm';
import ResumeForm from './components/User/SubParts/ResumeForm';
import TemplateCards from './components/User/SubParts/templates';
import TemplateGrid from './components/User/SubParts/templateGrid';



function App() {
  return (
  //Route for user  
   <>
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<DashBoard />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/profile" element={<UserProfile />} />
    <Route path="/apply/:jobId" element={<JobApplicationForm />} />

    
    <Route path="/home" element={<UserLayout />}>
      <Route index element={<UserHome />} /> 
      <Route path="UserJobs" element={<UserJob />} /> 
      <Route path="Resume" element={<ResumeForm/>}/>
      
    </Route>

    
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} /> 
      <Route path="job" element={<AdminJobs />} /> 
      <Route path="course" element={<AdminCourses />} />
      <Route path="application" element={<ApplicationTracker />} /> 
      <Route path="addjob" element={<AddJob />} /> 
      <Route path="addcourse" element={<AddCourse />} /> 
      
    </Route>
  </Routes>
</BrowserRouter>


</>
  );
  
}

export default App;