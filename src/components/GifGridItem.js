import React from 'react'

export const GifGridItem = ( {url, title}) => {
    return (
        <div className ="card animate__animated animate__fadeIn">
            <img src = {url} alt = {title}></img>
            <p>{title}</p>
        </div>
    )
}


//CON PROPS
// export const GifGridItem = ( props) => {
//     return (
//         <div className ="card">
//             <img src = {props.image.url} alt = {props.image.title}></img>
//             <p>{props.image.title}</p>
//         </div>
//     )
// }



//DESESTRUCTURANDO EL PROPS
// export const GifGridItem = ( {image}) => {
//     return (
//         <div className ="card">
//             <img src = {image.url} alt = {image.title}></img>
//             <p>{image.title}</p>
//         </div>
//     )
// }
