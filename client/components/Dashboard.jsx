import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import { useState } from 'react';


function Dashboard({ username, setUser }) {
    const [fetchedData, setFetchedData] = useState([]);

  return (
    <div className='flex'>
      <Navbar
        username={username}
        setUser={setUser}
        fetchedData={fetchedData}
        setFetchedData={setFetchedData}        
      />
      <Main
        fetchedData={fetchedData}
        setFetchedData={setFetchedData}
      />
    </div>
  );
}

export default Dashboard;
