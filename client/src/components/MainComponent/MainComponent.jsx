import React from "react";
import { useState, useEffect } from "react";


const MainComponent = () => {

  const [list, setList] = useState([]) // Lista de entries

    useEffect(() => {
      const getEntries = async () => {
        const resp = await fetch('http://localhost:3000/api/entries/');
        const data = await resp.json();
        setList(data);
        
      } 
      getEntries();
    }, []);

    const paintEntries = () => list.map((item, index) => (<article>
      <h1>{item.title}</h1>
      <h4>{item.date}</h4>
      <h6>{item.category}</h6>
      <h6>{index}</h6>
      <p>{item.content}</p>
      <p>{item.author}</p>
    </article>
    ));

  return (
    <section>
  
    <h2>Últimas entradas</h2>
    <p>{paintEntries(list)}</p>
    
  </section>
    
  );
}



export default MainComponent;
