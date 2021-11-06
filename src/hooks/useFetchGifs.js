import { useEffect, useState } from 'react';
import getGif from '../helpers/getGifs';


export const useFetchGifs = (category) => {

   
    const [state, setstate] = useState({
        data: [], loading: true
    })
    useEffect(() => {
        getGif(category).then( imgR => {
            setstate({data:imgR, loading:false})
        } );
     }, [ category ]);

 

    return state;
}