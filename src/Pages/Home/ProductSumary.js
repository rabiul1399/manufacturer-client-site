import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const ProductSumary = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState({});


    const { _id, name, price, description, img, quantity, minOrder } = product;


    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])




    const handleBooking = event => {
        event.preventDefault();
        const number= event.target.phone.value
        const orderQuantity= event.target.quantity.value
        
        const productOverview = {
            id: _id,
            productName: name,
            price,
            user: user.email,
            userName: user.displayName,
            phone: number,
            orderQuantity: orderQuantity

        }
   
        
        fetch('http://localhost:5000/order',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(productOverview)
        })
        .then(res=>res.json())
        .then(data=>{   
                 
            if(data.success){
                toast(`Order is complited`)
            }
            else{
                toast.error(`Already have and appointment on ${data.productOverview?.date}`)
            }
    
         
        })

        

    }

//  let quantityError;

//     const handleQuantity =event =>{
//         const orderQuantity= event.target.quantity.value
// console.log(orderQuantity)
//         if( minOrder > orderQuantity ){

//            return  quantityError = <p className='text-red-500'><small>Try to minimum quantity</small></p>
//         }
//         if(orderQuantity > quantity ){

//            return  quantityError = <p className='text-red-500'><small>Out of Stock</small></p>
//         }
//         else{
//             return orderQuantity;
//         }
//     }

    return (
        <div>


            <div className=" min-h-screen bg-base-200 pt-24">
                <div className='grid grid-cols-1 w-full justify-items-center md:grid-cols-2 '>
                    <div className='flex  ' >
                        <img className='mt-9 ml-8 h-60 w-60' src={img} alt="" />
                        <div className="card-body h-60 w-full">
                            <h2 className="card-title font-semibold">{name}</h2>
                            <p className='font-normal'>{description}</p>
                            <p className='font-bold'>Price: <span className='text-orange-600'>${price}/Piece</span></p>
                            <p>Quantity: <span className='text-orange-500'>{quantity}</span></p>
                            <p>Min. Order: {minOrder}</p>
                        </div>


                    </div>
                    <div className='card-body'>


                        <form onSubmit={handleBooking} className='w-full mt-2'>

                            <div className="form-control">
                                <input type="text" name="name" value={user?.displayName || ''} className=" border-2 input input-bordered   w-full " readOnly />
                            </div>

                            <div className="form-control">
                                <input type="email" name='email' value={user?.email || ''} className=" border-2 input input-bordered  w-full my-1 " readOnly />
                            </div>

                            <div className="form-control ">
                                <input type="text" name="phone" placeholder="phone" className=" border-2 input input-bordered   w-full "  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product-Name</span>
                                </label>
                                <input type="text" name='name' value={name} className="input input-bordered"  readOnly/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Order-Quantity</span>
                                </label>
                                <input  type="text" name='quantity' placeholder="quantity" className="input input-bordered" />
                            </div>
                            {/* {quantityError} */}
                            <input type="submit" className='btn btn-secondary w-full my-2' value='Submit' />
                        </form>

                    </div>
                </div>
            </div>
        </div>



    );
};

export default ProductSumary;