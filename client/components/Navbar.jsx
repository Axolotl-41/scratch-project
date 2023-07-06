import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({username, setUser, fetchedData, setFetchedData}) => {
  const [sendPreference, setSendPreference] = useState({
    term: '',
    location: '',
  });
  const location = useLocation();

  // new search fetch
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    console.log(sendPreference);
    axios
      .post('http://localhost:3000/yelp/search', sendPreference)
      .then((response) => {
        console.log('data sent to server');
        console.log(response.data);
        const rawData = response.data.businesses;
        setFetchedData(rawData);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='fixed h-screen'>
      {!username ? <div className='flex justify-end gap-4 p-4 rounded-xl w-72'>
        <Link to="/signup" state={{ background: location }} className='flex items-center justify-center w-24 h-8 my-2 cursor-pointer text-white bg-transparent border border-orange-600 rounded tracking-wide capitalize hover:bg-slate-900 hover:bg-opacity-50'>
          Sign Up
        </Link>
        <Link to="/login" state={{ background: location }} className='flex items-center justify-center w-24 h-8 my-2 cursor-pointer text-white bg-transparent border border-orange-600 rounded tracking-wide capitalize hover:bg-slate-900 hover:bg-opacity-50'>
          Log In
        </Link>
      </div> :
        <div className='flex justify-end gap-4 p-4 rounded-xl w-72'>
          <button onClick={() => setUser({})} className='flex items-center justify-center w-24 h-8 my-2 cursor-pointer text-white bg-transparent border border-orange-600 rounded tracking-wide capitalize hover:bg-slate-900 hover:bg-opacity-50'>Sign Out</button>
        </div>}
      <main className='flex flex-col justify-center items-right p-4 rounded-xl h-[80vh] w-72'>
        <div>
          <h3 className='m-0 text-6xl font-black tracking-wider uppercase text-right text-white'>Me</h3>
          <h3 className='m-0 text-6xl font-black tracking-wider uppercase text-right text-white'>Want</h3>
          <h3 className='m-0 text-6xl font-black tracking-wider uppercase text-right text-white'>Food</h3>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col items-end m-0'>
          <input
            name='food'
            type='text'
            placeholder='How Hungry You Wanna Be?'
            className='w-60 h-8 p-4 my-4 block rounded-3xl bg-white border border-solid border-gray-200'
            value={sendPreference.term}
            onChange={(e) =>
              setSendPreference({ ...sendPreference, term: e.target.value })
            }
          />
          <input
            name='location'
            type='text'
            placeholder='Enter Location'
            className='w-60 h-8 p-4 block mb-4 rounded-3xl bg-white border border-solid border-gray-200'
            value={sendPreference.location}
            onChange={(e) =>
              setSendPreference({ ...sendPreference, location: e.target.value })
            }
          />
          <button className='w-48 h-8 my-2 cursor-pointer text-white bg-orange-600 border-none rounded tracking-wide capitalize'>
            Search
          </button>
        </form>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
