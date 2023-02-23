function Header() {
    return (
     
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
                            {/* <select class="form-select">
                                <option value="">All type</option>
                                <option value="codex">Special</option>
                                <option value="comments">Only best</option>
                                <option value="content">Latest</option>
                            </select> */}
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
      
       
    );
}
export default Header;