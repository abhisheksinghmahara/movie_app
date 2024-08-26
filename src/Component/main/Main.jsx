import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './main.css';
import Requests from '../../Requests';
import axios from 'axios';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

const Main = ({ Image, check }) => {
  const link = Requests.Popular;
  const [films, setFilms] = useState([])
  const [vedio,setvideo]=useState("")

  useEffect(() => {
    axios.get(link).then((response) => {
      setFilms(response.data.results);
    });
  }, [])


  const getMovieurl=((title)=>{
    movieTrailer(title).then((res)=>{
        setvideo(res);
    })
  })
  const film = films[0];
  console.log("film", film);
  const rImage = "https://image.tmdb.org/t/p/original/" + Image?.backdrop_path;
  const dImage = "https://image.tmdb.org/t/p/original/" + film?.backdrop_path;
  return (
    <div className="Main">
      <div className="content">
        <img className='MImage'onClick={()=>getMovieurl(check? Image?.title:film?.title)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" src={check ? rImage : dImage} />
      </div>
      {/* <button type="button" className="btn btn-primary" >
        Launch static backdrop modal
      </button> */}

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body"  >
              <ReactPlayer url={vedio}  controls={true}></ReactPlayer>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main