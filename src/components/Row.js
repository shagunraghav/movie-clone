import React, { useEffect, useState } from 'react';
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import "../assest/row.css";


const baseUrl = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, isLargeRow}){
    
    const [movie, setMovies]= useState([]);
    const [trailerUrl, setTrailerUrl] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request.data.results);

            return request;
        }
        fetchData();
    }, [ fetchUrl]);

const handleTrailer = (movie) => {
    if(trailerUrl){
        setTrailerUrl("");
    }else{
        movieTrailer(movie?.name || "").then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
        })
        .catch(() => window.alert('Temporary Unavaible'));
    }
}
const opts = {
    height: "390",
    width: '100%',
    playerVars: {
        autoplay:1
    }
}

    return(
        <div className="row">
            {title}
            <div className="row__posters">
                {
                    movie.map(movie => (
                        <img  
                        key = {movie.id}
                        onClick= {() => handleTrailer(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                    )
                    )
                }

               

            </div>
            {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts}/> }
        </div>
    );
}


export default Row;