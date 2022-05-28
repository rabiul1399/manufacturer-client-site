import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';

const CheckoutForm = ({product}) => {
    const stripe = useStripe();
    const elements = useElements('');
    const [cardError, setCardError] = useState();
    const [success, setSuccess] = useState();
    const [processing, setProcessing] = useState();
    const [transactionId, setTransactionId] = useState();
    const [clientSecret, setClientSecret] = useState('');

    const {orderQuantity,price,productName,user,_id} = product;
    // const totalPrice =  (price *orderQuantity );

    useEffect(() => {
        fetch('  https://warm-sea-73005.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price})
        }).then(res => res.json())
            .then(data => {
               console.log(data)
               if (data?.clientSecret) {
                setClientSecret(data.clientSecret);
            }
            })

    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: productName,
                        email: user
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed.')
            
          
            // confram payment data store payment on database
            const payment = {
                product: _id,
                transactionId: paymentIntent.id
            }
            fetch(`  https://warm-sea-73005.herokuapp.com/allorder/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res=>res.json())
            .then(data => {
                setProcessing(false);
                console.log(data);
            })

        }

    }
    return (
      <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || success}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}  </p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                </div>
            }
        </>

    );
};

export default CheckoutForm;