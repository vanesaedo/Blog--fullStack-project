import React from "react";

const AuthorCard = (props) => {
  const {name,surname,email,image } = props.data;

  return <article className="entrycard">
    <img src={image} alt="author image"></img>
    <h2>{name} {surname}</h2>
    <h4>{email}</h4>
      


  </article>
};

export default AuthorCard;
