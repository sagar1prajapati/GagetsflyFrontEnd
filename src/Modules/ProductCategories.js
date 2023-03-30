import React from 'react';

function ProductCategories() {
  return (
    <div className="container mt-5">
    <h5>Product Categories</h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="box d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#e5e5e5' }}>
            <span className="fa fa-laptop"></span>
            <h6 style={{ marginTop: '10px' }}>Adapters</h6>
          </div>
        </div>
        <div className="col">
          <div className="box d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#e5e5e5' }}>
            <span className="fa fa-battery-full"></span>
            <h6 style={{ marginTop: '10px' }}>Laptop Batteries</h6>
          </div>
        </div>
        <div className="col">
          <div className="box d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#e5e5e5' }}>
            <span className="fa fa-keyboard"></span>
            <h6 style={{ marginTop: '10px' }}>Keyboards</h6>
          </div>
        </div>
        <div className="col">
          <div className="box d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#e5e5e5' }}>
            <span className="fa fa-desktop"></span>
            <h6 style={{ marginTop: '10px' }}>Screens</h6>
          </div>
        </div>
        <div className="col">
          <div className="box d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#e5e5e5' }}>
            <span className="fa fa-cogs"></span>
            <h6 style={{ marginTop: '10px' }}>Laptop parts</h6>
          </div>
        </div>
        <div className="col">
          <div className="box d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#e5e5e5' }}>
            <span className="fa fa-laptop"></span>
            <h6 style={{ marginTop: '10px' }}>Laptop Case</h6>
          </div>
        </div>
        <div className="col">
          <div className="box d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#e5e5e5' }}>
            <span className="fa fa-bolt"></span>
            <h6 style={{ marginTop: '10px' }}>Lightning Deals</h6>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default ProductCategories;
