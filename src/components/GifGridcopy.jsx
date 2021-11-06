import React, { Fragment, useEffect, useState } from 'react'
import getGif from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    const [images, setimages] = useState([]);
    
    useEffect(() => {
       getGif(category).then( setimages );
    }, [ category]);



    return (
        <Fragment>
            <h3>{ category}</h3>
                    <div className="card-grid">
                    
                        { images.map( (img) => (
                                // return <li key= {d}> {title}</li>
                                <GifGridItem 
                                        key= {img.id}  
                                        { ...img}
                                        />
                        ))}
                    
                    </div>
        </Fragment>
       
    )
}
