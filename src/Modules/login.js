import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(false);
  const navigate = useNavigate();

  const handleMobileNumberChange = (event) => {
    const value = event.target.value;
    const regex = /^[6-9]\d{9}$/;
    setMobileNumber(value);

    if (regex.test(value)) {
      setIsMobileNumberValid(true);
    } else {
      setIsMobileNumberValid(false);
    }
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted mobile number:", mobileNumber);
    navigate('/OtpVarification');
    // Send the mobile number to your server for verification here
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{backgroundImage : 'linear-gradient(to right, #8e2de2, #4a00e0)'}}>
      <div className="card p-4">
        <h1 className="text-center mb-4">Gedgetsfly Login</h1>
        <div className="card-body">
          <form onSubmit={handleLoginFormSubmit}>
            <div className="mb-3">
              <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
              <input type="tel" className={`form-control ${isMobileNumberValid ? "is-valid" : "is-invalid"}`} id="mobileNumber" placeholder="Enter Indian mobile number (10 digits)" value={mobileNumber} onChange={handleMobileNumberChange} required />
              {isMobileNumberValid ? (
                <div className="valid-feedback">Looks good!</div>
              ) : (
                <div className="invalid-feedback">Please enter a valid mobile</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary w-100" style={{backgroundColor: '#6600CC'}} disabled={!isMobileNumberValid}>Login</button>
            <div className="mt-3 text-center">
              <small>By clicking "Login", you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
