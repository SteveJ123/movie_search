import React from 'react';
import {Link} from 'react-router-dom';
import './MovieThumb.css'

const MovieThumb = (props) => {
    console.log("moviethumb", props);
    return (        
        <div>
            {/* className="rmdb-moviethumb" */}
            {props.clickable ?
            <Link to={{pathname:`/${props.movieId}`, movieName: `${props.movieName}`}}>
            <img src={props.image} alt="movieThumb" style={{width: "154px", height: "231px"}} />
            </Link>
            : <img src={props.image} alt="movieThumb" /> }
            
            {/* style={{width: 240, height:240 } */}
        </div>
    )
}

export default MovieThumb
