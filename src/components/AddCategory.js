import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategoriesSended})=>{

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategoriesSended(cats =>[...cats,inputValue]);
            setInputValue('');
        }

    }
    
    return (
    
             <form onSubmit = {handleSubmit}>
                <input type='text'
                value ={inputValue}
                onChange = {handleInputChange}
                placeholder = 'Inserte categoria aqui'
                ></input>
             </form>
    )

   
}
AddCategory.propTypes = {
    setCategoriesSended: PropTypes.func.isRequired
}