import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GiftExpertApp = () =>{
    
    // const categories = ['One Punch', 'Samurai X', 'Goku'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () =>{
    //     //setcategories([...categories,'ToraDora']);
    //     setCategories(cats =>{return [...categories,'ToraDora']});
    // };

    return <> 
        <h2>Gift Expert App</h2>
        <AddCategory setCategoriesSended = {setCategories}/>
        <hr></hr>
        <ol>
            {categories.map(category =>{
               return <GifGrid
                    key={category}
                    category = {category}
               />
            })}
        </ol>
    </>

}
