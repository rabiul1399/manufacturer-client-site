import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
 
    const {data:products,isLoading ,refetch} = useQuery('[products]' , ()=> fetch('  https://warm-sea-73005.herokuapp.com/product').then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

 


    return (
        <div>
            <h2 className='text-3xl text-center font-semibold'>Manage Your all Products :{products.length}</h2>

            <div className='grid grid-cols-1  md:grid-cols-2 m-6  rounded-lg gap-6 '>
           {
                products.map(product => <ManageProduct product={product}  refetch={refetch} key={product._id}></ManageProduct>)
            }

           </div>
        </div>
    );
};

export default ManageProducts;