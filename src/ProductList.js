import {useNavigate} from 'react-router-dom';
import ProductListShow from './Modules/ProductListShow';
import ProductFilterAndDisplay from './Modules/ProductFilterAndDisplay';
import ProductCategories from './Modules/ProductCategories';

function ProductList() {
  const navigate = useNavigate();

    return (
      <div>
        <div className="row justify-content-center">
         <div className='row'>
            <div className="bg-dark text-white p-1 text-center">
              <h6 className="mb-0 text-white"><i class="fa fa-id-card" aria-hidden="true"></i> 100% Secure | <span><i class="fa fa-check" aria-hidden="true"></i></span> Genuine Spares | <span><i class="fa fa-refresh" aria-hidden="true"></i></span> 30 days moneyback</h6>
            </div>
         </div>
        </div>
        <header class="section-header sticky-top" style={{backgroundColor : 'white'}}>  
            <section class="header-main">
            <div class="container">
                <div class="row gy-3 align-items-center">
                <div class="col-lg-2 col-sm-4 col-4">
                    <a class="navbar-brand">
                    Gedgetsfly
                    </a> 
                </div>
                <div class="order-lg-last col-lg-5 col-sm-8 col-8">
                    <div class="float-end">
                    <a href="#" class="btn btn-light"> 
                        <i class="fa fa-user"></i>  <span class="ms-1 d-none d-sm-inline-block">Sign in  </span> 
                    </a>
                    <a href="#" class="btn btn-light"> 
                        <i class="fa fa-heart"></i>  <span class="ms-1 d-none d-sm-inline-block">Wishlist</span>   
                    </a>
                    <a data-bs-toggle="offcanvas" href="#offcanvas_cart" class="btn btn-light"> 
                        <i class="fa fa-shopping-cart"></i> <span class="ms-1">My cart </span> 
                    </a>
                        </div>
                </div> 
                
                <div class="col-sm-12 col-lg-5 col-md-12 col-12">
                    <form action="#" class="">
                            <div class="input-group">
                            <input type="search" class="form-control" style={{width:"55%"}} placeholder="Search" />
                            <button class="btn btn-primary">
                                <i class="fa fa-search"></i> 
                            </button>
                            </div> 
                        </form>
                </div>
                
                </div> 
            </div> 
            </section> 
            <nav class="navbar navbar-light  navbar-expand-lg" style={{backgroundColor :'#ff6900'}}>
            <div class="container">
                <button class="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_main">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" style={{backgroundColor: "#ff6900", color : 'white' , hover : 'white', }} id="navbar_main">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link ps-0" href="#"> Categories </a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-plug"></i> Adapters
                    </a>
                      <ul class="dropdown-menu"  style={{backgroundColor: "#ff6900", color : 'white' , hover : 'white', }}>
                        <li> <a class="dropdown-item" href="#">DELL Laptop Adapter</a> </li>
                        <li> <a class="dropdown-item" href="#">HP Laptop Adapter</a> </li>
                        <li> <a class="dropdown-item" href="#">Lenovo Laptop Adapter</a> </li>
                        <li> <a class="dropdown-item" href="#">Apple Laptop Adapter</a> </li>
                        <li> <a class="dropdown-item" href="#">Asus Laptop Adapter</a> </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-battery-full"></i> Laptop Batteries
                    </a>
                      <ul class="dropdown-menu"  style={{backgroundColor: "#ff6900", color : 'white' , hover : 'white', }}>
                        <li> <a class="dropdown-item" href="#">DELL Laptop Batteries</a> </li>
                        <li> <a class="dropdown-item" href="#">HP Laptop Batteries</a> </li>
                        <li> <a class="dropdown-item" href="#">Lenovo Laptop Batteries</a> </li>
                        <li> <a class="dropdown-item" href="#">Apple Laptop Batteries</a> </li>
                        <li> <a class="dropdown-item" href="#">Asus Laptop Batteries</a> </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-keyboard"></i> Keyboards
                    </a>
                    <ul class="dropdown-menu"  style={{backgroundColor: "#ff6900", color : 'white' , hover : 'white', }}>
                        <li> <a class="dropdown-item" href="#">DELL Laptop Keyboards</a> </li>
                        <li> <a class="dropdown-item" href="#">HP Laptop Keyboards</a> </li>
                        <li> <a class="dropdown-item" href="#">Lenovo Laptop Keyboards</a> </li>
                        <li> <a class="dropdown-item" href="#">Apple Laptop Keyboards</a> </li>
                        <li> <a class="dropdown-item" href="#">Asus Laptop Keyboards</a> </li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-display"></i> Screens
                    </a>
                    <ul class="dropdown-menu"  style={{backgroundColor: "#ff6900", color : 'white' , hover : 'white', }}>
                        <li> <a class="dropdown-item" href="#">DELL Laptop Screens</a> </li>
                        <li> <a class="dropdown-item" href="#">HP Laptop Screens</a> </li>
                        <li> <a class="dropdown-item" href="#">Lenovo Laptop Screens</a> </li>
                        <li> <a class="dropdown-item" href="#">Apple Laptop Screens</a> </li>
                        <li> <a class="dropdown-item" href="#">Asus Laptop Screens</a> </li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-laptop"></i> Laptop parts
                    </a>
                    <ul class="dropdown-menu" style={{backgroundColor: "#ff6900", color : 'white' , hover : 'white', }}>
                        <li> <a class="dropdown-item" href="#">SSD/HDD</a> </li>
                        <li> <a class="dropdown-item" href="#">Memory</a> </li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        Laptop Case
                    </a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-bolt"></i> Lightning Deals
                    </a>
                    </li>
                </ul>
                </div> 
            </div> 
            </nav> 
        </header> 
        <div className="home-section">  
        <ProductCategories></ProductCategories>
        {/* <section class="padding-y"> */}
          <div class="container">
             {/* <div>
              <h4>top Selling products</h4>
            </div> */}


            <ProductFilterAndDisplay></ProductFilterAndDisplay>


            {/* <div>
              <h4>top Selling products</h4>
            </div>
            <ProductListShow></ProductListShow> */}
          </div> 
        {/* </section>  */}
        {/* <section class="py-5 bg-light">
            <div class="container px-4 px-lg-5 mt-5">
                <h2 class="fw-bolder mb-4">Our products</h2>
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  */}
       
      </div>
    </div> 
    );
}
export default ProductList;