import React from 'react';
import './Profile.css'



const Profile = ({fullName, bio, profession, children,handleName})=>{

    return(
        <div className="profile">
            <div className="photobutton" >
                <img  src={children} width ="300" alt="myprofile photo"/>
                <button variant="primary" width="150px" onClick= {()=> handleName(`My name is ${fullName}`) } >ClickMe</button> 
            </div>
            <div className="info">
                <h1>{fullName}</h1>
                <h3>{bio}</h3>
                <p> {profession} </p> 

            </div>

                    
        </div>
        
        
    )
}
export default Profile;