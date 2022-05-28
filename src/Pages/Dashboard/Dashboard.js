import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
 

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  mt-5 ">
        <h2 className='text-4xl text-primary font-bold text-center '>Dashboard</h2>
        <div className='flex py-8  flex-row-reverse'>
          <label htmlFor="my-drawer-2" className="btn w-lg btn-primary drawer-button lg:hidden flex flex-col items-end mr-9 ">Open menu </label>
        </div>
        <Outlet></Outlet>

      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content pt-14">
          {/* <!-- Sidebar content here --> */}
          <li className='bg-orange-200 rounded-lg'><Link to='/dashboard'>My Profile
            { user.photoURL ?
              <div className="avatar online pl-8">
                <div className="w-11 rounded-full">
                  <img src={user?.photoURL} alt='' />
                </div>
              </div>
              :
              <div className="avatar pl-8 online placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-11">
                  <span className="text-lg">{user.displayName.slice(0, 4)}</span>
                </div>
              </div>
            }

          </Link></li>
          {
            !admin && user && <>
              <li><Link to='/dashboard/order'>My Orders</Link></li>
              <li><Link to='/dashboard/review'>My Review</Link></li>

            </>
          }
          {
            admin &&  <>
              <li><Link to='/dashboard/allOrder'>Manage All Orders</Link></li>
              <li><Link to='/dashboard/allUsers'>Make Admin</Link></li>
              <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
              <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
            </>
          }

        </ul>

      </div>
    </div>
  );
};

export default Dashboard;