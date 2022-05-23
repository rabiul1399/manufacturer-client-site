import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Form/Login";
import RequireAuth from "./Pages/Form/RequireAuth";
import SignUP from "./Pages/Form/SignUP";
import Home from "./Pages/Home/Home";
import ProductSumary from "./Pages/Home/ProductSumary";
import Navbar from "./Pages/Shared/Navbar";

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
      <Route path='dashboard' element={ 
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      }>

      </Route>
   
      </Routes>
     
      
    </div>
  );
}

export default App;
