import axios from 'axios';
import config from '../config';

async function RegisterService(formData) {
  try {
    debugger;
    const RegisterUserDto = { FirstName : formData.FirstName , LastName: formData.LastName, PhoneNumber: formData.PhoneNumber };
      const response = await axios.post(`${config.apiUrl}/user/RegisterUser`, RegisterUserDto);
      return response.data;
  } catch (error) {
      console.error(error);
      throw error;
  }
}

export default RegisterService;
