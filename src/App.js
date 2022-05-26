import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyReview from "./Pages/Dashboard/MyReview";
import MyOrder from "./Pages/Dashboard/MyOrder";
import Login from "./Pages/Form/Login";
import RequireAuth from "./Pages/Form/RequireAuth";
import SignUP from "./Pages/Form/SignUP";
import Home from "./Pages/Home/Home";
import ProductSumary from "./Pages/Home/ProductSumary";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllOrders from "./Pages/Dashboard/AllOrders";
import AllUsers from "./Pages/Dashboard/AllUsers";
import Payment from "./Pages/Dashboard/Payment";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUP />} />
     
        <Route path='/summary/:id' element={
          <RequireAuth>
            <ProductSumary />
          </RequireAuth>
        } />
      <Route path='/dashboard' element={ 
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      }>
        <Route index element={<MyProfile></MyProfile>} ></Route>
        <Route path='order' element={<MyOrder></MyOrder>} ></Route>
        <Route path='review' element={<MyReview></MyReview>} ></Route>
        <Route path='payment/:id' element={<Payment></Payment>} ></Route>
        <Route path='allOrder' element={<AllOrders></AllOrders>} ></Route>
        <Route path='allUsers' element={<AllUsers></AllUsers>} ></Route>
      

      </Route>
     
      </Routes>
     
      <ToastContainer />
    </div>
  );
}

export default App;
