
import './App.css';

import {useState,useEffect,useRef} from "react"
import Comp1 from './Components/Comp1';

function App() {
  
    const [query,setQuery] = useState();
    const [movie,setMovie] = useState([]);
    const input = useRef()

    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?s=${query}&apikey=f2af41e4`).then(response=>response.json()).then(data=>setMovie(data.Search))
    },[query])

 console.log(movie);
 const getSearch =()=>{
    setQuery(input.current.value)
 }
  return (
    <div className="App">
               <div className="navbar">
                   <h1 className='hook'>HOOKED</h1> 
                </div>
       
            <div className='search-container'>
              <input className='search-input' type="text" ref={input}/>
               <button className='btn' onClick={getSearch}>search</button>
            </div>

            <h2>Sharing a few of our favourite movies</h2>

            <div className="movie">
            {(!query) ? (""):(
              movie.map((e,i)=>{
                //console.log(e);
             return ( <Comp1   ey={i} temp={e.imdbID}
                     title={e.Title}
                     type={e.Type}
                     year={e.Year}
                     image={e.Poster}
              />
             ) })
            )
              } 
              </div>

          
    </div>
  );
}

export default App;
