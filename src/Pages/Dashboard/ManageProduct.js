import React from 'react';
import { toast } from 'react-toastify';

const ManageProduct = ({product,refetch }) => {
    const {_id, name, price, description, img, quantity, minOrder } = product;

       
    const handleDelete = () =>{
        const proceed = window.confirm('Are you sure Deleted item?')       
        if(proceed){
            const url = `  https://warm-sea-73005.herokuapp.com/product/${_id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
              })
            .then(res=> res.json())
            .then(result =>{
               console.log(result);
               toast("Successfully deleted one document.");
             
                 refetch();
                
            } )
        }
    }

    return (
        <div>
        <div className='justify-center'>
            <div className="card mx-auto  w-96 bg-base-100 mb-8 shadow-xl">
                <figure><img className='h-60 w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-medium'>{description}</p>
                    <p className='font-bold'>Price: <span className='text-orange-600'>${price}/Piece</span></p>
                    <p>Quantity: <span className='text-orange-500'>{quantity}</span></p>
                    <p>Min. Order: {minOrder}</p>

                    <div className="card-actions justify-end">
                        <button onClick={()=>handleDelete(_id)} className='btn'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ManageProduct;