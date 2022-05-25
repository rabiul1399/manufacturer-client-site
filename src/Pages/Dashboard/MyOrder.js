import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';


const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  // const navigate = useNavigate();
  const [user] = useAuthState(auth);
  console.log(user)

  useEffect(() => {

  if(user){
    fetch(`http://localhost:5000/order?user=${user.email}`)
    .then(res => res.json())
    .then(data => setOrders(data));

  }


  }, [user]);

  console.log(orders)
  return (
    <div>
      <h2 className='text-center text-2xl my-3 text-blue-500'>This is Order : {orders.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order,index) =><tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.productName}</td>
                  <td>{order.userName}</td>
                  <td>{order.user}</td>
                  <td>
                  {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-primary btn-xs'>payment</button></Link> }
                  {(order.price && order.paid) && <span className='text-success btn btn-xs'>paid</span>}
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyOrder;