import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/Form/SignIn";
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
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/signIn' element={<SignIn />} />
      </Routes>
     
      
    </div>
  );
}

export default App;
