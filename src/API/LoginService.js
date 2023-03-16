import axios from 'axios';
import config from '../config';

async function loginUser(userName, password1) {
  try {
    const data = { userName : userName , password: password1 };
      const response = await axios.post('https://localhost:44305/api/user/validateuser', data);
      return response.data;
  } catch (error) {
      console.error(error);
      throw error;
  }
}

export default loginUser;
