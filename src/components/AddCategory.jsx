import React, { useState } from 'react';
import PropTypes from 'prop-types';


const AddCategory = ( {setCategory}) => {
    const [value, setvalue] = useState ('');

    const handleInputchange = (e) => {
        setvalue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( value.trim().length > 2 ) {
            setCategory( categoryRef => [value, ...categoryRef]);
            setvalue('');

        }
    }
    return (
       <form onSubmit = {handleSubmit}>
            <input 
            type="text" 
            value= { value } 
            onChange = { handleInputchange }
         />
       </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default AddCategory;

