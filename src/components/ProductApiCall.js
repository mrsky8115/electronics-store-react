import React, { useEffect, useState } from 'react'
import Products from './Products'

export default function ProductApiCall() {
    let[products, setProducts] = useState(null)
    async function fetchdata (){
        let response = await fetch ("https://fakestoreapi.in/api/products",{method:"get"})
        let responseObject = await response.json()
        console.log(responseObject.products)
        setProducts(responseObject.products)

    }
    useEffect(()=>{
        fetchdata()
    },[])

  return (
    <div className='container'>
        <Products productsValue={products}/>
    </div>
  );
}
