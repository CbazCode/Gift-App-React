import React from 'react';

export const GifGrid = ({category}) =>{

    const getGif = async () =>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=Goku&limit=10&api_key=kztVQeoR1Z6EXgKaGv3LANBUdCWw391M';

        const resp = await fetch(url);
        const {data} = await resp.json();

        const gif = data.map((img)=>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized.url                
            }
        })
        console.log(gif);

    }

    getGif();

    
    return <h2>{category}</h2>
}