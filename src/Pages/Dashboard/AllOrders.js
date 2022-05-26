import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
          fetch('http://localhost:5000/allorder', {
            method: 'GET',
            headers: {
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
          })
         .then(res =>res.json())
          .then(data => setAllOrders(data));

      
      
        }, []);
        console.log(allOrders)
    return (
        <div>

      <h2 className='text-center text-2xl my-3 text-blue-500'>This is Order : {allOrders.length}</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Product-Name</th>
              <th>User-Name</th>
              <th>Favorite Color</th>
            
            </tr>
          </thead>
          <tbody>
            {
              allOrders.map((order,index) =><tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.productName}</td>
                  <td>{order.userName}</td>
                  <td>
                  {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-primary btn-xs'>Unpaid</button></Link> }                  
                  {(order.price && order.paid) && <span className='text-success btn btn-xs' >paid</span>}
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

export default AllOrders;