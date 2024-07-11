import React, { useState } from 'react'
import './Add.css'
import assets from '../../assets/assets'
import axios from 'axios'
const Add = ({url}) => {
  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })
  const onChangeHandler=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const onSubmitHandler= async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",parseInt(data.price,10))
    formData.append("category",data.category)
    formData.append("image",image)
    const response = await axios.post(`${url}/api/food/add`,formData)
    console.log(response);
    console.log(formData)
    if(response.status === 200)
      {
        setData({
           name:"",
           description:"",
           price:"",
           category:"Salad"
        })
        setImage(false);
      }
      else
      {

      }

  }
  return (
    <div className='add'>
      <form method='POST' action='/uploads' encType='multipart/form-data' className='flex-col'>
        <div className='add-img-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt=''/>
          </label>
          <input onClick={(e)=>setImage(e.target.files[0])} type='file' id='image' name='image' hidden required/>
        </div>
        <div className='add-product-name flex-col'>
          <p>Product name</p>
          <input  type='text' name='name' placeholder='Type here' onChange={onChangeHandler} value={data.name} required/>
        </div>
         <div  className='add-product-description flex-col'>
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Write content here 👉' required></textarea>
        </div>
        <div className='add-category-price'>
            <div className='add-category-price flex-col'>
          <p>Product category</p>
          <select onClick={onChangeHandler}  name='category'>
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
        <div className='add-price flex-col'>
          <p>Product Pice</p>
          <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='$10' required/>
        </div>

        </div>
            <button onClick={onSubmitHandler} type='submit' className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default Add