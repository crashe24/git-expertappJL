import React, { useState, Fragment } from 'react';

import  AddCategory  from  './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = props => {

  const [categories  , setcategories] = useState(['goku']);
 
//   const handleAdd = () =>{
//         const nuevaCategory = 'Goku';
//         setcategories([...categories,nuevaCategory]);
//   }

    return (
        <Fragment>
            <h2>Gif Expert APP</h2>
            <hr />
            <AddCategory setCategory= {setcategories}> </AddCategory>
            <hr />
            {/* <button onClick = { handleAdd} > Add Category</button> */}
            <ol>
                {
                    categories.map( category =>  
                        ( <GifGrid  
                            key = { category }
                            category = { category } />)
                    )
                }
              
            </ol>
        </Fragment>
    )
}



export default GifExpertApp
