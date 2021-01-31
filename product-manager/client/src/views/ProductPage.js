import axios from "axios"
import React, {useEffect, useState} from "react"
import {Link} from "@reach/router"

const ProductPage = ({id, allData  }) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8001/api/product/${id}`)
        .then(res => setProduct(res.data.product))
        .catch(err => console.log(err))
    }, [])

    return (
        <>
           
        {
            allData.map((data, idx) => {
                return <li><Link to={`/product/${data._id}`} key={idx} >{data.title}</Link></li>
            })
        }

            <h1>Product View Page</h1>
            <p>Product Title: {product.title}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Description: {product.desc}</p> 
        </> 
    )

}

export default ProductPage