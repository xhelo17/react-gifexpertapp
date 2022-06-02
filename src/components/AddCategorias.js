import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategorias = ({ setcategorias }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInpuntChange = (e) =>{ setinputValue(e.target.value) }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setcategorias( cats => [ inputValue,...cats])
            setinputValue('')
        }
    }

  return (
    <form onSubmit={ handleSubmit }>
        <input
            type="text"
            value={ inputValue }
            onChange={ handleInpuntChange }
        />
    </form>
  )
}

export default AddCategorias

AddCategorias.protoTypes = {
    setcategorias: PropTypes.func.isRequerired
}