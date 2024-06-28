import React from 'react'
import {
  Slider, 
  Navbar,
  NavigateBtn,
  ProductSection,
  Footer} from '../index'

const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <NavigateBtn></NavigateBtn>
        <ProductSection></ProductSection>
        <Footer></Footer>
    </div>
  )
}

export default Main