
import './app.css'
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {useState} from  'react'
// import './bootstrap.min.css';

function App() {
  
   
     
 
  return (
    <>
   
  
   
    <Router>
    
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
    
    </>
    
  );
}

export default App;
