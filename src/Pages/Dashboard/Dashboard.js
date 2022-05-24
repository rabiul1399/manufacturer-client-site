import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  console.log(user)
  const {photoURL} = user;
  
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  mt-5 ">
        <h2 className='text-4xl text-primary font-bold text-center'>Dashboard</h2>
        <div className='flex  flex-row-reverse'>
          <label htmlFor="my-drawer-2" className="btn w-36 btn-primary drawer-button lg:hidden flex flex-col items-end ">Open drawer</label>
        </div>
        <Outlet></Outlet>


      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content pt-14">
          {/* <!-- Sidebar content here --> */}
          <li className='bg-orange-200 rounded-lg'><Link to='/dashboard'>My Profile <div className="avatar online pl-8">
            <div className="w-11 rounded-full">
              <img src={photoURL} alt='' />
            </div>
          </div></Link></li>

          {
            user && <>
              <li><Link to='/dashboard/order'>My Orders</Link></li>
              <li><Link to='/dashboard/review'>My Review</Link></li>

            </>
          }
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;