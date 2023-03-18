import axios from 'axios';
import config from '../config';

async function loginUser(userName, password1) {
  try {
    const data = { userName : userName , password: password1 };
      const response = await axios.post(`${config.apiUrl}/user/validateuser`, data);
      return response.data;
  } catch (error) {
      console.error(error);
      throw error;
  }
}

async function UpdateCustomerOTP(PhoneNumber) {
  try {
    const UpdateCustomerOTPDto = { PhoneNumber : PhoneNumber  };
      const response = await axios.post(`${config.apiUrl}/user/UpdateCustomerOTP`, UpdateCustomerOTPDto);
      debugger;
      return response.data;
  } catch (error) {
      console.error(error);
      throw error;
  }
}

async function CheckOTP(PhoneNumber , OTP ) {
  try {
    debugger;
    const VerifyOtpDto = { PhoneNumber : PhoneNumber , OTP: OTP };
      const response = await axios.post(`${config.apiUrl}/user/CheckOTP`, VerifyOtpDto);
      debugger;
      return response.data;
  } catch (error) {
      console.error(error);
      throw error;
  }
}

export { loginUser, UpdateCustomerOTP, CheckOTP };

