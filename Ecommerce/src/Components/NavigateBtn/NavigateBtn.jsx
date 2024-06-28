import React from 'react';
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { filterProducts } from '../../features/slices/productSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const NavigateBtn = () => {
    const buttons = [
        'Hoodies',
        "Dresses",
        'Suits',
        'Shoes',
        "T-Shirts",
        "Jeans",
        "Jackets",
        "Bags"]

        const dispatch = useDispatch()
  return (
    <div>
        <div className="flex flex-row items-center justify-center py-8">
            {buttons.map((button, index)=>{
                return(<div key={index} className='mr-4'>
                    <Link to={"/filteredProducts/" + button}>
                    <Button  color="gray"
                    size='lg' 
                    variant='outlined'
                    ripple= {true}
                    className="text-black hover:bg-gray-400 duration-300 ease-in-out"
                    
                    onClick={()=>dispatch(filterProducts(button))}>
                        {button}
                    </Button>
                    </Link>
                    
                    </div>
            )})}
        </div>
        <div className='bg-black p-2 w-[55%] mx-auto rounded-md'>
            <h3 className='text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none'>Sales Up To 50%</h3>
        </div>
        <div className="flex justify-center item-center py-4">
            <img src={clothes} alt="clothes" className='h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600' />
        </div>
    </div>
  )
}

export default NavigateBtn