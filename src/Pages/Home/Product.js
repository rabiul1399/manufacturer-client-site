import React from 'react';
import { Link } from 'react-router-dom';

const product = ({ part }) => {
    const {_id, name,price,description, img ,quantity,minOrder} = part;


    return (
       <div>
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
       
        <Link to={`/summary/${_id}`} type="button" className="btn btn-primary mt-2">Purchase</Link>
        
        </div>
    </div>
</div>


</div>
       </div>
    );
};

export default product;


