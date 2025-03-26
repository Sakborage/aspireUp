import logo from './logo.svg';
import './App.css';
import DashBoard from './pages/dashboard';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUp';
import UserHome from './pages/UserHome';
import UserJob from './pages/UserJob';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserProfile from './components/UserProfile';


const router=createBrowserRouter(
  [
    {path:"/", element:<DashBoard/>},
    {path:"/login", element:<LoginPage/>},
    {path:"/signup",element:<SignupPage/>},
    {path:"/Home",element:<UserHome/>},
    {path:"/UserJobs",element:<UserJob/>},
    {
      path:"/profile",element:<UserProfile/>
    }
  ]
)


function App() {
  return (
   <>
  <RouterProvider router={router} />;
   </>
  );
}

export default App;
