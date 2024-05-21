import React from "react";
import './EntryCard.css'
import Footer from './Footer/Footer'


const EntryCard = (props) => {
  const { title, entry_image, content, category } = props.data;

  return <>
    <article className="entry_card" >
      <h2>{title}</h2>
      <h3>{category}</h3>
      <img src={entry_image} alt={title}></img>

      <p>{content}</p>
      <div>
        <button>Leer más</button>
    
      </div>
    </article>
    <Footer />

  </>
};

export default EntryCard;
