import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';


const Edit = (props) => {
    const { id } = useParams()
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log("susseful... kind of")
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log(err.response))
    },[])

    // useEffect(() => {
    //     axios.get(`http://localhost:8000/api/products/${id}`)
    //       .then(res => {
    //             console.log("susseful... kind of")
    //             setTitle(res.data.title)
    //             setPrice(res.data.price)
    //             setDescription(res.data.description)
    //       .catch(err=> console.log(err))
    //   }, [])


    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, { title: title, price: price, description: description })
            .then(res => history.push("/"))
            .catch(err => console.log(err))
    }

    return (
        <div >
            <h1>Update Product:</h1>
            <div className="card w-50 d-flex justify-content-center">
                <form className="form-group" onSubmit={submitHandler}>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input className="form-control m-3" value={title} type="text" name="title" id="title"
                            onChange={e => setTitle(e.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="price">Price</label>
                        <input className="form-control m-3" value={price} type="number" name="price" id="price" min='0' max="10"
                            onChange={e => setPrice(e.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="description">Description</label>
                        <input className="form-control m-3" value={description} type="text" name="description" id="description"
                            onChange={e => setDescription(e.target.value)} />
                    </p>
                    <p><button>Submit</button></p>
                </form>
            </div>
        </div>
    )
};

export default Edit;