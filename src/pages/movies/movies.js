import React from "react";
import { MovieItem } from "./movie/movie";
import "./movies.css";

export default function Movies({movies ,addToFavourite , removeFavourite }){
   
    return (
        <div className="movie-list">
          { movies && movies.length > 0 && movies.map(mov => (<MovieItem key={mov.id} movie={mov} addToFavourite={ addToFavourite }  removeFavourite = {removeFavourite}/>))}
      </div>
    )
} 