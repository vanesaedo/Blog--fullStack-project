import React from "react";
import './AuthorCard.css';


const AuthorCard = (props) => {
  const { name, surname, email, image } = props.data;

  return <>
  <section className="author_list">
  <div className="author_card" style={{backgroundImage:{image}}}>
     {/*  <div className="author_img">
        <img src={image} alt="author image"/>
      </div> */}
     
      <div className="author_info" style={{backgroundImage:{image}}}>
        <h2>{name} {surname}</h2>
        <h4>{email}</h4>
      </div>
    </div>
    </section>
</>
};

export default AuthorCard;
