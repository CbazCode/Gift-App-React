export const getGif = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=kztVQeoR1Z6EXgKaGv3LANBUdCWw391M`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gif = data.map((img)=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url                
        }
    })
    return gif;
    //retorna una promesa por ser async

}