import axios from 'axios';
import config from '../config';

async function ImageUpload(formData) {
  try {
    // const data = { formData : formData };
      const response = await axios.post(`${config.apiUrl}/ImageUpload/upload`, formData);
      return response.data;
  } catch (error) {
      console.error(error);
      throw error;
  }
}


export { ImageUpload };

