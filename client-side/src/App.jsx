
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { lazy } from 'react';

const Home=lazy(()=>import("./components/Home"))
const Login=lazy(()=>import("./components/Login"))
function App() {
  return(
    <div>
      <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            

        </Routes>
      
      
      <Footer/>
      </Router>
      
      

    </div>
  )
}

export default App
