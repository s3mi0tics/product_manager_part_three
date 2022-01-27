import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory} from 'react-router-dom';

const Detail = () => {
  // grab id from params
  // with id grab info from the backend (axios)
  // get the info when loaded (useEffect)
  // info change (useState)
  const history = useHistory()
  const [Product, setProduct] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err=> console.log(err))
  }, [])

    const deleteHandler = (id)=>{
      axios.delete(`http://localhost:8000/api/products/${id}`)
          .then(res=>{
              history.push("/")
          })
          .catch(err=> console.log(err))
      }
  return (
    <div>
      {
        Product ? (
          <div>
            <h1>Product Details</h1>
            <h3>Title: {Product.title}</h3>
            <h3>Price: {Product.price}</h3>
            <h3>Description: {Product.description}</h3>
            <button className="btn btn-danger" onClick= {e => deleteHandler(id) }>Delete</button>
          </div>
        ):(
          <h1>Loading...</h1>
        )
         }
    </div>
  )
}; 

export default Detail;