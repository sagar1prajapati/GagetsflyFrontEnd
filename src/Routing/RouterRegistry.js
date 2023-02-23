import HomePage from "./../Modules/HomePage";
import Login from "./../Modules/login";
import OtpVarification from "./../Modules/OtpVarification";
import CheckoutPage from "./../Modules/CheckoutPage";
import SingleProduct from "./../Modules/SingleProduct";
import PrivateRoutes from "./PrivateRoutes";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function RouterRegistry() {
  return (
    <Router>
        <Routes>
        <Route element={<PrivateRoutes/>}>
            <Route path='/Login' element={<Login/>}/>
        </Route>
        <Route path='/' element={<Login/>}/>
        <Route path='/HomePage' element={<HomePage/>}/>
        <Route path='/OtpVarification' element={<OtpVarification/>}/>
        <Route path='/CheckoutPage' element={<CheckoutPage/>}/>
        <Route path='/SingleProduct' element={<SingleProduct/>}/>
        </Routes>
  </Router>
  );
}

export default RouterRegistry;
