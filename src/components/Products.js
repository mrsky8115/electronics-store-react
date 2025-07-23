import React from 'react'
import { Link } from 'react-router-dom'

export default function Products(props) {
    let products = props.productsValue
  return (
    <div className='row'>
        {products && products.map(product => {
            return (
            <div className='col-3 gy-3' key={product.id}>
            <div className="card" style={{"width": 17+"rem"}}>
            <img src={product.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.title.slice(0,20)}</h5>
                <h4 className="card-text">₹{product.price}00</h4>
                <p className="card-text">{product.description.slice(0,75)}....</p>
                <Link to={`/products/${product.id}`}   state={{ product: product }} className="btn btn-primary">View More</Link>
            </div>
        </div>
        </div>
            )})}
    </div>

  )
}
