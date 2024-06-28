import React , {Fragment} from 'react';
import {
 Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { Tooltip } from "@material-tailwind/react";
import { removeFromTheCart } from '../../features/slices/cartSlice';

const Cart = ({openModal , setOpen}) => {
  const cart = useSelector((state)=>state.cart.cart)
  const totalPrice = useSelector((state)=>state.cart.totalPrice)

  // to dispatch the removecart slice
  const dispatch = useDispatch()
  return (
    
      <div>
      {cart.length > 0 ? 

       (<Fragment>
          <Dialog 
          className='border=0 outline-0'
           open={openModal}
       handler={()=>setOpen(false)}
        animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}>
        <DialogHeader>Shopping Bag</DialogHeader>
        <DialogBody
        divider
         className='flex flex-col justify-center items-start'>
          {cart.map((item , index)=>{
            return <div key ={index} className='flex flex-row justify-around'>
              <div className="grid grid-row-2 justify-between py-4">
                <div>
                   <img className='h-[125px] rounded-md' src={item.img} alt={item.name} />
                </div>
                 <div className="flex flex-col items-start">
                   <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">{item.name}</h4>
                </div>
                <div className='max-w-xs'>
                  <p className='text-black text-xs font-bold font-inter tracking-normal leading-none pt-2'>{item.text}</p>
                </div>
              </div>


              <div className='pt-3'>
                <p className='text-black text-sm font-bold font-inter tracking-normal leading-none pt-2'>Selected Size : <span className='ml-2'>{item.size}</span></p>

                <p className='text-black text-sm font-bold font-inter tracking-normal leading-none pt-2'>Selected color : <span 
                className='ml-2 rounded-full px-2'
                style={{backgroundColor : item.color}}
                ></span></p>

                <p className='text-black text-sm font-bold font-inter tracking-normal leading-none pt-2'>Total Amount : <span className='ml-2'>{item.amount}</span></p>

                <p className='text-black text-sm font-bold font-inter tracking-normal leading-none pt-2'>Single Item Price :{" "}
                   <span className='ml-2'>${item.price}</span></p>

                <p className='text-black text-sm font-bold font-inter tracking-normal leading-none pt-2'>Total Item prices:{" "} <span className='ml-2'>${item.totalPrice}</span></p>

                <div className='pt-4'>
                  <Tooltip 
                  content="Remove from the cart"
                  placement = "bottom">
                    <Button
                    onClick={()=>dispatch(removeFromTheCart(item))}
                     color="red"
                     size="sm"
                     ripple ={true}
                     variant='filled'
                     >Remove</Button>
                  </Tooltip>
                </div>
              </div>

            </div>
          })}
        </DialogBody>
        <DialogFooter className='flex justify-start items-center'>
          <p className='text-black text-base font-bold font-inter tracking-normal leading-none pt-2'>
            Total price of All Products : {" "}
            <span className='ml-2'>${totalPrice}</span>
          </p>
        </DialogFooter>
       </Dialog>
        </Fragment> 
      ):(

         <Fragment>
          <Dialog
          divider
          className='border=0 outline-0'
          open={openModal}
          handler={()=>setOpen(false)}
          animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
         >
        <DialogHeader>Shopping Bag</DialogHeader>
        <DialogBody>
         <div >
          <h1 className='text-black text-3xl font-bold font-inter tracking-normal leading-none py-4'>Your bag is empty!!!</h1>

          <p className='text-black text-2xl font-bold font-inter tracking-normal leading-none py-4'>Add some products</p>
         </div>
        </DialogBody>
        </Dialog>
        </Fragment>
        )} ;
      </div>
  );
};

export default Cart