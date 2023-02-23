import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const OtpVarification = () => {
  const [otp, setOtp] = useState("");
  const [isOtpValid, setIsOtpValid] = useState(false);
  const navigate = useNavigate();

  const handleOtpChange = (event) => {
    const value = event.target.value;
    const regex = /^\d{6}$/;
    setOtp(value);

    if (regex.test(value)) {
      setIsOtpValid(true);
    } else {
      setIsOtpValid(false);
    }
  };

  const handleVerifyOtpFormSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted OTP:", otp);
    navigate('/HomePage');
    // Send the OTP to your server for verification here
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{backgroundImage : 'linear-gradient(to right, #8e2de2, #4a00e0)'}}>
      <div className="card p-4">
        <h1 className="text-center mb-4">Verify OTP</h1>
        <p className="text-center">Please enter the OTP sent to your mobile number ending in <strong>1234</strong></p>
        <div className="card-body">
          <form onSubmit={handleVerifyOtpFormSubmit}>
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">OTP</label>
              <input type="text" className={`form-control ${isOtpValid ? "is-valid" : "is-invalid"}`} id="otp" placeholder="Enter OTP" value={otp} onChange={handleOtpChange} required />
              {isOtpValid ? (
                <div className="valid-feedback">Looks good!</div>
              ) : (
                <div className="invalid-feedback">Please enter a valid OTP (6 digits)</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={!isOtpValid}>Verify OTP</button>
            <div className="mt-3 text-center">
              <small>Didn't receive the OTP? <a href="#">Resend OTP</a></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpVarification;