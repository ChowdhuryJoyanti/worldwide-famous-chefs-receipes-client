import React from 'react';
import"./ChefsDetails.css";

const ChefsDetails = ({chefRecipe}) => {
    // const{_id,chef_name,chef_experience_years,chef_num_recipes,chef_likes,chefs_image,chefs_description} = chefRecipe;
    const {recipe_name,recipe_description} = chefRecipe;
    return (


        <div className='container-chefs-details'>
        
            <img className='details-image' src={chefRecipe.recipes.recipe_img_url} alt="" />

            {/* <h2>{chef_name}</h2>
            <p>Experience:{chef_experience_years}</p>
            <p>Likes:{chef_likes} </p> 
            <p>Number of Recipe: {chef_num_recipes} </p> 
            <p>Description:{chefs_description} </p> 
            <p> </p>  */}


        </div>
    );
};

export default ChefsDetails;