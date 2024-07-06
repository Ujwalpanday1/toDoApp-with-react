
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      
      
      <Footer/>
      </Router>
      
      

    </div>
  )
}

export default App
