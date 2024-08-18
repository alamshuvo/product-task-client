import React from 'react';

const Card = ({ product }) => {
    const localDate = new Date(product.createdAt).toLocaleString();
  
    return (
      <div className="max-w-lg p-4 rounded-lg  border-2  border-blue-800 shadow-md ">
        <div className="flex text-blue-800 mb-1 justify-between  border-bottom">
          <p>{product.category}</p>
          <p>{product.brandName}</p>
        </div>
        <div className="space-y-1 ">
          <div className="space-y-2 border-2 p-2 rounded-lg">
            <img
              src={product.productImage}
              alt={product.productName}
              className="block object-cover object-center w-full rounded-md h-72 "
            />
            <div className="flex items-center justify-between text-sm ">
              <p>Price: ${product.price}</p>
             
            </div>
          </div>
          <div className="border-2 p-2 ">
            <h3 className="text-xl font-semibold dark:text-violet-600">
              {product.productName}
            </h3>
            <p className="leading-snug dark:text-gray-600">
              {product.description}
            </p>
            <p className="text-gray-800">
              {" "}
              <span className="font-medium">Creation Date: </span> {localDate}
            </p>
          </div>
        </div>
      </div>
    );
  };
  

export default Card;