import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

import Product from './Product';

const Products = () => {
    const [parts] = useProducts([]);
   
    return (
        <div>
           <div className='flex justify-between  items-center m-2'>
           <h2 className='text-orange-600 text-3xl font-bold'>Featured Products</h2>
         <Link to='/allproducts' className='btn'>All products</Link>
           </div>

           <div className='grid grid-cols-1 md:grid-cols-2 mx-4 lg:grid-cols-3 mb-6  rounded-lg gap-6 '>
           {
                parts.slice(0,6).map(part => <Product part={part} key={part._id}></Product>)
            }

           </div>

           
           
        </div>
    );
};

export default Products;