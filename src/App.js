import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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





const router = createBrowserRouter([
  {
    path: "/home", 
    element: <UserLayout/>, // Wrap this around all routes you want inside a layout
    children: [
      { index: true, element: <UserHome /> },
      { path: "UserJobs", element: <UserJob /> },
     
    ],
  },
  { path: "/", element: <DashBoard /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUp /> },
   { path: "profile", element: <UserProfile /> },
]);

function App() {
  return (
    
   <>
  <RouterProvider router={router} />;
   </>
  );
  /*<>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout/>}>
          <Route index element={<AdminDashboard/>} />
          <Route path="job" element={<AdminJobs/>} />
          <Route path="course" element={<AdminCourses/>} />
          <Route path="application" element={<ApplicationTracker/>} />
          <Route path="addjob" element={<AddJob/>}/>
          <Route path="addcourse" element={<AddCourse/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  </>*/
  
}

export default App;
