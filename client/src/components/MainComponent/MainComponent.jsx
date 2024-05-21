import './MainComponent.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import EntryCard from "./EntryCard/EntryCard";



const baseURL = "http://localhost:3000";

const MainComponent = () => {

  const [list, setList] = useState([]); // Lista de entries

  const [filteredList, setFilteredList] = useState("");


  // ***************************************************************
  // ******************   SEARCH BY TITLE  *************************
  // ***************************************************************

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredList = list;
    const title = e.target.buscar.value
    // sacar por consola el valor del input
    console.log(title)
    // Filtrar del array de entries el buscado
    const result = (filteredList.filter((entry) => entry.title === title));
    // saca por consola el array filtrado
    console.log(result);

    // Modificar el estado entries con el resultado de filtrado
    setList(result);
  }



  useEffect(() => {

    async function getEntries() {
      try {
        const res = await axios.get(`${baseURL}/api/entries`);
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


  // ***************************************************************
  // ***************** FILTER BY CATEGORY  *************************
  // ***************************************************************

  // Filtrar por categoria

  const handleChangeCategory = (e) => {
    const selectedValue = e.target.value;
    console.log(e)
    const filteredList = [...list].filter((element) => element.category === selectedValue);
    setList(filteredList)

  }

  useEffect(() => {

    console.log("Artículos por categoría:", list);
  }, [list]);



  // ***************************************************************
  // ***********************   SORT ASC   **************************
  // ***************************************************************
  // Filtro de ordenación a-z con 2 botones. a-z y z-a. Cuando haga click en uno de los botones, se reordendan las entries del array. onclick + método sort() JS

  //onclick + método sort() JS

  const handleSortAsc = () => {
    // Sort ascending
    const listSortedAsc = [...list].sort((a, b) => a.title.localeCompare(b.title));
    console.log(listSortedAsc);
    setList(listSortedAsc);

  }


  const handleSortDesc = () => {
    // Sort descending
    const listSortedDesc = [...list].sort((a, b) => b.title.localeCompare(a.title));
    console.log(listSortedDesc);
    setList(listSortedDesc);
  }


  // ***************************************************************
  // ***********************   RETURN   ****************************
  // ***************************************************************

  return <>
  <section className="filters">

      <div>
      <form className="search" onSubmit={handleSubmit}>
        <h3>Búsqueda por título:</h3>
        <input type="text" name="buscar" id="buscar" placeholder="Title"></input>
        <button>Buscar</button>
      </form>
      </div>

      <div className="search">
        <h3>Filtro por categoría:</h3>
        <label>Selecciona una categoría:
          <section id="selectCategory" name="category"
            onChange={handleChangeCategory}
          >
            <option value="Diseño">Diseño</option>
            <option value="Ciencia">Ciencia</option>
            <option value="Biología">Biología</option>
            <option value="Medicina">Medicina</option>
          </section>
        </label>
      </div>

      <div>
        <form className="search">
          <h3>Ordenación:</h3>
          <button name="a-z" onClick={handleSortAsc}>A-Z</button>
          <button name="z-a" onClick={handleSortDesc}>Z-A</button>
        </form>
      </div>
    </section>

    <article>
      {list.length !== 0 ?
        <article>
          {list.map(entry => (
            <EntryCard key={uuidv4()}
              data={entry} />

          ))};
        </article>
        : <p>No se reciben datos</p>
};
  </article>
</>
};

export default MainComponent;