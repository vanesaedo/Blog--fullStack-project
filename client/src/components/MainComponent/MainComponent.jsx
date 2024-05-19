import './MainComponent.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import EntryCard from "./EntryCard/EntryCard";



const baseURL = "http://localhost:3000/api/entries";

const MainComponent = () => {

  const [list, setList] = useState([]); // Lista de entries
 /*  const [newEntryData, setNewEntryData] = useState({
    title: '',
    content: '',
    email: '',
    category: '',
    entry_image: ''
  }); */
  

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
  // *******************   CREATE ENTRY   **************************
  // ***************************************************************

  const handleSubmitNewEntry = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/api/entries/new/?', {
          title:e.target.title.value,
          content: e.target.content.value,
          email: e.target.email.value,
          category: e.target.category.value,
          entry_image:e.target.entry_image.value
        });

        console.log("Your new entry has been created.", response);
        setNewEntryData[response.data]
      } catch (error) {
        console.error('Error in newEntry function:', error);
        throw error; // Re-throw the error so it can be caught in handleSubmitNewEntry
      }
     
    };

// 


/*    "title":"Biolumniscencia marina en las Maldivas",  
      "content": "La bioluminiscencia es la emisión de luz por un organismo vivo. Esta luz no es una luz refracta, pero ben una luz producida. Miles de especies animales emiten luz, bacterias, hongos, algas, insectos, moluscos, crustáceos y especialmente los peces de aguas profundas, que viven en el abismo. 
En el abismo, la bioluminiscencia es común con el 95% de los individuos recolectados en 4000 m de profundidad, son luminosos. 
La bioluminiscencia es una parte integral de los medios de supervivencia de estas especies. Estos animales desencadenar reacciones químicas en las que la energía se convierte en energía luminosa.", 
      "date": "2024-04-30",
      "email": 1,
      "category": "Ciencia",
      "image": "https://astronoo.com/images/animaux/clitocybe.png" */

  // ***************************************************************
  // ***********************   RETURN   ****************************
  // ***************************************************************

  return <>

    <form className="search" onSubmit={handleSubmit}>
      <h3>Búsqueda por título:</h3>
      
        <input type="text" name="buscar" id="buscar" placeholder="Title"></input>
    
      <button>Buscar</button>
    </form>

    <section className="search">
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

    <section className="search">
      <h3>Ordenación:</h3>
      <button name="a-z" onClick={handleSortAsc}>A-Z</button>
      <button name="z-a" onClick={handleSortDesc}>Z-A</button>
    </section>

    <section className="search">
    <form id="newentry" onSubmit={handleSubmitNewEntry}>

    <h3>Nueva entrada:</h3>

      <label name="title">Título:<br></br>
      <input type="text" name="title" placeholder="Title" /><br></br>
      </label>

      <label name="content">Contenido: <br></br>
      <input type="text" name="content" placeholder="Content" /><br></br>
      </label>

      <label name="entry_image"> Url de la imagen:<br></br>
      <input type="text" name="entry_image" placeholder="Entry Image URL" /><br></br>
      </label>

      <label name="category"> Categoría: <br></br>
      <input type="text" name="category" placeholder="Category" /><br></br>
      </label>

      <label name="email"> Email del autor: <br></br>
      <input type="email" name="email" placeholder="Email" /><br></br>
      </label>

      <button className="createButton">Create Entry</button>

    </form>
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

      }  </article>

  </>
};

export default MainComponent;