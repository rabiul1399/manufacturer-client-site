import React, { useEffect,  useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const ProductSumary = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState({});
    const[orderQuantity,setOrderQuantity]=useState('');


    useEffect(() => {
        const url = ` http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [id])

    const { _id, name, price, description, img, quantity, minOrder } = product;  

    let prices = (orderQuantity * price);


       const handleQuantity = event =>{      
            setOrderQuantity(event.target.value);
       } 

      

 const handleQuantityError =() =>{

      if(orderQuantity < minOrder){
        toast.error(`Minimum Quantity Must Be ${minOrder}`)
 
    }
    else if(orderQuantity > quantity){
        toast.error(`Quantity can not be grater than ${quantity}`);

    }

}



    const handleBooking = event => {
        event.preventDefault();
        const number= event.target.phone.value   

        const productOverview = {
            id: _id,
            productName: name,
            price: prices,
            user: user.email,
            userName: user.displayName,
            phone: number,
            orderQuantity: orderQuantity,
            img

        }  
        console.log(price)
        fetch(' http://localhost:5000/order',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(productOverview)
        })
        .then(res=>res.json())
        .then(data=>{   
                if(data.success){
                toast(`YOur Order is complete`)

            } 
                
        })       

    }


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


                        <form onSubmit={handleBooking}  className='w-full mt-2'>

                            <div className="form-control">
                                <input type="text" name="name" value={user?.displayName || ''} className=" border-2 input input-bordered   w-full " readOnly />
                            </div>

                            <div className="form-control">
                                <input type="email" name='email' value={user?.email || ''} className=" border-2 input input-bordered  w-full my-1 " readOnly />
                            </div>

                            <div className="form-control ">
                                <input type="text" name="phone" placeholder="phone" className=" border-2 input input-bordered   w-full " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product-Name</span>
                                </label>
                                <input  type="text" name='name' value={name} className="input input-bordered"  readOnly/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Order-Quantity</span>
                                </label>
                                <input  onChange={handleQuantity}  min={minOrder} max={quantity} type="number"  placeholder="quantity" className="input input-bordered" required/>                            
                                
                            </div>   
                            <div className="form-control mb-8">
                                <label className="label">
                                    <span className="label-text">Order-Price $USD</span>
                                </label>
                                <input   type="number" value={prices} className="input input-bordered" readOnly />                            
                                
                            </div> 

                            <input onClick={handleQuantityError} type="submit" className='btn btn-secondary w-full my-2' value='Submit' required />
                        </form>

                    </div>
                </div>
            </div>
        </div>



    );
};

export default ProductSumary;