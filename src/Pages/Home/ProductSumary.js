import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const ProductSumary = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const { displayName, email } = user;
    const [product, setProduct] = useState({});

    const { _id, name, price, description, img, quantity, minOrder } = product;
    console.log(name)

    useEffect(() => {
        const uri = `http://localhost:5000/product/${id}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])

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
                    <div className="flex justify-end  mt-8">
                        <div className="  w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                            <h2 className="font-semibold">Name:{displayName}</h2>
                            <h2 className="font-semibold">Email:{email}</h2>
                            <h2 className="font-semibold">Quantity:{}</h2>
                            <span class="label-text">Quantity</span>
                        
                                    <input type="text" placeholder='quantity' className="input input-bordered" />

                            
                            
                                {/* <div className="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" value={displayName} className="input input-bordered" readOnly />
                                </div>
                                <div className="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" value={email} className="input input-bordered" readOnly />
                                </div>
                              
                                <div className="form-control">
                                    <label class="label">
                                        <span class="label-text">Product Name</span>
                                    </label>
                                    <input type="text" value={name} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label class="label">
                                        <span class="label-text">Quantity</span>
                                    </label>
                                    <input type="text" placeholder='quantity' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label class="label">
                                        <span class="label-text">Address</span>
                                    </label>
                                    <input type="text" placeholder='address' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label class="label">
                                        <span class="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" placeholder="phone number" className="input input-bordered" />
                                </div> */}
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ProductSumary;