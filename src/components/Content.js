import React from 'react'
import { products } from "../data/products";
import Link from 'next/link';
const generateStarRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className="text-yellow-500">
            &#9733;
          </span>
        ); // Full star
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            &#9733;
          </span>
        ); // Empty star
      }
    }
    return stars;
  };

export default function Content() {

    
  return (
    <div>
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">
        Cuvisoft Big Data Source Listing
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto mb-2"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.category}</p>
            
            {typeof product.price === "number" ? (
                <p className="text-gray-800 font-bold">${product.price}</p>
            )
            : (
                <p className="text-gray-800 font-bold">{product.price}</p>
                
            )}
        
            <div className="flex mb-2">
              {/* Display star ratings */}
              {generateStarRating(product.rating)}
            </div>
            <button className='blue-500 text-white px-4  py-2 rounded  bg-blue-600 rounded-full'><a href={product.link}>Link to Visit</a></button>

           
            
            {product.description.length <= 40 ? (
                <p className="text-gray-700 py-2">{product.description}</p>
            )
            
            : (
                <p className="text-gray-700 py-2">{product.description.substring(0, 40)}...</p>

            )}
            
          </div>
        ))}
      </div>
    </div>
    <br />
    <br />
   
    </div>
  )
}


