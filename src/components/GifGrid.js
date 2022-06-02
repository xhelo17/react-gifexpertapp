import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ categoria }) => {
    const { data, loading } = useFetchGifs( categoria );
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> { categoria } </h3>
            { loading && <p className='animate__animated animate__flash'>Cargando...</p>}
            <div className='card-grid'>
                {
                    data.map( images => (
                        <GifGridItem 
                            key={ images.id }
                            {...images}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid