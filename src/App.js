import './index.css';
import {BrowserRouter as Router ,Routes  , Route } from "react-router-dom";
import Notepad from './Components/note/Notepad';


function App() {

  return (
 <>

    <Router basename={process.env.PUBLIC_URL}>    
      <Routes>
        <Route exact path="/" element={<Notepad />}/>        
    </Routes>
    </Router>
    </>
  )
}
export default App

