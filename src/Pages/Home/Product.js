import React from 'react';
import { Link } from 'react-router-dom';
import MainButton from '../Shared/MainButton';

const product = ({ part }) => {
    const { name,price,description, img ,quantity,minOrder} = part;
    return (
        <div className='justify-center'>


            <div className="card card-compact h-full w-full   bg-base-100 mb-8 shadow-xl">
                <figure><img className='h-60 w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-medium'>{description}</p>
                    <p className='font-bold'>Price: <span className='text-orange-600'>${price}/Piece</span></p>
                    <p>Quantity: <span className='text-orange-500'>{quantity}</span></p>
                    <p>Min. Order: {minOrder}</p>
                  
                    <div className="card-actions justify-end">
                    {/* <button className='btn'><Link to='/purchase'>buy</Link></button> */}
                      
                      <MainButton><Link to='/purchase'>Purchase</Link></MainButton>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default product;