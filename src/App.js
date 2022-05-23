import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Form/Login";
import RequireAuth from "./Pages/Form/RequireAuth";
import SignUP from "./Pages/Form/SignUP";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Purchase/Purchase";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUP />} />
     
      </Routes>
     
      
    </div>
  );
}

export default App;
