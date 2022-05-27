import React from 'react';

const AddProduct = () => {


    const addProduct= () =>{

        
    }
    return (
        <div className='  mt-8'>
                <h2 className='text-3xl font-semibold mb-3'>Update your Profile</h2>
                <form onSubmit={addProduct} className='form-control'>
                    <input type="text"  placeholder="phone"className="input w-full mb-2 max-w-xs" readOnly />
                    <input type="text"  placeholder="phone" className="input mb-2 w-full max-w-xs" />
                    <input name='education' type="text" placeholder='Education' className="input mb-2 w-full max-w-xs"  />
                    <input name='location' type="text" placeholder='Location' className="input mb-2 w-full max-w-xs"  />
                    <input type="text" name="phone" placeholder="phone" className="input mb-2 w-full max-w-xs" />
                    <input name='linkdin' type="text" placeholder='Linkdin' className="input mb-2 w-full max-w-xs"  />
                    <input name='github' type="text" placeholder='Github' className="input mb-3 w-full max-w-xs"  />
                    <input type="Submit" value="submit" className="btn w-full max-w-xs" />

                </form>
            </div>
    );
};

export default AddProduct;