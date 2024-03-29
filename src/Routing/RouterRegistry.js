import HomePage from "./../Modules/HomePage";
import Login from "./../Modules/login";
import OtpVarification from "./../Modules/OtpVarification";
import CheckoutPage from "./../Modules/CheckoutPage";
import SingleProduct from "./../Modules/SingleProduct";
import OrderTracking from "./../Modules/OrderTracking";
import RegisterForm from "./../Modules/RegisterForm";
import ProductListShow from "./../Modules/ProductListShow";
import HorizantalScrollProductList from "./../Modules/HorizantalScrollProductList";
import ProductFilterAndDisplay from "./../Modules/ProductFilterAndDisplay";
import SearchBar from "./../Modules/SearchBar";
import InsertProductForm from "./../Modules/InsertProductForm";
import ProductCategoryMaster from "./../Modules/ProductCategoryMaster";
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
        <Route path='/OtpVarification/:mobileNumber' element={<OtpVarification/>}/>
        <Route path='/CheckoutPage' element={<CheckoutPage/>}/>
        <Route path='/SingleProduct' element={<SingleProduct/>}/>
        <Route path='/OrderTracking' element={<OrderTracking/>}/>
        <Route path='/RegisterForm' element={<RegisterForm/>}/>
        <Route path='/ProductListShow' element={<ProductListShow/>}/>
        <Route path='/HorizantalScrollProductList' element={<HorizantalScrollProductList/>}/>
        <Route path='/ProductFilterAndDisplay' element={<ProductFilterAndDisplay/>}/>
        <Route path='/SearchBar' element={<SearchBar/>}/>
        <Route path='/InsertProductForm' element={<InsertProductForm/>}/>
        <Route path='/ProductCategoryMaster' element={<ProductCategoryMaster/>}/>
        
        </Routes>
  </Router>
  );
}

export default RouterRegistry;
