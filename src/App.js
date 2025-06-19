import React, { useEffect } from 'react'
import './App.css'; 
import SearchIcon from './search.svg'


// API KEY = 1759a76b
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=1759a76b';


const Movie1 = {
Poster: "N/A",
Title: "Spiderman",
Type: "movie",Year: "1990",
imdbID: "tt0100669"
}


const App = () => {
  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data)
  }

  useEffect(()=> {
    searchMovies('Spiderman');
  }, []); 

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input type='text' placeholder='Search for movies' value='Superman' onChange={()=>{}}/>
        <img src={SearchIcon}
        alt='search'
        onClick={()=>{}}/>
      </div>

      <div className='container '>
        <div className='movie'>
          <div>
            <p>{Movie1.Year}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App