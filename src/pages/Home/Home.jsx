import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import Chefs from '../chefs/Chefs';

const Home = () => {

    const [chefsData, setChefsData] = useState([]);
   useEffect(()=>{
    fetch(`http://localhost:5000/alldata`)
    .then(res => res.json())
    .then(data => setChefsData(data))
   },[])

   const chefData = useLoaderData()

    return (
        <div>
       
   
            {
                chefsData.map(chef => <Chefs
                    key={chef._id}
                    chef={chef}
                
                ></Chefs> )

            }
    
        </div>
    );
};

export default Home;