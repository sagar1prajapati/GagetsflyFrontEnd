import React, { useState } from "react";
import config from '../config';
import axios from 'axios';
import {ImageUpload} from '../API/ImageUpload';

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
   // const response = await axios.post(`${config.apiUrl}/ImageUpload/upload`, formData);
    const response = await ImageUpload(formData);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="file" name="image" onChange={handleImageChange} />
      </div>
      <div>
        <button type="submit">Upload Image</button>
      </div>
    </form>
  );
}

export default ImageUploader;



// import { useState } from 'react';
// import axios from 'axios';

// function AddCategory() {
//   const [categoryName, setCategoryName] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState('');

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImage(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleCategorySubmit = async (e) => {
//     e.preventDefault();
//     const categoryData = {
//       categoryName: categoryName,
//       description: description,
//       image: image,
//     };
//     try {
//       await axios.post('/api/categories', categoryData);
//       // Show success message or redirect to category list page
//     } catch (error) {
//       // Handle error and show error message
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Add Category</h2>
//       <form onSubmit={handleCategorySubmit}>
//         <div className="mb-3">
//           <label htmlFor="categoryName" className="form-label">
//             Category Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="categoryName"
//             value={categoryName}
//             onChange={(e) => setCategoryName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="description" className="form-label">
//             Description
//           </label>
//           <textarea
//             className="form-control"
//             id="description"
//             rows="3"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="image" className="form-label">
//             Image Upload
//           </label>
//           <input
//             type="file"
//             className="form-control"
//             id="image"
//             accept="image/*"
//             onChange={handleImageUpload}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Add Category
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddCategory;
