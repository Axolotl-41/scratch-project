import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

const Card = (props) => {
  const { picUrl, name, location, closes, price } = props;

  return (
    <div className='w-80 h-80 shadow-md' >
      <div>
        <div className='w-80 h-80 mb-2 flex justify-center absolute'>
          <img
            className='w-full h-auto object-cover block'
            src={picUrl}
            alt='restuarant'
          />
        </div>
        <div className='w-80 h-80 flex flex-col text-right text-transparent hover:text-white hover:bg-slate-800 hover:bg-opacity-70 p-4 absolute'>
          <h5 className='m-0'><span className='m-0 text-2xl text-white font-bold bg-slate-800 bg-opacity-20'>{name}</span></h5>
          <p className='m-0 text-sm'>{location[0]} </p>
          <p className='m-0 text-xs'>{location[1]} </p>
          <p className='mt-auto m-0'>
            {price && price}
          </p>
          <p className='m-0'>{closes ? 'Open' : 'Closed'}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
