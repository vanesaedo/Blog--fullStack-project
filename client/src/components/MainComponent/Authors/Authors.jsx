import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import AuthorCard from "../AuthorCard/AuthorCard";

import './Authors.css'

const baseURL = "http://localhost:3000";

const Authors = () => {

  const [list, setList] = useState([]); // Lista de autores
  useEffect(() => {

    async function getAllAuthors() {
      try {
        const res = await axios.get(`${baseURL}/api/authors`);
        console.log("Response:", res);
        const authorData = res.data; //[{},{},{}]
        console.log("Data:", authorData);
        setList(authorData)

      } catch (e) {
        setList([])
      }
    }
    getAllAuthors();
  }, []);

  return (
  <section className="author_list">
  <article className="author_item">
  {list.length !== 0 ? (
    list.map(author => (
      <AuthorCard key={uuidv4()} data={author} />
    ))
  ) : (
    <p>No se reciben datos</p>
  )}
</article>
</section>
);
};


export default Authors;
