import './App.css';
import {Router} from "@reach/router"

import React, {useState, useEffect} from "react"
import Form from "./components/Form.component"
import ProductPage from "./views/ProductPage"
import EditPage from "./views/EditPage"
import ViewAllProducts from "./views/ViewAllProducts"
import axios from "axios"

function App() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [desc, setDesc] = useState("")
  const [data, setData] = useState([])
  const [allData, setAllData] = useState([])

  const titleHandler = (e) => {
    setTitle(e.target.value)
       
    }
  const priceHandler = (e) => {
    setPrice(e.target.value)

  }
  const descHandler = (e) => {
    setDesc(e.target.value)

  }
  // const submitFormHandler = (e) => {
  //   e.preventDefault()
      
  // axios.post("http://localhost:8001/api/create/", {
  //   title: title,
  //   price: price,
  //   desc: desc
  //   })
  //   .then(res => setData([...data,res.data]))
  //   .catch(err => console.log(err))

  //   setTitle("")
  //   setPrice("")
  //   setDesc("")
  // }

  useEffect(() => {
    axios.get("http://localhost:8001/api/products")
    .then(res => {
      console.log(res.data.product)
    })
    .catch(err => console.log(err))
}, [])


  return (
    <div className="App">
      {/* <Form 
        title={title} 
        setTitle={setTitle} 
        price={price}
        setPrice={setPrice}
        desc={desc}
        setDesc={setDesc}
        data={data}
        setData={setData}
        allData={allData}
        setAllData={setAllData}
      
        /> */}
      <Router>

        <ProductPage path="/product/:id" allData={allData}></ProductPage>
        <EditPage path="/update/:id" allData={allData}></EditPage>
        <ViewAllProducts path="/" allData={allData}>
          <Form 
            title={title} 
            setTitle={setTitle} 
            price={price}
            setPrice={setPrice}
            desc={desc}
            setDesc={setDesc}
            data={data}
            setData={setData}
            allData={allData}
            setAllData={setAllData}
            priceHandler={priceHandler}
            titleHandler={titleHandler}
            descHandler={descHandler}
            // submitFormHandler={submitFormHandler}
      
            />
        </ViewAllProducts>
      </Router>
    </div>
  );
}

export default App;
