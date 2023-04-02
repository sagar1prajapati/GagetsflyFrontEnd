import CartPage from './CartPage';

function Footer() {
    return (
       <div className="footer-section">
            <footer class="section-footer bg-white border-top">
                <div class="container">
                    <section class="footer-main padding-y">
                        <div class="row">
                            <aside class="col-12 col-sm-12 col-lg-3">
                                <article class="me-lg-4">
                                <p class="mt-3"> © 2021- 2022 Gadgetsfly. <br /> All rights reserved. </p>
                                </article>
                            </aside>
                            <aside class="col-6 col-sm-4 col-lg-2">
                                <h6 class="title">Store</h6>
                                <ul class="list-menu mb-4">
                                <li> <a href="#">About us</a></li>
                                <li> <a href="#">Find store</a></li>
                                <li> <a href="#">Categories</a></li>
                                <li> <a href="#">Blogs</a></li>
                                </ul>
                            </aside>
                            <aside class="col-6 col-sm-4 col-lg-2">
                                <h6 class="title">Information</h6>
                                <ul class="list-menu mb-4">
                                <li> <a href="#">Help center</a></li>
                                <li> <a href="#">Money refund</a></li>
                                <li> <a href="#">Shipping info</a></li>
                                <li> <a href="#">Refunds</a></li>
                                </ul>
                            </aside>
                            <aside class="col-6 col-sm-4  col-lg-2">
                                <h6 class="title">Support</h6>
                                <ul class="list-menu mb-4">
                                <li> <a href="#"> Help center </a></li>
                                <li> <a href="#"> Documents </a></li>
                                <li> <a href="#"> Account restore </a></li>
                                <li> <a href="#"> My Orders </a></li>
                                </ul>
                            </aside>
                            <aside class="col-12 col-sm-12 col-lg-3">
                                <h6 class="title">Newsletter</h6>
                                <p>Stay in touch with latest updates about our products and offers </p>
                        
                                <form class="mb-3">
                                    <div class="input-group">
                                        <input class="form-control" type="text" placeholder="Email" />
                                        <button class="btn btn-light" type="submit">
                                        Join
                                        </button>
                                    </div>
                                </form>
                            </aside>
                        </div> 
                    </section>  
                </div>
            </footer>
            <CartPage></CartPage>
       </div>

       
    );
}
export default Footer;