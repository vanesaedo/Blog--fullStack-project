import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import EntryCard from "./EntryCard/EntryCard";


const baseURL = "http://localhost:3000/api/entries";

const MainComponent = () => {

  const [list, setList] = useState([]); // Lista de entries

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.buscar.value

  // sacar por consola el valor del input
    console.log(title)

  // FIltrar del array de entries el buscado
  //....

  // saca por consola el array filtrado
  //...

  // Modificar el estado entries con el resultado de filtrado
  //setValue(listado filtrado aqui!!!);
  }




  const handleChange = (event) => {
    console.log();

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
}

export default MainComponent;
