import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategoriesSended})=>{

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        //si yo quitara el e.preventDefault renderizaria denuevo este componente tmb
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategoriesSended(cats =>[inputValue,...cats]);
            setInputValue('');
            document.getElementById('entrada').placeholder= '';
        }

    }
    
    return (
    
             <form onSubmit = {handleSubmit}>
                <input id="entrada"
                 type='text'
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