import React , {useState,useEffect} from 'react';
import YouTube from 'react-youtube';
import axios from './axios';
import "./Row.css";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl,isLargeRow}) {

    const [movies, setmovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        // if [], run once when the row loads, and don't run again
        
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            //     https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
            // console.log(request.data.results);
            setmovies(request.data.results);
            return request;
        }
        fetchData()
    },[fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            movieTrailer(movie?.name || '').then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((error) => {console.log(error);})
        }
    }

    return (
        <div className="row">
            <h1>{title}</h1>

            <div className="row__posters">
                {movies.map((movie) => {
                    return (
                        <>
                            <img key={movie.id} onClick={() => {handleClick(movie)}} className={` row__poster_img ${isLargeRow && 'row__posterLarge_img'} `} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={movie.original_title} />
                        </>    
                    )
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
};

export default Row;