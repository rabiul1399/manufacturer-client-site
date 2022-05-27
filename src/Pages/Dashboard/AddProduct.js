import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {


    const addProduct = event =>{
        event.preventDefault();
        const name =   event.target.name.value
        const description =event.target.description.value
        const price =event.target.price.value
        const quantity =event.target.quantity.value
        const minOrder =event.target.minOrder.value
        const img =event.target.image.value


         const product = {
            name,
            description,
            price,
            quantity,
            minOrder,
            img,

         }

         const url = `http://localhost:5000/product`;
         fetch(url, {
             method: 'POST',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(product)
         })
         .then(res=> res.json())
         .then(result =>{
             console.log(result);
             toast('Added your product ')
         } )

    }
    return (
        <div className='h-full bg-base-200  pt-8 pb-24'>
              <div>
              <h2 className='text-3xl font-semibold mb-4 text-center mb-3'>Add a Product</h2>
                <form onSubmit={addProduct} className='form-control  items-center'>          
                        
                    <input type="text" name='name'  placeholder="Product-Name" className="input mb-2 w-full max-w-xs" required/>
                    <input name='description' type="text" placeholder='description' className="input mb-2 w-full max-w-xs" required />
                   
                    <input type="number" name="price" placeholder="price" className="input mb-2 w-full max-w-xs" required/>
                    <input name='quantity' type="number" placeholder='quantity' className="input mb-2 w-full max-w-xs" required />
                    <input name='minOrder' type="number" placeholder='minOrder' className="input mb-3 w-full max-w-xs"  required/>
                    <h3 className='mr-56 mb-3'>Image URL</h3>
                    <input name='image' type='url' alt='' placeholder=' https://i.ibb.cch-7d-180.jpg' className="input mb-3 w-full max-w-xs" required />

                  
                    <input type="Submit" value="Add a product" className="btn mt-3 w-full max-w-xs" required/>

                </form>
              </div>
            </div>
    );
};

export default AddProduct;