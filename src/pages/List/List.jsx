import React from 'react'
import './List.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/food/list`);
      if (response.status === 200) {
        setList(response.data.data);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Error fetching data");
    }
  }
  const removeFood=async(foodId)=>{
     const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
     await fetchList();
     if(response.data.success)
      {
        toast.success(response.data.message)
      }
      else
      {
        toast.error("Error");
      }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Product Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={`${url}/images/${item.image}`} alt='' />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>&#8377;{item.price}</p>
            <button onClick={()=>removeFood(item._id)} className='action-btn'>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
