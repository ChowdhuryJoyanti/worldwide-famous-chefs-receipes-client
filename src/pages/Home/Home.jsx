import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import Chefs from '../chefs/Chefs';
import { Container } from 'react-bootstrap';
import'./Home.css';
import Header from '../Shared/Header/Header';


const Home = () => {

    const [chefsData, setChefsData] = useState([]);
   useEffect(()=>{
    fetch(`https://worldwide-famous-chefs-receipes-server-chowdhuryjoyanti.vercel.app/alldata`)
    .then(res => res.json())
    .then(data => setChefsData(data))
   },[])
//    console.log(chefsData);

//    const chefData = useLoaderData()

    return (
        <Container>
            <Header></Header>
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