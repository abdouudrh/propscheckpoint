
import './App.css';
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Profile from './components/Profile/Profile';
import Imag from './image.jpg'


const App = () => {
  const fullName ="Driche Abderrahmane"
  const bio = "This is my bio"
  const profession = "CTO at VOMODA Company"
  const handleName = (name) => alert(name)
  
  
  return (
    <div className ="App">
        <Profile handleName={handleName} fullName={fullName} 
        profession={profession}  bio={bio} >{Imag}</Profile>
    </div>
    
  )


}

export default App;
