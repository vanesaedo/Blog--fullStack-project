import React from "react";
import './EntryCard.css'


const EntryCard = (props) => {
  const {title,entry_image, content,category, date } = props.data;

  return <article className="entrycard">
    <h3 className="categoria_titulo">{category}</h3>
    <h2>{title}</h2>
    <span>Fecha: {date}</span>
    <img src={entry_image} alt="entry image"></img>
    <p>{content}</p>
   
   
  </article>
};

export default EntryCard;
