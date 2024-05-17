import './MainComponent.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import EntryCard from "./EntryCard/EntryCard";



const baseURL = "http://localhost:3000/api/entries";

const MainComponent = () => {

  const [list, setList] = useState([]); // Lista de entries
  const [selectedCategory, setSelectedCategory] = useState("")

  // ***************************************************************
  // ******************   GET ALL ENTRIES  *************************
  // ***************************************************************

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.buscar.value
    // sacar por consola el valor del input
    console.log(title)
    // Filtrar del array de entries el buscado
    const result = (list.filter((entry) => entry.title === title));
    // saca por consola el array filtrado
    console.log(result);
    // Modificar el estado entries con el resultado de filtrado
    setList(result);
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


  // ***************************************************************
  // ***************** FILTER BY CATEGORY  *************************
  // ***************************************************************

  // Filtrar por categoria

  const handleChangeCategory = (e) => {
    const selectedValue = e.target.value;
    console.log(e)
    const filteredList = (list.filter((element) => element.category === selectedValue));
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
    const listSortedAsc = list.sort((a , b) => a.title.localeCompare(b.title));
    console.log(listSortedAsc)
    setList(listSortedAsc);
    /* Sin método localCompare
    
    list.sort((a, b) => {
    if (a.nombre < b.nombre) {
        return -1;
    } else if (a.nombre > b.nombre) {
        return 1;
    } else {
        return 0;
    }
}); */
  }

  useEffect(() => {

  }, [list]);
  

  const handleSortDesc = () => {
    // Sort descending
    const listSortedDesc = list.sort((a , b) => b.title.localeCompare(a.title));
  
    console.log(listSortedDesc)
    setList(listSortedDesc);
      /* Sin método localCompare
    
    list.sort((a, b) => {
    if (a.nombre < b.nombre) {
        return 1;
    } else if (a.nombre > b.nombre) {
        return -1;
    } else {
        return 0;
    }
}); */
  }

  useEffect(() => {
    
      }, [list]);


  // ***************************************************************
  // ***********************   RETURN   ****************************
  // ***************************************************************

  return <>

    <form className="searchTitle" onSubmit={handleSubmit}>
      <h3>Búsqueda por título:</h3>
      <label>Búsqueda por título:
        <input type="text" name="buscar" id="buscar" ></input>
      </label>
      <button>Buscar</button>
    </form>

    <section className="searchTitle">
      <h3>Filtro por categoría:</h3>
      <label>Selecciona una categoría:
        <select id="selectCategory" name="categories"
          onChange={handleChangeCategory}
        >
          <option value="Diseño">Diseño</option>
          <option value="Ciencia">Ciencia</option>
          <option value="Sucesos">Sucesos</option>
          <option value="Deportes">Deportes</option>
        </select>
      </label>
    </section>

    <section className="searchTitle">
      <h3>Ordenación:</h3>
      <button name="a-z" onClick={handleSortAsc}>A-Z</button>
      <button name="z-a" onClick={handleSortDesc}>Z-A</button>
    </section>

    <article>
      {list.length !== 0 ?
        <ul>
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