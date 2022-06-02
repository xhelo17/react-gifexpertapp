import React, { useState } from 'react'
import AddCategorias from './components/AddCategorias';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categorias, setcategorias] = useState(['one punch'])
    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategorias setcategorias={ setcategorias }/>
        <hr/>

        <ol>
            {
                categorias.map( categoria =>( 
                    <GifGrid 
                        key={ categoria }
                        categoria={ categoria }
                    />
                ))
            }
        </ol>
        </>
    )
}

export default GifExpertApp