import React from "react";
import './AuthorCard.css';


const AuthorCard = (props) => {
  const { name, surname, bio, image } = props.data;

  return <>
 

     <div className="author_card">
        <img src={image} alt={name}/>
      
        <h2>{name} {surname}</h2>
        <p>{bio}</p>
      </div>
   
</>
};

export default AuthorCard;
