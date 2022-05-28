import React from 'react';
import useProducts from '../hooks/useProducts';
import Product  from './Product';

const AllProducts = () => {
    const [parts] = useProducts([]);
    return (
        <div>
        
           <h2 className='text-center my-4  text-orange-600 text-3xl font-bold'>All Products</h2>
         

           <div className='grid grid-cols-1 md:grid-cols-3 mb-6 mx-4 rounded-lg gap-6 '>
           {
                parts.map(part => <Product part={part} key={part._id}></Product>)
            }

           </div>

           
           
        </div>
    );
};

export default AllProducts;