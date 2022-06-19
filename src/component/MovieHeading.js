import React from 'react'

function MovieHeading(props) {
    return (
        <div className='movie-title'>
            <h1>{props.heading}</h1>
        </div>
    )
}

export default MovieHeading