import {useNavigate} from 'react-router-dom';
import ProductListShow from './Modules/ProductListShow';
import ProductFilterAndDisplay from './Modules/ProductFilterAndDisplay';
import ProductCategories from './Modules/ProductCategories';
import SecureSpares from './Components/SecureSpares';
import HomePageHeader from './Components/HomePageHeader';
import DisplayProductCategories from './Components/DisplayProductCategories';
import Footer from './Components/Footer';

function ProductList() {
  const navigate = useNavigate();

    return (
        <div class="container-fluid p-0">
            <SecureSpares></SecureSpares>
            <header class="section-header sticky-top" style={{backgroundColor : 'white'}}>  
                <HomePageHeader></HomePageHeader>
                <DisplayProductCategories></DisplayProductCategories>
            </header> 
            <div className="home-section">  
                <ProductFilterAndDisplay></ProductFilterAndDisplay>
            </div>
            <Footer></Footer>
        </div> 
    );
}
export default ProductList;