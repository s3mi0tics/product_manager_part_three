import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ShowAll = (props) => {
    // grab Info from backend
    // display when loaded
    const [products, setProducts] = useState([]);
    // const [refresh, setRefresh] = useState(true);
    const {reloadList, refresh} = props

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [refresh])


    const deleteHandler = (e, id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                reloadList()
            })
            .catch(err=> console.log(err))
        }

    return (
        <div d-flex justify-content-center>
            <h2>All products:</h2>
            { 
                products ? (
                    <table className="table" >
                        <tbody>
                            {
                                products.map((product, i) => (
                                    <tr key={i}>
                                        <td><Link to={`/products/${product._id}`}><h5>{product.title}</h5></Link></td>
                                        <td> <Link to={`/products/${product._id}/edit`}> Edit</Link></td>
                                        <td><button className="btn btn-danger" id={product._id} onClick={(e)=>{deleteHandler(e, product._id)}} >Delete</button></td>
                                    </tr>
                                ))
                                }
                        </tbody>
                    </table>

                ) :
                    <h1>Loading...</h1>
            }
        </div>
    )
};

export default ShowAll;