import React, { useEffect, useState } from 'react';
import { instance } from '../Axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Movie from './Movie';

const Row = ({ title, fetchURL, rowID  }) => {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    console.log(title);
    const fetchData = async () => {
      try {
        const response = await instance.get(`${fetchURL}?`, {
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDAxZmE4YjUyM2EyNTE3MDQ2Y2I3ZDE2YTYxOGE3NCIsInN1YiI6IjY0ZjcyZDkwZTBjYTdmMDEwZGU2N2EwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2zlCOD6wxwWEfnvvi92NAAQNN1448FCD9OLor1jCni4',
          },
        });

        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const sliderLeft = () => {
    var slider = document.getElementById('slider' + rowID);
     slider.scrollLeft = slider.scrollLeft - 500;
  };

  const sliderRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
      <MdChevronLeft onClick={sliderLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        <div id={'slider'+ rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item) => (
        <Movie key={item.id} item={item}/>
          ))}
        </div>
        <MdChevronRight onClick={sliderRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
      </div>
    </>
  );
};

export default Row;
