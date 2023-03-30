import React from "react";
import HorizantalScrollProductList from './HorizantalScrollProductList';
function ProductFilterAndDisplay() {
  return (
    <div className="container">
      <div className="row">
        {/* Product filter section */}
        {/* <div className="col-md-3">
          <h4>Filters</h4>
          <hr />
          <ul className="list-group">
            <li className="list-group-item">Category 1</li>
            <li className="list-group-item">Category 2</li>
            <li className="list-group-item">Category 3</li>
            <li className="list-group-item">Category 4</li>
          </ul>
          <hr />
          <h5>Price Range</h5>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="price1" />
            <label className="form-check-label" htmlFor="price1">
              $0 - $50
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="price2" />
            <label className="form-check-label" htmlFor="price2">
              $50 - $100
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="price3" />
            <label className="form-check-label" htmlFor="price3">
              $100 - $200
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="price4" />
            <label className="form-check-label" htmlFor="price4">
              $200+
            </label>
          </div>
        </div> */}
        
        {/* Product display section */}
        <div className="col-md-12 col-sm-6">
          <h4>Products</h4>
          <HorizantalScrollProductList></HorizantalScrollProductList>
        </div>


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

export default ProductFilterAndDisplay;
