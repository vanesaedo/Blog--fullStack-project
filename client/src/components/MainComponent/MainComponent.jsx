import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import EntryCard from "./EntryCard/EntryCard";


const baseURL = "http://localhost:3000/api/entries";

const MainComponent = () => {

  const [list, setList] = useState([]) // Lista de entries


  const handleSubmit = (event) =>{

    const [value, setValue] = useState (value)


    console.log(value);
    event.preventDefault();

    // sacar por consola el valor del input

    // FIltrar del array de entries el buscado

    // Modificar el estado entries con el resultado de filtrado
  }


  const handleChange = (event) =>{
    console.log("holaaaaa2");
  }

  useEffect(() => {

    async function getEntries() {
      try {
        const res = await axios.get(baseURL);
        console.log("Response:", res);
        const entries = res.data; //[{},{},{}]
        console.log("Data:", entries);
        setList(entries)

      } catch (e) {
        setList([])
      }
    }
    getEntries();
  }, []);

  return <>
  <form className="searchForm" onSubmit={handleSubmit}>
  <input type="text" name="buscar" onChange={handleChange}></input>
  <button>Submit</button>
  </form>
    <article>
      {list.length !== 0 ?
        <ul className="entry">
          {list.map(entry => (
            <EntryCard key={uuidv4()}
              data={entry} />

          ))};
        </ul>
        : <p>No se reciben datos</p>

      }  </article>
  </>

};
export default MainComponent;
/*
    (
    <ul>
      {list.length != 0 ?
        list.results.map((list, i) =>(
          <li key={i}>
            <article>
              <h5>{item.category}</h5>
              <h5>{index}</h5>
              <h2>{item.title}</h2>
              <h4>{item.date}</h4>

              <img src={item.image} />
              <p>{item.content}</p>
              <p>{item.author}</p>
            </article>

          </li>

        ))
        : <p>cargando...</p>}

  </ul>
    
  



*/