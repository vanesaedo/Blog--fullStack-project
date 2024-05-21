import React from "react";
import axios from "axios";
import './NewEntry.css'

const NewEntry = () => {

  const handleSubmitNewEntry = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/entries/new/?', {
        title: e.target.title.value,
        content: e.target.content.value,
        email: e.target.email.value,
        category: e.target.category.value,
        entry_image: e.target.entry_image.value
      });

      console.log("Your new entry has been created.", response);

    } catch (error) {
      console.error('Error in newEntry function:', error);
      throw error; // Re-throw the error so it can be caught in handleSubmitNewEntry
    }

  };
  return (<>
  <h3>Nuevo artículo:</h3>
  <section className="newentry_form">
   
    <form onSubmit={handleSubmitNewEntry}>

      

      <label name="title" >Título:<br></br>
        <input type="text" name="title"  class="new_entry_form_label" /><br></br>
      </label>

      <label name="content" >Contenido: <br></br>
      <textarea name="content"  className="new_entry_form_label"></textarea><br/>
      </label>

      <label name="entry_image"> Url de la imagen:<br></br>
        <input type="text" name="entry_image"  class="new_entry_form_label" /><br></br>
      </label>

      <label name="category"> Categoría: <br></br>
        <input type="text" name="category"  class="new_entry_form_label" /><br></br>
      </label>

      <label name="email"> Email del autor: <br></br>
        <input type="email" name="email"  /><br></br>
      </label>

      <button className="createButton">Create Entry</button>

    </form>
  </section>
  </>
  )
};



export default NewEntry;
