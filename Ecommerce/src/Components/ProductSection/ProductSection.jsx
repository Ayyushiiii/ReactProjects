import React from 'react'
import { storeData } from '../../assets/data/DummyData';
import ProductSectionItem from './ProductSectionItem';
const ProductSection = () => {
  return (
    <div>
        <div className='bg-black p-2 w-[50%] mx-auto rounded-md'>
            <h2 className='text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none'>
                Summer T-Shirt Sale 30% off
            </h2>
        </div>
        <div className='grid grid-cols-3 justify-center py-8 gap-4 mx-auto max-w7xl'>
            {storeData.slice(0,6).map((product, index)=>{
                return(
                    <div key={index} >
                    <ProductSectionItem 
                    id={product.id}
                    name={product.name}
                    img ={product.img}
                    text={product.text}
                    totalPrice={product.totalPrice}
                    price={product.price}
                    size = {product.size}
                    color ={product.color}
                    ></ProductSectionItem>
                </div>
                ) 
            })}
        </div>
    </div>
  )
}

export default ProductSection