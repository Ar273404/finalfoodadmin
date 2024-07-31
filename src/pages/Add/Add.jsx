import React, { useState } from "react";
import axios from "axios";
import "./Add.css"; // Assuming this contains your custom CSS

const Add = ({ url }) => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", parseFloat(data.price));
      formData.append("category", data.category);
      formData.append("image", image);

      const response = await axios.post(
        `{url}/food/add`,
        formData
      );
      console.log(response.data); // Assuming the response contains useful data

      if (response.status === 200) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(null);
        setImagePreview(null);
        alert("Product added successfully!");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again later.");
    }
  };

  return (
    <div className="add">
      <form
        onSubmit={onSubmitHandler}
        encType="multipart/form-data"
        className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={imagePreview}
              alt=""
              className="w-20 h-auto mb-5"
            />
          </label>
          <input onChange={handleImage} type="file" id="image" required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            onChange={onChangeHandler}
            value={data.name}
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here 👉"
            required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select
              name="category"
              onChange={onChangeHandler}
              value={data.category}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$10"
              required
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
