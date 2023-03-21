import {useNavigate} from 'react-router-dom';
import ProductListShow from './Modules/ProductListShow';

function ProductList() {
  const navigate = useNavigate();

    return (
      <div>
        <header class="section-header sticky-top" style={{backgroundColor : 'white'}}>  
            <section class="header-main">
            <div class="container">
                <div class="row gy-3 align-items-center">
                <div class="col-lg-2 col-sm-4 col-4">
                    <a href="http://therichpost.com" class="navbar-brand">
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
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="#">Submenu one </a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu two</a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu three</a> </li>
                    </ul>
                    </li>


                    <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-battery-full"></i> Laptop Batteries
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="#">Submenu one </a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu two</a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu three</a> </li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-keyboard"></i> Keyboards
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="#">Submenu one </a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu two</a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu three</a> </li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-display"></i> Screens
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="#">Submenu one </a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu two</a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu three</a> </li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-laptop"></i> Laptop parts
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="#">Submenu one </a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu two</a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu three</a> </li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        Laptop Case
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="#">Submenu one </a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu two</a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu three</a> </li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-bolt"></i> Lightning Deals
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="#">Submenu one </a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu two</a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu three</a> </li>
                    </ul>
                    </li>
                </ul>
                </div> 
            </div> 
            </nav> 
        </header> 
        <div className="home-section">  
          <main>
            <div class="container py-4">
              <div className="row">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="1000">
                <img src="https://via.placeholder.com/1263x383.png?text=Bootstrap+Carousel+Image" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="https://via.placeholder.com/1263x383.png?text=Bootstrap+Carousel+Image" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="https://via.placeholder.com/1263x383.png?text=Bootstrap+Carousel+Image" class="d-block w-100" alt="..."/>
              </div>
            </div>
          </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
              <div className="row">
                  <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="text-center">
                    <i class="fa-solid fa-battery-three-quarters fa-5x"></i>
                      {/* <img src="https://via.placeholder.com/150" alt="Image 1" className="img-fluid mb-3" /> */}
                      <h6>Laptop Battery</h6>
                      <p>Empower your laptop with our premium quality batteries for long lasting usage</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <i class="fa-solid fa-plug-circle-bolt fa-5x"></i>
                      <h6 >Laptop Charger</h6>
                      <p>Avoid risk of using local charger. Use our premium quality charger perfect for your laptop</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                          <i class="fa-regular fa-keyboard fa-5x"></i>
                      <h6>Laptop keyboard</h6>
                      <p>Get going, do not stop your work, replace your faulty keyboard with our premium quality laptop keyboards.</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <i class="fa-solid fa-display fa-5x"></i>
                      {/* <img src="https://via.placeholder.com/150" alt="Image 4" className="img-fluid mb-3" /> */}
                      <h6>Laptop Screen</h6>
                      <p>Revive your memories, replace your broken laptop screen with our A+ grade screens.</p>
                    </div>
                  </div>
              </div>
              <br/>
          <br/>
              <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5">
                  <h1 class="display-5 fw-bold">Custom jumbotron</h1>
                  <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                  <button class="btn btn-primary btn-lg" type="button">Example button</button>
                </div>
              </div>


              <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div class="col">
                  <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-body">
                    <div className="text-center">
                      <img src="https://via.placeholder.com/150" alt="Image 1" className="img-fluid mb-3" />
                      <p>Buy with confidence you get 10 days free returns and 30 days moneyback guarantee in our products </p>
                    </div>
                    <button type="button" class="w-100 btn btn-lg btn-outline-success">Easy Returns</button>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-body">
                    <div className="text-center">
                      <img src="https://via.placeholder.com/150" alt="Image 1" className="img-fluid mb-3" />
                      <p>Buying on lapgadgets.in is very simple and safe, you are protected by Razorpay - India's leading payment gateway </p>
                    </div>
                    <button type="button" class="w-100 btn btn-lg btn-outline-success">Secured Transaction</button>
                    </div>
                  </div>
                </div>
                <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-body">
                    <div className="text-center">
                      <img src="https://via.placeholder.com/150" alt="Image 1" className="img-fluid mb-3" />
                      <p>Consult our experts, avoid the risk of laptop failure and other damage du to wrong part purchase.  </p>
                    </div>
                    <button type="button" class="w-100 btn btn-lg btn-outline-success">Expert's Advice</button>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </main>
        <section class="padding-y">
          <div class="container">
            <div>
              <h4>top Selling products</h4>
            </div>
            <ProductListShow></ProductListShow>
          </div> 
        </section>                    
      </div>
    </div> 
    );
}
export default ProductList;