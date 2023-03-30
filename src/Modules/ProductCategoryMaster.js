import React, { useState,useEffect } from 'react';
import axios from 'axios';
import config from '../config';


function ProductCategoryMaster() {
  const [category, setCategory] = useState({
    categoryName: '',
    description: '',
    image: null,
  });
  const [productCategories, setProductCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);


  useEffect(() => {
    axios.get(`${config.apiUrl}/productcategories`)
      .then(response => {
        setProductCategories(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new CategoryViewModel object with the form data
    const categoryViewModel = new CategoryViewModel(category.categoryName, category.description, category.image);

    const formData = new FormData();
    formData.append("categoryName", category.categoryName);
    formData.append("description", category.description);
    formData.append('image', category.image);

    // Send a POST request to the server with the CategoryViewModel object as the request body
    axios.post(`${config.apiUrl}/ProductCategories/Add`, formData)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const handleEditCategory = (category) => {
  //  setEditingCategory(category);
  //  setShowEditForm(true);
  setCategory(category);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setCategory((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  const handleDeleteCategory = (categoryID) => {
    debugger;
    axios.delete(`${config.apiUrl}/ProductCategories/${categoryID}`)
      .then(() => {
        setProductCategories(productCategories.filter(category => category.categoryID !== categoryID));
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleEditImageChange = (e) => {
    setEditingCategory((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("categoryName", editingCategory.categoryName);
    formData.append("description", editingCategory.description);
    formData.append("image", editingCategory.image);
  
    axios
      .put(
        `${config.apiUrl}/ProductCategories/${editingCategory.categoryID}`,
        formData
      )
      .then(() => {
        // Update the productCategories state to reflect the updated category
        setProductCategories((prevState) =>
          prevState.map((category) =>
            category.categoryID === editingCategory.categoryID
              ? editingCategory
              : category
          )
        );
  
        // Clear the editingCategory and hide the edit form
        // setEditingCategory(null);
        setShowEditForm(false);
      })
      .catch((error) => console.error(error));
  };
  

  return (
    <div className="row">
    <form className="p-5" onSubmit={handleSubmit}>
      <label className="form-label">
        Category Name:
        <input type="text" name="categoryName"  className="form-control" value={category.categoryName} onChange={handleInputChange} />
      </label>
      <br />
      <label className="form-label">
        Description:
        <textarea name="description" className="form-control" value={category.description} onChange={handleInputChange} />
      </label>
      <br />
      <label className="form-label">
        Image:
        <input type="file" className="form-control" name="image" onChange={handleImageChange} />
      </label>
      <br />
      <br />
      <br />
      <button type="submit" className="btn btn-primary">Add Category</button>
    </form>

    {showEditForm && (
  <form className=" col-md-3 p-5" onSubmit={handleUpdate}>
    <label className="form-label">
      Category Name:
      <input
        type="text"
        name="categoryName"
        className="form-control"
        value={editingCategory.categoryName}
        onChange={handleEditInputChange}
      />
    </label>
    <br />
    <label className="form-label">
      Description:
      <textarea
        name="description"
        className="form-control"
        value={editingCategory.description}
        onChange={handleEditInputChange}
      />
    </label>
    <br />
    <label className="form-label">
      Image:
      <input
        type="file"
        className="form-control"
        name="image"
        onChange={handleEditImageChange}
      />
    </label>
    <br />
    <br />
    <br />
    <button type="submit" className="btn btn-primary">
      Update Category
    </button>
  </form>
)}
<div className='row table-responsive'>
<table className='table table-striped table-bordered'>
      <thead>
        <tr>
          <th class="col" hidden>Category ID</th>
          <th class="col">Category Name</th>
          <th class="col" >Description</th>
          <th class="col">Image</th>
          <th class="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {productCategories.map(category => (
          <tr key={category.categoryID}>
            <td hidden>{category.categoryID}</td>
            <td>{category.categoryName}</td>
            <td>{category.description}</td>
            <td><img src={`${config.apiUrl}/productcategories/images/${category.imagePath}`} style={{ height: '100px', maxWidth: '100px' }} alt="My Image" /></td>
            <td>
              <button className='btn btn-sm btn-danger' onClick={() => handleDeleteCategory(category.categoryID)}><span><i class="fa fa-trash"></i></span></button>&nbsp;
              <button className='btn btn-sm btn-success' onClick={() => handleEditCategory(category)}><span><i class="fa fa-pencil"></i></span></button>&nbsp;
            </td>
          </tr>
        ))}
      </tbody>
    </table>
</div>

    </div>

  );
}

class CategoryViewModel {
  constructor(categoryName, description, image) {
    this.categoryName = categoryName;
    this.description = description;
    this.image = image;
  }
}

export default ProductCategoryMaster;
