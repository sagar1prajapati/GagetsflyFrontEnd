import React from 'react';

const HomePageHeader = () => {
  return (
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
                            <input type="search" class="form-control" style={{width:"55%"}} placeholder=" What is on your mind today?" />
                            <button class="btn btn-primary">
                                <i class="fa fa-search"></i> 
                            </button>
                            </div> 
                        </form>
                </div>
            </div> 
        </div> 
    </section>
  );
}

export default HomePageHeader;