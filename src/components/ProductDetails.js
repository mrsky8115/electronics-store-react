import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function ProductDetails() {
  let urlParameters = useParams()
  let toNavigate =useNavigate()
  let id = urlParameters.id
  let [product, setProduct] = useState(null)
  async function fetchProductById()
  {
    let response =await fetch(`https://fakestoreapi.in/api/products/${id}`, {method:'get'})
    let responseObject =await response.json()
    console.log(responseObject.product)
    setProduct(responseObject.product)
  }
  useEffect(()=>{fetchProductById()},[])
  return (
    <div className='d-flex justify-content-center' style={{"margin-top": "50px"}}>
      {product &&
            <div className="card mb-3" style={{"max-width": "1200px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={product.image} className="img-fluid rounded-start" style={{"max-width":"100%"}} alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body text-capitalize">
                  <h6 className="card-title">{product.title}</h6>
                  <h3 className="card-text">₹{product.price}00</h3>
                  <p className="card-text"><small>{product.description}</small></p>
                  <p className="card-text"><b>Brand - </b>{product.brand}</p>
                  <p className="card-text"><b>Model - </b>{product.model}</p>
                  <p className="card-text"><b>Color - </b>{product.color}</p>
                  
                <div className='mb-3 d-flex gap-3'><button to={`/products/${product.id}`}   state={{ product: product }} className="btn btn-warning">Add to cart</button>
                <button  onClick={()=>{toNavigate("/products")}} className="btn btn-primary">All Products</button></div>
                </div>
              </div>
            </div>
          </div>}
    </div>
  )
}
