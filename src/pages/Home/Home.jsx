import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import Chefs from '../chefs/Chefs';
import { Container } from 'react-bootstrap';
import'./Home.css';

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
            
        <div className='chefs-container'>
            <div className=" row chef-container">
            {
                chefsData.map(chef => <Chefs
                    key={chef._id}
                    chef={chef}
                
                ></Chefs> )

            }
            </div>

        </div>
          
    
        </Container>
    );
};

export default Home;