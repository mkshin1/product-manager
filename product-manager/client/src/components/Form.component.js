import React, { useState, useEffect } from "react"
import Router, {Link} from "@reach/router"
// import { set } from "mongoose"
import axios from "axios"

const Form = ({title,price,desc, priceHandler, titleHandler, descHandler, setData, data, setTitle, setPrice, setDesc, setAllData}) => {
    // const [title, setTitle] = useState("")
    // const [price, setPrice] = useState("")
    // const [desc, setDesc] = useState("")
    // const [data, setData] = useState([])
    // const [allData, setAllData] = useState([])

useEffect(() => {
    axios.get("http://localhost:8001/api/products")
    .then(res => {
        setAllData(res.data.product)
    })
    .catch(err => console.log(err))
}, [])

    // const titleHandler = (e) => {
    //     setTitle(e.target.value)
       

    // }
    // const priceHandler = (e) => {
    //     setPrice(e.target.value)

    // }
    // const descHandler = (e) => {
    //     setDesc(e.target.value)

    // }
const submitFormHandler = (e) => {
    e.preventDefault()
    
    axios.post("http://localhost:8001/api/create/", {
        title: title,
        price: price,
        desc: desc
    })
    .then(res => setData([...data,res.data]))
    .catch(err => console.log(err))

    setTitle("")
    setPrice("")
    setDesc("")
}
    console.log(data)


    return(
        <>
        <h1>Product Manager</h1>

        <form className="home-page-form">
            <div className="form-input">
            <label >Title</label> 
            <input className="title" onChange={titleHandler} value={title}></input>
            </div>

            <div className="form-input">
            <label >Price</label> 
            <input type="number"className="price" onChange={priceHandler} value={price}></input>
            </div>

            <div className="form-input">
            <label>Description</label> 
            <input onChange={descHandler} value={desc}></input>
            </div>

            <button onClick={submitFormHandler}>Create</button>
        </form>

        <div className="line"></div>

        <div className="bottom-content">
            {/* <h1>All Products:</h1> */}
        
             {/* {
                 allData.map((data, idx) => {
                     return <li><Link to={`/product/${data._id}`} key={idx} >{data.title}</Link></li>
                 })
             } */}



        </div>

        </>
    )
}

export default Form