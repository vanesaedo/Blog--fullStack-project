import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import AuthorCard from "../AuthorCard/AuthorCard";

const baseURL = "http://localhost:3000";

const Authors = () => {
  const [list, setList] = useState([]); // Lista de autores
  useEffect(() => {

    async function getAllAuthors() {
      try {
        const res = await axios.get(`${baseURL}/api/authors`);
        console.log("Response:", res);
        const authors = res.data; //[{},{},{}]
        console.log("Data:", authors);
        setList(authors)

      } catch (e) {
        setList([])
      }
    }
    getAllAuthors();
  }, []);

  return  <article className="author_detaill">
  {list.length !== 0 ?
    <article>
      {list.map(authors => (
        <AuthorCard key={uuidv4()}
          data={authors} />

      ))};
    </article>
    : <p>No se reciben datos</p>

  }  </article>

};

export default Authors;
