import React, { useEffect, useState } from 'react';
import MainButton from '../Shared/MainButton';
import Product from './Product';

const Products = () => {
    const [parts,setParts] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setParts(data))
    },[])
    return (
        <div>
           <div className='flex justify-between  items-center m-2'>
           <h2 className='text-orange-600 text-3xl font-bold'>Featured Products</h2>
         <MainButton>All products </MainButton>
           </div>

           <div className='grid grid-cols-1 lg:grid-cols-3 mb-6  rounded-lg gap-6 '>
           {
                parts.slice(0,6).map(part => <Product part={part} key={part.id}> </Product>)
            }

           </div>

           
           
        </div>
    );
};

export default Products;