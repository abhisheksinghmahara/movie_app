
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Leftbar from '../Component/leftbar/Leftbar';
import Main from '../Component/main/Main';
import Navbar from '../Component/navbar/Navbar';
import Rightbar from '../Component/rightbar/Rightbar';
import Requests from '../Requests';
import axios from 'axios';

var url = Requests.Toprated;
// var link = Requests.Trending;

const arr = ["ORIGINALS", "RECENTLY ADDED", "CONTINUE WATCH", "TRENDING NOW", "NEW RELEASE"];

const Home = () => {
  //  var Image="https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
  const [Urlset, setUrlset] = useState(url);
  const [movies, setMovies] = useState([])
  const [Path, setPath] = useState([]);
  const [truefalse, settruefalse] = useState(false)

  useEffect(() => {
    axios.get(Urlset).then((Response) => {
      setMovies(Response.data.results);
    })
  }, [Urlset])

  // useEffect(() => {
  //   axios.get(mainImage).then((Response) => {
  //     setPath(Response.data.results);
  //   })
  // }, [])
  
  const getData = (movieType) => {
    if (movieType == "ORIGINALS") {
      url = Requests.Popular;
    }
    if (movieType == "RECENTLY ADDED") {
      url = Requests.Toprated;
    }
    if (movieType == "CONTINUE WATCH") {
      url = Requests.Trending;
    }
    if (movieType == "TRENDING NOW") {
      url = Requests.Horror;
    }
    if (movieType == "NEW RELEASE") {
      url = Requests.Upcoming;
    } setUrlset(url);
  }
  const show = (im) => {
    // alert(im);
    setPath(im);
    settruefalse(true)
  }
  return (
    <div className='cont'>
      <Navbar></Navbar>
      <div className="row">
        <div className="col-md-3">
          <Leftbar Title={arr} get={getData}></Leftbar>
        </div>
        <div className="col-md-6">
          <Main Image={Path} check={truefalse}></Main>
        </div>
        <div className="col-md-3" style={{ height: "550px" }}>
          <Rightbar movie={movies} click={show} ></Rightbar>
        </div>
      </div>

    </div>
  )
}

export default Home;