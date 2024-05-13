import React from "react";

const (entry, setEntry) = useState(data)


const MainComponent = () => {
  const paintEntries = () => data.map((item, index) => <article>
    <h1>{item.title}</h1>
    <h4>{item.date}</h4>
    <h6>{item.category}</h6>
    <p>{item.content}</p>
    <p>{item.author}</p>
  </article>
  );

  return (<section>

    <h2>Últimas entradas</h2>
    {paintEntries()}
  </section>
  )
};

export default MainComponent;
