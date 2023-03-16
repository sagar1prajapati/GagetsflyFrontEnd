function CartPage() {
    return (
        <aside class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas_cart">
        <div class="offcanvas-header">
        <h5 class="offcanvas-title">Your cart (3) </h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
        
        <figure class="itemside mb-4">
            <div class="aside">
            <img src="assets/images/items/14.webp" class="border img-sm rounded" />
            </div>
            <figcaption class="info">
            <a href="#" class="btn btn-icon btn-light float-end"><i class="fa fa-trash"></i></a>
            <p> Leather Wallet for Men</p>
            <span class="text-muted">1 x $200.95 </span> <br />
            <strong class="price"> $400.90 </strong>
            </figcaption>
        </figure>
    
        <figure class="itemside  mb-4">
            <div class="aside">
            <img src="assets/images/items/2.webp" class="border img-sm rounded" />
            </div>
            <figcaption class="info">
            <a href="#" class="btn btn-icon btn-light float-end"><i class="fa fa-trash"></i></a>
            <p> Canon EOS 1400 Black </p>
            <span class="text-muted">2 x $169.95 </span> <br />
            <strong class="price"> $339.90 </strong>
            </figcaption>
        </figure>
    
        <figure class="itemside  mb-4">
            <div class="aside">
            <img src="assets/images/items/11.webp" class="border img-sm rounded" />
            </div>
            <figcaption class="info">
            <a href="#" class="btn btn-icon btn-light float-end"><i class="fa fa-trash"></i></a>
            <p> Winter Jacket for men and lady </p>
            <span class="text-muted">2 x $169.95 </span> <br />
            <strong class="price"> $339.90 </strong>
            </figcaption>
        </figure>
        <hr />
        
        <p class="mb-3 text-center"> Subtotal:  <strong class="text-danger">$893.00</strong>  </p>
        <div class="mb-3">
            <a href="#" class="btn w-100 btn-success"> Checkout </a>
        </div>
        <p class="mb-3 text-center"> <img src="assets/images/payments.webp" height="22" />  </p>
    
        </div> 
    </aside> 
        );
    }
    export default CartPage;