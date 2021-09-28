import React, { useEffect, useState } from 'react';
import "../assest/banner.css";
import requests from './request';
import axios from './axios';


function Banner(){

    const [movie, setMovie]= useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetFlixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);


            return request;
        }
        fetchData();
    },[])

    function truncateDesc(str, n){
        return str?.length > n ? str.substr(0, n-1) + " . . . . .": str;
    }

    return(
        <header className="banner" 
            style= {{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="btn">Play</button>
                    <button className="btn">My List</button>
                </div>
                <div className="banner__desc">
                    <p>{truncateDesc(movie?.overview,150)}</p>
                </div>
            </div>
            <div className="banner__fadeBottom">

            </div>
        </header>
        
    );
}


export default Banner;