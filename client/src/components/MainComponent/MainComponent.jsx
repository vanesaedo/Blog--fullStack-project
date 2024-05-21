import './MainComponent.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import EntryCard from "./EntryCard/EntryCard";



const baseURL = "http://localhost:3000";

const MainComponent = () => {

  const [list, setList] = useState([]); // Lista de entries

  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredEntries, setFilteredEntries] = useState([]);


  // ***************************************************************
  // ******************   SEARCH BY TITLE  *************************
  // ***************************************************************

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.buscar.value
  
    const result = (list.filter((entry) => entry.title === title));

    console.log(result);
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
        setFilteredEntries(entries); // Inicializar filteredEntries con todos los entries
      } catch (e) {
        setList([]);
        setFilteredEntries([]);
      }
    }
    getEntries();
  }, []);


  // ***************************************************************
  // ***************** FILTER BY CATEGORY  *************************
  // ***************************************************************

  // Filtrar por categoria

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (category === '') {
      setFilteredEntries(list);
    } else {
      setFilteredEntries(list.filter(entry => entry.category === category));
    }
 
  };


useEffect(() => {

  console.log("Artículos por categoría:", filteredEntries);
}, [filteredEntries]);



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

return (<>
  <section className="filters">

    <div>
      <form className="formfilter" onSubmit={handleSubmit}>
        <div  className="search">
        <input type="text" name="buscar" id="buscar" className="inputproperties" placeholder="Escribe un título"></input>
        </div>
        <div  className="search">
        <button className="button_blue">Buscar</button>
        </div>
      </form>
    </div>
  
    <div className="search">
      <select name="category" className="inputproperties"
          onChange={handleCategoryChange} value={selectedCategory}
        >
          <option value="">Todas las categorías</option>
          <option value="Diseño">Diseño</option>
          <option value="Ciencia">Ciencia</option>
          <option value="Biología">Biología</option>
          <option value="Medicina">Medicina</option>
      </select>
      
    </div>

    <div>
      <form className="formfilter">
        <div className="search">
        <button className="button_blue" name="a-z" onClick={handleSortAsc}>Orden A-Z</button>
        </div>
        <div className="search">
        <button className="button_blue" name="z-a" onClick={handleSortDesc}>Orden Z-A</button>
        </div>
        </form>
    </div>
  </section>

  <article>
    {list.length !== 0 ?
      <article>
        {filteredEntries.map(entry => (
          <EntryCard key={uuidv4()} data={entry} />

        ))};
      </article>
      : <p>No se reciben datos</p>
    };
  </article>
</>
);
};

export default MainComponent;