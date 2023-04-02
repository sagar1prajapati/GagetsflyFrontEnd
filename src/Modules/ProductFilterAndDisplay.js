import React from "react";
import HorizantalScrollProductList from './HorizantalScrollProductList';
function ProductFilterAndDisplay() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-6">
          <h6 className="pt-3">Products Categories</h6>
          <HorizantalScrollProductList></HorizantalScrollProductList>
        </div>
      </div>
    </div>
  );
}

export default ProductFilterAndDisplay;
