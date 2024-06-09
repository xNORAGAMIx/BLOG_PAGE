import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import NoPage from "./pages/nopage/NoPage";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import MyState from "./context/data/myState";
import CreateBlog from "./pages/admin/createBlog/CreateBlog";
import Register from "./pages/Register/Register";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, fireDB } from './firebase/FirebaseConfig'
import { doc, getDoc } from 'firebase/firestore';
import Loader from "./components/loader/Loader";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/createblog" element={
            <ProtectedRoute>
              <CreateBlog />
            </ProtectedRoute>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  )
}

export default App

// eslint-disable-next-line react/prop-types
export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  console.log(admin);
  if (admin?.user?.email === "manasdon6@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/adminlogin'} />
  }
}

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [isAuthorized,setAuthorized] = useState(false);
  const navigate = useNavigate();

  const admin = localStorage.getItem('admin');
  //*console.log("this is", admin);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user){

        const userDocRef = doc(fireDB, 'users', user.email);

        const userDocSnapshot = await getDoc(userDocRef);

        if(userDocSnapshot.exists){
          setAuthorized(true);
        } else {
          setAuthorized(false);
        }
      } else {
        setAuthorized(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loader />
  }

  if(admin === null)  return <Navigate to={'/adminlogin'} />

  if(!isAuthorized){
    navigate('/adminlogin');
    return null;
  }

  return children;
};