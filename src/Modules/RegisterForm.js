import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import RegisterService from '../API/RegisterService';
// import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    PhoneNumber: ''
  });
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errors = validateInputs();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await RegisterService(formData);
        alert(response);
        if (response === 'User registered successfully.') {
          navigate('/Login');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setValidationErrors(errors);
    }
  };

  const validateInputs = () => {
    const errors = {};
    if (!formData.FirstName) {
      errors.FirstName = 'First name is required';
    }
    if (!formData.LastName) {
      errors.LastName = 'Last name is required';
    }
    if (!formData.PhoneNumber) {
      errors.PhoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.PhoneNumber)) {
      errors.PhoneNumber = 'Invalid phone number';
    }
    return errors;
  };


  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{backgroundImage : 'linear-gradient(to right, #8e2de2, #4a00e0)'}}>
      <div className="card">
        <div className="card-header text-center">
          <h1>Register</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="FirstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="FirstName"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
                required
              />
              {validationErrors.FirstName && (
                <div className="invalid-feedback">{validationErrors.FirstName}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="LastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="LastName"
                name="LastName"
                value={formData.LastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
                required
              />
              {validationErrors.LastName && (
                <div className="invalid-feedback">{validationErrors.LastName}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="PhoneNumber">Mobile Number</label>
              <input
                type="tel"
                className={`form-control ${validationErrors.PhoneNumber ? 'is-invalid' : ''}`}
                id="PhoneNumber"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={handleInputChange}
                placeholder="Enter Phone Number"
                required
              />
              {validationErrors.PhoneNumber && (
                <div className="invalid-feedback">{validationErrors.PhoneNumber}</div>
              )}
            </div>
            <br/>
            <div class="d-grid gap-2">
              <button class="btn btn-primary" className="btn btn-primary w-100" style={{backgroundColor: '#6600CC'}} type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
</div>

    
  );
};

export default RegisterForm;
