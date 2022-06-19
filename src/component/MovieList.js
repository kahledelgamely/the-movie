import React from 'react'

function MovieList({ movies, handleFavoriteClick, FavoriteComponent }) {


    return (
        <div className='movies'>
            {movies.map((movie, index) => (
                <div>
                    <div className='movie'>
                        <img src={movie.Poster} alt="movie" />
                        <div className="overlay" onClick={() => handleFavoriteClick(movie)}>
                            <FavoriteComponent />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieList