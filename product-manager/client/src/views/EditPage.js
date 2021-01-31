import axios from "axios"
import React, {useEffect, useState} from "react"

import Form from "../components/Form.component"


const EditPage = (props) => {
    const [product, setProduct] = useState({})
    // const [updatedProduct, setUpdatedProduct] = useState({})

    

    useEffect(() => {
        axios.get(`http://localhost:8001/api/product/${props.id}` )
        .then(res => setProduct(res.data.product))
        .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Form />
            <h1>Product Update Page </h1>
          
        </> 
    )

}

export default EditPage