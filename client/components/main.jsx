import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import dummyData from '../../data.json'

const Main = ({fetchedData, setFetchedData}) => {
  // const [fetchedData, setFetchedData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/yelp')
  //     .then((response) => {
  //       const rawData = response.data.businesses;
  //       setFetchedData(rawData);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  
  //data from file for dev purposes only
  // useEffect(() => {
  //   setFetchedData(dummyData.businesses)
  // }, []);

  return (
    <article className='flex flex-wrap gap-1 p-0 m-0 mt-1 ml-72 w-auto rounded-xl'>
      {fetchedData.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          location={item.location.display_address}
          closes={item.is_closed}
          price={item.price}
          picUrl={item.image_url}
        />
      ))}
    </article>
  );
};

export default Main;
