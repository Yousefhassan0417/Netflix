import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import { instance } from '../Axios'
import { useEffect, useState } from 'react';


export default function Home() {
  const [ UpcomingMovies,setUpcomingMovies] = useState([]);
  const [TopRatedMovies ,setTopRatedMovies] = useState([]);
  const [NowPlayingMovies,setNowPlayingMovies] = useState([]);
  const [PopularMovies,setPopularMovies] = useState([]);
  
  useEffect(() => {
    //  UpComing
    instance
    .get('upcoming?', { 
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDAxZmE4YjUyM2EyNTE3MDQ2Y2I3ZDE2YTYxOGE3NCIsInN1YiI6IjY0ZjcyZDkwZTBjYTdmMDEwZGU2N2EwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2zlCOD6wxwWEfnvvi92NAAQNN1448FCD9OLor1jCni4',
      },
    })
    .then((res) => {
      setUpcomingMovies(res.data.results);
    })
    .catch((err) => console.log(err));
  
  //  TopRated
  instance
    .get('top_rated?', { 
      headers: {
        accept: 'application/json',
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDAxZmE4YjUyM2EyNTE3MDQ2Y2I3ZDE2YTYxOGE3NCIsInN1YiI6IjY0ZjcyZDkwZTBjYTdmMDEwZGU2N2EwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2zlCOD6wxwWEfnvvi92NAAQNN1448FCD9OLor1jCni4",
      },
    })
    .then((res) => {
      setTopRatedMovies(res.data.results);
    })
    .catch((err) => console.log(err));
  
  //  NowPlaying
  instance
    .get('now_playing?', { 
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDAxZmE4YjUyM2EyNTE3MDQ2Y2I3ZDE2YTYxOGE3NCIsInN1YiI6IjY0ZjcyZDkwZTBjYTdmMDEwZGU2N2EwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2zlCOD6wxwWEfnvvi92NAAQNN1448FCD9OLor1jCni4',
      },
    })
    .then((res) => {
      setNowPlayingMovies(res.data.results);
    })
    .catch((err) => console.log(err));
  
  //  Popular
  instance
    .get('popular?', { 
      headers: {
        accept: 'application/json',
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDAxZmE4YjUyM2EyNTE3MDQ2Y2I3ZDE2YTYxOGE3NCIsInN1YiI6IjY0ZjcyZDkwZTBjYTdmMDEwZGU2N2EwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2zlCOD6wxwWEfnvvi92NAAQNN1448FCD9OLor1jCni4",
      },
    })
    .then((res) => {
      setPopularMovies(res.data.results);
    })
    .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Main/>
      <Row rowID="1" title="UpComing" fetchURL={"upcoming?"} />
      <Row rowID="2" title="TopRated" fetchURL={'top_rated?'} />
      <Row rowID="3" title="NowPlaying" fetchURL={"now_playing?"} />
      <Row rowID="4" title="Popular" fetchURL={"popular?"} />
      </>
  )
}
