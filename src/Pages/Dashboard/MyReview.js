import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
    const [user] = useAuthState(auth);

    const handleMyReview =event =>{
         event.preventDefault();
toast(' Completely Add Your Reviews ')

    }
    return (
        <div className='mx-24'>
            <h2 className=' font-semibold  text-2xl '>Add Your Review</h2>

            <form onSubmit={handleMyReview} className=' my-5'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" value={user?.displayName} className="input input-bordered focus:border-none" readOnly />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="file" className="input input-bordered focus:border-none"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product-Rating</span>
                    </label>
                    <input type="number" max={5} placeholder='Rating number out of 5' className="input input-bordered focus:border-none" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <textarea type="number" placeholder='Type your product reviews' className="input input-bordered h-24 focus:border-none" required />
                </div>

                <button className="btn mt-5">Add</button>
            </form>
        </div>
    );
};

export default MyReview;