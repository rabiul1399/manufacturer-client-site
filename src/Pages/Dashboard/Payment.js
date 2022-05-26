import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51L17q2A5SId8O3POFDjHQzwhRWWTnUoeBr4WhRgoXyclb9FVCgF0GvAppiVOvHSzJQQUzS0aPwG1A1plsfKU7oyP00n7wz6YWf');

const Payment = () => {
    const {id} = useParams();

    const url = `http://localhost:5000/allorder/${id}`
    const {data:product,isLoading} = useQuery(['order',id],() => fetch(url,
        {
            method:'GET',
            headers: {

                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        }).then(res=>res.json()))
        if(isLoading){
            return <Loading></Loading>
        }
        
             const {orderQuantity,price,productName} = product;
    return (
        <div className=''>
<h3>Product id:{id}</h3>
        <div className="card mx-auto  w-50 max-w-md bg-base-100 shadow-2xl my-14">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {orderQuantity}</p>
          <h2 className="card-title">Please Pay for {productName}</h2>
      
         <p>Please pay: ${price}</p>
        </div>
      </div>
          <div className="card mx-auto flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
            <Elements stripe={stripePromise}>
      <CheckoutForm product={product}/>
    </Elements>
            </div>
          </div>
        </div>
    );
};

export default Payment;