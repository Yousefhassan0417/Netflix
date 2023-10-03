import React, { useEffect, useState } from "react";
import { instance } from "../Axios";

const Main = () => {
  const [randomMovie, setRandomMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const response = await instance.get("popular?", {
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDAxZmE4YjUyM2EyNTE3MDQ2Y2I3ZDE2YTYxOGE3NCIsInN1YiI6IjY0ZjcyZDkwZTBjYTdmMDEwZGU2N2EwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2zlCOD6wxwWEfnvvi92NAAQNN1448FCD9OLor1jCni4",
          },
        });
        const movies = response.data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        const selectedMovie = movies[randomIndex];
        setRandomMovie(selectedMovie);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomMovie();
  }, []);
     const trucatestring =(str,num) => {
      if(str?.length>num) {
        return str.slice(0,num) + '...';
      }else{
        return str;
      }
     }

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="w-full h-[550px] text-white">
          <div className="w-full h-full">
            <div className="absolute w-full h-[550px] "></div>
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
              alt={randomMovie?.title}
            />
            <div className="absolute w-full top-[20%] p-4 md:p-3">
              <h1 className="text-3xl md:text-5xl font-bold">
                {randomMovie?.title}
              </h1>
              <div className="my-4">
                <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                  Play
                </button>
                <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                  Watch Later
                </button>
              </div>
              <p className="text-gray-400 text-sm">{`Release Date: ${randomMovie?.release_date}`}</p>
              <p className="w-full md:max-w-[70%] lg:max-w-[35%] text-gray-200">{trucatestring(randomMovie?.overview,150)}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
