import React, { useState } from 'react';
import axios from 'axios'

const Form = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const {reloadList} = props

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products/new`, { title, price, description })
            .then(res => {
                setTitle("")
                setPrice(0)
                setDescription("")
                reloadList()
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={submitHandler}>
                <div className="d-flex justify-content-evenly align-items-center">
                    <p>
                        <label htmlFor="title">Title</label>
                        <input className="form-control m-3" value={title} type="text" name="title" id="title"
                            onChange={e => setTitle(e.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="price">Price</label>
                        <input className="form-control m-3" value={price} type="text" name="price" id="price"
                            onChange={e => setPrice(e.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="description">Description</label>
                        <input className="form-control m-3" value={description} type="textarea" name="description" id="description" min='0' max="10"
                            onChange={e => setDescription(e.target.value)} />
                    </p>
                    <p><button className="btn btn-success">Create</button></p>
                </div>
            </form>
            <hr />
        </div>
    )
};

export default Form;

    // form (input with onChange)
    //submitHandler (onSubmit) -state
    //send post info to backend -axios
    //if successful:redirect
    //if failed: validation