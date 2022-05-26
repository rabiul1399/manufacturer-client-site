import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import CancelOrder from './CancelOrder';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'

const MyOrder = () => {
  // const [orders, setOrders] = useState([]);
  const [cancelOrder,setCanceling] = useState(null)
  const [user] = useAuthState(auth);

  const {data:orders,isLoading,refetch } = useQuery('orders', () => fetch(`http://localhost:5000/order?user=${user.email}`).then(res => res.json()))

  
  if (isLoading) {
    return <Loading></Loading>
}

  // useEffect(() => {
  // if(user){
  //   fetch(`http://localhost:5000/order?user=${user.email}`)
  //   .then(res =>res.json())
  //   .then(data => setOrders(data));

  // }
  // }, [user]);



  return (
    <div>
      <h2 className='text-center text-2xl my-3 text-blue-500'>This is Order : {orders.length}</h2>

      <div className="overflow-x-auto">
        <table className="table w-full text-center">

          <thead>
            <tr>
              <th></th>
              <th>Product-Name</th>
              <th>Order-Quantity</th>
              <th>Total-Price</th>
              <th>Payment</th>
              <th>Order-cancel</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order,index) =><tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.productName}</td>
                  <th>{order.orderQuantity}</th>
                  <td>{order.price * order.orderQuantity}</td>                
                  <td>
                  {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-primary btn-xs'>payment</button></Link> }                  
                  {(order.price && order.paid) && <span className='text-success btn btn-xs' >paid</span>}
                  </td>                  
                  <td>
                    {
                     !order.paid ?
                     <label for="my-modal-6"  onClick={()=>setCanceling(order)}   className='btn modal-button btn-warning btn-xs '>cancel</label>
                     :
                     <label for="my-modal-6"  onClick={()=>setCanceling(order)}   className='btn modal-button btn-warning btn-xs btn-disabled'>cancel</label>
                    }
                  
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <CancelOrder cancelOrder={cancelOrder} refetch={refetch} setCanceling={setCanceling}></CancelOrder>

    </div>
  );
};

export default MyOrder;