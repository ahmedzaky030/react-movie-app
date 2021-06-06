import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useRef } from "react";
import { buildParameters, getGenres, getMovie , config } from './Api';


import Header from './pages/header/header';
import Movies from './pages/movies/movies';

function App() {
  const [genresListValue , setGenresList] = React.useState([]);
  const [moviesListValue , setMoviesList] = React.useState([]);
  const [configValue, setConfig] = React.useState(config);
  const isInitialMount = useRef(true);

  useEffect(() => {
    getGenres().then(res => {
      setGenresList(res.data.genres);
    });
  }, [])
  
  useEffect(()=>{
    getMovie().then(res => {
      let favouriteIdArray = JSON.parse(localStorage.getItem('favouriteMovieIds'));
      
      res.data.results.forEach(element => {
        element['genres']= genresListValue.filter(v => element.genre_ids.includes(v.id)).map(v => v.name);
        element['isFavourite'] = favouriteIdArray && favouriteIdArray.indexOf(element.id) !== -1;
      });
      setMoviesList(res.data.results);
    });
  }, [genresListValue]);
  
  useEffect(() => { 
    if(isInitialMount.current){
      isInitialMount.current = false;
    } else {
      console.log('updated config in app.js', configValue)
    }
    
  }, [configValue])
  
  // buildParameters(config);

  const addToFavourite = (id) => {
    let storedIds = localStorage.getItem('favouriteMovieIds')
    if(storedIds){
      let favouriteIdArray = JSON.parse(storedIds);
      favouriteIdArray.push(id);
      localStorage.setItem('favouriteMovieIds',JSON.stringify(favouriteIdArray));
    } else {
      localStorage.setItem('favouriteMovieIds',JSON.stringify([id]))
    }
  }

  const removeFavourite = (id) => {
    let storedIds = localStorage.getItem('favouriteMovieIds')
    if(storedIds){
      let favouriteIdArray = JSON.parse(storedIds);
      favouriteIdArray = favouriteIdArray.filter( v => v !== id);
      localStorage.setItem('favouriteMovieIds',JSON.stringify(favouriteIdArray));
    } else {
      localStorage.setItem('favouriteMovieIds',JSON.stringify([]))
    }
  }


 
  return (
    <div className="container">
      
     <Header genres={genresListValue} updateConfig={setConfig} config={configValue}/>
     <Movies movies={moviesListValue} addToFavourite= {addToFavourite} removeFavourite = {removeFavourite} />
      
    </div>
  );
}

export default App;
