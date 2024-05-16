import React from "react";

const Home = () => {
  return <>
    <div>
      <img src={photo} className="photo" alt="author_image" />
    </div>
    <h1>Welcome</h1>
    <h1>Enjoy your reading</h1>
    <section className="categoriesList">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

    </section>
  </>
};

export default Home;
