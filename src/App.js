import './index.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router ,Routes  , Route } from "react-router-dom";
import Home from './Components/Home';
import Notepad from './Components/note/Notepad';


function App() {

  return (
 <>
    {/* <ReactProject1 /> */}
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/> 
        <Route exact path="/note" element={<Notepad />}/>        

      </Routes>

    </Router>
    </>
  )
}
export default App

