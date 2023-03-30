import { useState } from "react";

const InsertProductForm = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [discount, setDiscount] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [sellQuantity, setSellQuantity] = useState("");
  const [openingBalance, setOpeningBalance] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubcategoryId] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: implement logic to submit form data to database
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 col-md-3">
      <h2 className="mb-3">Insert Product</h2>
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">
          Product Name:
        </label>
        <input
          id="productName"
          type="text"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price:
        </label>
        <input
          id="price"
          type="number"
          min="0"
          step="0.01"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="imagePath" className="form-label">
          Image Path:
        </label>
        <input
          id="imagePath"
          type="text"
          value={imagePath}
          onChange={(event) => setImagePath(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="discount" className="form-label">
          Discount:
        </label>
        <input
          id="discount"
          type="number"
          min="0"
          max="100"
          step="0.01"
          value={discount}
          onChange={(event) => setDiscount(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="stockQuantity" className="form-label">
          Stock Quantity:
        </label>
        <input
          id="stockQuantity"
          type="number"
          min="0"
          value={stockQuantity}
          onChange={(event) => setStockQuantity(event.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="sellQuantity" className="form-label">
          Sell Quantity:
        </label>
        <input
          id="sellQuantity"
          type="number"
          min="0"
          value={sellQuantity}
          onChange={(event) => sellQuantity(event.target.value)}
className="form-control"
required
/>
</div>
<div className="mb-3">
<label htmlFor="openingBalance" className="form-label">
Opening Balance:
</label>
<input
id="openingBalance"
type="number"
min="0"
value={openingBalance}
onChange={(event) => setOpeningBalance(event.target.value)}
className="form-control"
required
/>
</div>
<div className="mb-3">
<label htmlFor="categoryId" className="form-label">
Category:
</label>
<select
id="categoryId"
value={categoryId}
onChange={(event) => setCategoryId(event.target.value)}
className="form-select"
required
>
<option value="">Select a category</option>
{/* TODO: dynamically generate options from database /}
<option value="1">Category 1</option>
<option value="2">Category 2</option>
<option value="3">Category 3</option>
</select>
</div>
<div className="mb-3">
<label htmlFor="subcategoryId" className="form-label">
Subcategory:
</label>
<select
id="subcategoryId"
value={subcategoryId}
onChange={(event) => setSubcategoryId(event.target.value)}
className="form-select"
required
>
<option value="">Select a subcategory</option>
{/ TODO: dynamically generate options based on selected category */}
<option value="1">Subcategory 1</option>
<option value="2">Subcategory 2</option>
<option value="3">Subcategory 3</option>
</select>
</div>
<div className="form-check mb-3">
<input
id="isActive"
type="checkbox"
checked={isActive}
onChange={(event) => setIsActive(event.target.checked)}
className="form-check-input"
/>
<label htmlFor="isActive" className="form-check-label">
Is Active
</label>
</div>
<button type="submit" className="btn btn-primary">
Insert
</button>
</form>
);
};

export default InsertProductForm;
