import React, { useState,useEffect  } from "react";

function OrderTracking() {
    const [status, setStatus] = useState(1);
   
    const orderTrackingStyles = {
        orderTrackingBar: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '20px 0',
        },
        status: {
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '20%',
        },
        statusSpan: {
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#ccc',
          textTransform: 'uppercase',
        },
        activeStatusSpan: {
          color: '#000',
        },
        activeStatusBefore: {
          content: '',
          position: 'absolute',
          top: '-6px',
          left: 'calc(50% - 6px)',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#000',
          zIndex: '1',
        },
        activeStatusAfter: {
          content: '',
          position: 'absolute',
          top: '6px',
          left: 'calc(50% - 6px)',
          width: 'calc(100% - 50%)',
          height: '2px',
          backgroundColor: '#000',
          zIndex: '0',
        },
      };
      

    useEffect(() => {
        setStatus(3);
      }, []);

  return (
    <div className="container">
      <h1 className="my-4">Order Detail</h1>
      <div className="row">
        <div className="col-md-8">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                <tr className="order-item-row">
                    <td>1</td>
                    <td>Product 1</td>
                    <td>2</td>
                    <td>$100.00</td>
                </tr>
                <tr className="order-item-row">
                    <td>2</td>
                    <td>Product 2</td>
                    <td>1</td>
                    <td>$50.00</td>
                </tr>
                </tbody>
            </table>
            <div className="row">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-body">
                        <div className="order-tracking-bar" style={orderTrackingStyles.orderTrackingBar}>
                        <div className={`status ${status >= 1 ? 'active' : ''}`} style={orderTrackingStyles.status}>
                            <span style={status ? {...orderTrackingStyles.statusSpan, ...orderTrackingStyles.activeStatusSpan} : orderTrackingStyles.statusSpan}>Order Placed <i class="fa-solid fa-circle-right"></i></span>
                        </div>
                        <div className={`status ${status >= 2 ? 'active' : ''}`}>
                            <span style={status ? {...orderTrackingStyles.statusSpan, ...orderTrackingStyles.activeStatusSpan} : orderTrackingStyles.statusSpan}>Processing <i class="fa-solid fa-circle-right"></i></span>
                        </div>
                        <div className={`status ${status >= 3 ? 'active' : ''}`}>
                            <span style={status ? {...orderTrackingStyles.statusSpan, ...orderTrackingStyles.activeStatusSpan} : orderTrackingStyles.statusSpan}>Shipped <i class="fa-solid fa-circle-right"></i></span>
                        </div>
                        <div className={`status ${status >= 4 ? 'active' : ''}`}>
                            <span style={status ? {...orderTrackingStyles.statusSpan, ...orderTrackingStyles.activeStatusSpan} : orderTrackingStyles.statusSpan}>Out for Delivery <i class="fa-solid fa-circle-right"></i></span>
                        </div>
                        <div className={`status ${status >= 5 ? 'active' : ''}`}>
                            <span style={false ? {...orderTrackingStyles.statusSpan, ...orderTrackingStyles.activeStatusSpan} : orderTrackingStyles.statusSpan}>Delivered <i class="fa-solid fa-circle-right"></i></span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="col-md-4">
          <h5 className="mb-3">Order Total</h5>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>$250.00</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>$25.00</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>$285.00</td>
              </tr>
            </tbody>
          </table>
          <h5 className="my-4">Delivery Detail</h5>
          <p>John Doe</p>
          <p>1234 Main St</p>
          <p>Anytown, USA 12345</p>
          <p>Phone: 555-555-5555</p>
          <h5 className="my-4">Order Tracking</h5>
          <ul className="order-tracking-list">
            <li>Order placed - February 22, 2023</li>
            <li>Order shipped - February 24, 2023</li>
            <li>Expected delivery - March 1, 2023</li>
          </ul>
        </div>
      </div>
    </div>
);
};

export default OrderTracking;
