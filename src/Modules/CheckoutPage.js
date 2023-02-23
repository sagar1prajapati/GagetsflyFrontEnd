import React, { useState } from "react";

const CheckoutPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("Maharashtra");
  const [country, setCountry] = useState("India");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);
  };

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  };

  const handleAddressLine1Change = (event) => {
    const value = event.target.value;
    setAddressLine1(value);
  };

  const handleAddressLine2Change = (event) => {
    const value = event.target.value;
    setAddressLine2(value);
  };

  const handleCityChange = (event) => {
    const value = event.target.value;
    setCity(value);
  };

  const handlePincodeChange = (event) => {
    const value = event.target.value;
    setPincode(value);
  };

  const handleStateChange = (event) => {
    const value = event.target.value;
    setState(value);
  };

  const handleCountryChange = (event) => {
    const value = event.target.value;
    setCountry(value);
  };

  const handleCheckoutFormSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted data:", {
      email,
      phone,
      firstName,
      lastName,
      addressLine1,
      addressLine2,
      city,
      pincode,
      state,
      country,
    });
    // Send the data to your server for processing here
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4">
        <h1 className="text-center mb-4">Checkout</h1>
        <div className="card-body">
          <form onSubmit={handleCheckoutFormSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" value={phone} onChange={handlePhoneChange} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="first-name" className="form-label">First Name</label>
                <input type="text" className="form-control" id="first-name" placeholder="Enter first name" value={firstName} onChange={handleFirstNameChange} />
                </div>
            <div className="col-md-6">
                <label htmlFor="last-name" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="last-name" placeholder="Enter last name" value={lastName} onChange={handleLastNameChange} />
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-md-6">
            <label htmlFor="address-line1" className="form-label">Address Line 1</label>
            <input type="textArea" className="form-control" id="address-line1" placeholder="Enter address line 1" value={addressLine1} onChange={handleAddressLine1Change} />
        </div>
        <div className="col-md-6">
            <label htmlFor="address-line2" className="form-label">Address Line 2</label>
            <input type="textArea" className="form-control" id="address-line2" placeholder="Enter address line 2" value={addressLine2} onChange={handleAddressLine2Change} />
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-md-6">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" id="city" placeholder="Enter city" value={city} onChange={handleCityChange} />
            </div>
<div className="col-md-6">
<label htmlFor="pincode" className="form-label">Pincode</label>
<input type="text" className="form-control" id="pincode" placeholder="Enter pincode" value={pincode} onChange={handlePincodeChange} />
</div>
</div>
<div className="row mb-3">
<div className="col-md-6">
<label htmlFor="state" className="form-label">State</label>
<select className="form-select" id="state" value={state} onChange={handleStateChange}>
<option value="Maharashtra">Maharashtra</option>
<option value="Delhi">Delhi</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Karnataka">Karnataka</option>
<option value="West Bengal">West Bengal</option>
<option value="Kerala">Kerala</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
</select>
</div>
<div className="col-md-6">
<label htmlFor="country" className="form-label">Country</label>
<select className="form-select" id="country" value={country} onChange={handleCountryChange}>
<option value="India">India</option>
<option value="USA">USA</option>
<option value="Canada">Canada</option>
<option value="UK">UK</option>
<option value="Australia">Australia</option>
</select>
</div>
</div>
<div className="d-grid">
<button className="btn btn-primary btn-lg" type="submit">Place Order</button>
</div>
</form>
</div>
</div>
</div>
);
};

export default CheckoutPage;
