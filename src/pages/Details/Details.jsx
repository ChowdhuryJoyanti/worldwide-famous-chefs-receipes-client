import React, { useEffect, useState } from 'react';
import Chefs from '../chefs/Chefs';
import { Container } from 'react-bootstrap';

const Details = () => {
    const [chefsRecipe,setChefsRecipe] = useState([]);
    useEffect(()=>{
        fetch( `http://localhost:5000/allData`)
        .then( res => res.json())
        .then(data => setChefsRecipe(data))
        console.log(chefsRecipe);

    },[])

    return (
        <div>
            <h3>details</h3>
            <Container>
            
            <div className='chefs-container'>
                <div className=" row chef-container">
                {
                    chefsRecipe.map(chefRecipe => <p>hello</p> )
    
                }
                </div>
    
            </div>
              
        
            </Container>
        </div>
    );
};





// const Home = () => {

//     const [chefsData, setChefsData] = useState([]);
//    useEffect(()=>{
//     fetch(`http://localhost:5000/alldata`)
//     .then(res => res.json())
//     .then(data => setChefsData(data))
//    },[])
//    console.log(chefsData);

// //    const chefData = useLoaderData()

//     return (
//         <Container>
            
//         <div className='chefs-container'>
//             <div className=" row chef-container">
//             {
//                 chefsData.map(chef => <Chefs
//                     key={chef._id}
//                     chef={chef}
                
//                 ></Chefs> )

//             }
//             </div>

//         </div>
          
    
//         </Container>
//     );
// };
export default Details;