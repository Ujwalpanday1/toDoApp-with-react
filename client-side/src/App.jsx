import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import { lazy, useState, useEffect } from 'react';
import Loading from './components/Loading';
import ErrorPage from './components/ErrorPage';
const Home = lazy(() => import("./components/Home"));
const Loginpage = lazy(() => import("./components/Loginpage"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkedAuth,setCheckedAuth]=useState(false);
  const [error,setError]=useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:3000/checkAuth', { withCredentials: true });
        if (response.status === 200) {
          setIsLoggedIn(true);

        }
         else {
          console.log("from else")
          setIsLoggedIn(false);
        }
      }catch (error) {
        console.log(error)
        if(error.response&&error.response.status==401)
          setIsLoggedIn(false)
        else{ 
        setError(true);
        setIsLoggedIn(false);
      }
       
        
      }finally{
        setCheckedAuth(true)
      }
      
    };

    checkAuth();
  }, []);

  if(!checkedAuth){
   return ( <Loading/>)
  }

  if (error) {
    return (
     <ErrorPage/>
    );
  }

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home/> : <Navigate to="/login" />} />
    
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> :<Loginpage setIsLoggedIn={setIsLoggedIn}/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;

