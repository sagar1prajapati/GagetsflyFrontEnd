import React from "react";
import HorizantalScrollProductList from './HorizantalScrollProductList';
function ProductFilterAndDisplay() {
  return (
    <div className="container">
      <div className="row">
        {/* Product filter section */}
        <div className="col-md-3">
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
        </div>
        
        {/* Product display section */}
        <div className="col-md-9">
          <h4>Products</h4>
          <HorizantalScrollProductList></HorizantalScrollProductList>
        </div>
      </div>
    </div>
  );
}

export default ProductFilterAndDisplay;
