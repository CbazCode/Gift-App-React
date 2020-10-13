
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';
// import {getGif} from '../helpers/getGifs'

export const GifGrid = ({category}) =>{

    const {data:imgs,loading} = useFetchGifs(category);
    console.log(loading);
    // const [imgs, setImgs] = useState([])

    // useEffect(() => {
    //     getGif(category)
    //         .then(img => setImgs(img));
    // },[category])


    return <>
            <h2>{category}</h2>
    
            <div className = "card-grid">
               {loading && <p>Loading...</p>}
                {
                imgs.map(image =>(
                        <GifGridItem
                            key = {image.id}
                            //le estoy pasando las propiedades de cada elemento
                             {...image}

                            //CON PROPS
                            // image = {image}
                        />
                    ))
                }
            </div>
    
            </>

}