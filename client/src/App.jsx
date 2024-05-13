import { useState } from 'react'
import  photo from './assets/photo.png'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
  )
}

export default App
