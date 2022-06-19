import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './component/MovieList';
import SearchMovie from './component/SearchMovie';
import MovieHeading from './component/MovieHeading';
import AddFavorite from './component/AddFavorite';
import RemoveMovie from './component/RemoveMovie';


function App() {

  const [movies, setMovies] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState("")



  async function getMovies(searchValue) {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.Search) {
      setMovies(data.Search)
    }
  }


  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue])


  useEffect(() => {
    const MovieList = JSON.parse(localStorage.getItem("fav-list"))
    if (MovieList) {
      setMovies(MovieList)
    }
  }, [])


  function addMoviesToLs(items) {
    localStorage.setItem("fav-list", JSON.stringify(items))
  }

  function addFavoriteList(movie) {
    const newFavoriteList = [...favorites, movie]
    setFavorites(newFavoriteList)

    addMoviesToLs(newFavoriteList)
  }

  function removeFavoriteMovie(movie) {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID);

    setFavorites(newFavoriteList);
  }




  return (
    <div>
      <div className="row">
        <MovieHeading heading="Movies" />
        <SearchMovie searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div >
        <MovieList
          movies={movies}
          handleFavoriteClick={addFavoriteList}
          FavoriteComponent={AddFavorite}
        />
      </div>

      <div className="row">
        <MovieHeading heading="Favorites" />
      </div>
      <div >
        <MovieList
          movies={favorites}
          handleFavoriteClick={removeFavoriteMovie}
          FavoriteComponent={RemoveMovie}
        />
      </div>
    </div>
  )
}

export default App;