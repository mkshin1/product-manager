import React from "react"
import {Link} from "@reach/router"

import Form from "./EditPage"


const ViewAllProducts = ({allData}) => {
    return (
        <>
            <Form />
            <h1>All Products:</h1>
        
        {
            allData.map((data, idx) => {
                return <li><Link to={`/product/${data._id}`} key={idx} >{data.title}</Link></li>
            })
        }

        </>
    )
}

export default ViewAllProducts