
import './index.css';
import './Components/AirBnb/Airbnb.css'
import NavBar from './Components/NavBar';
import Practice from './Components/Practice';
import ReactProject1 from './Components/ReactProject1';
import BusinessCard from './Components/Project2BusinessCard';
import {BrowserRouter as Router ,Routes  , Route } from "react-router-dom";
import Home from './Components/Home';
import Airbnb from './Components/AirBnb/Airbnb';

function App() {
  return (
 <>
    {/* <ReactProject1 /> */}
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route exact path="/project1" element={<BusinessCard />}/>
        <Route exact path="/project2" element={<ReactProject1 />}/> 
       <Route exact path="/airBnb" element={<Airbnb/>}/> 

        <Route exact path="/project3" element={<Practice/>}/>



      </Routes>

    </Router>
    </>
  )
}
export default App

