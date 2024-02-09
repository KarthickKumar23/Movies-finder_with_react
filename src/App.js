import React, { useState } from "react";
// import  ReactDOM  from "react-dom";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';
import { useEffect } from "react";
// f222ed95
const API='http://www.omdbapi.com?apikey=f222ed95';
const movie1={
    "Title": "Film Title Poem",
    "Year": "2016",
    "imdbID": "tt6947176",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTljYTkzMTYtZmZmMy00OGU1LTk0ODQtNWI4MzQ2MjZhMTg5XkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_SX300.jpg"
}
const App = ()=>{
    const [searchTerm,setSearchTerm]=useState('');

      const [movies,setMovies]=useState([]);
      
    useEffect(
          ()=>{
                 searchMovies('spiderman');
          },[]);
          const searchMovies = async (title)=>{
            const response=await fetch(`${API}&s=${title}`);
            const data=await response.json();
            setMovies(data.Search);
        }
    return(
             <div className="app">
                    
                    <h1>Karthick Movies</h1>
                    <div className="search">
                        <input placeholder="Search for Movies" value={searchTerm}
                        onChange={(e)=>setSearchTerm(e.target.value)}
                        />
                        <img src={SearchIcon}
                        alt="search"
                        onClick={()=>searchMovies(searchTerm)}
                        />


                    </div>
                    {
                        movies?.length >0 ?( <div className="container">
                         {
                            movies.map((movie)=>(<MovieCard movie={movie}/>))
                         }
                    </div>) :
                    (<div className="empty">
                        <h1>NO MOvies found</h1>
                        </div>)
                    }
                   

             </div>


    );
}
export default App;