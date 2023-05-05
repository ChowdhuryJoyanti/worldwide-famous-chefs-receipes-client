import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import Chefs from '../chefs/Chefs';
import { Container } from 'react-bootstrap';

const Home = () => {

    const [chefsData, setChefsData] = useState([]);
   useEffect(()=>{
    fetch(`http://localhost:5000/alldata`)
    .then(res => res.json())
    .then(data => setChefsData(data))
   },[])
   console.log(chefsData);

//    const chefData = useLoaderData()

    return (
        <Container>
            
        
            {
                chefsData.map(chef => <Chefs
                    key={chef._id}
                    chef={chef}
                
                ></Chefs> )

            }
    
        </Container>
    );
};

export default Home;