import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
        const {id} = useParams();
    const [user] = useAuthState(auth);
    console.log(id);

    const {displayName,email} = user;
    
    return (
        <div>
            <h2>This is Purchase page</h2>



            <div className=" min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <input type="text" value={displayName} className="input input-bordered"  readOnly/>
        </div>
        <div className="form-control">
          <input type="text" value={email} className="input input-bordered" readOnly/>
        </div>
        <div className="form-control">
          <input type="text" placeholder="phone number" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="password" className="input input-bordered" />          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Order</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Purchase;