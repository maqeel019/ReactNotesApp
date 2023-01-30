import React from 'react'
import image from '../images/image1.jpg'
function Cards() {
  return (
    <div className='cards'>
        <img src={image} alt="" />
        <span>4.9(09)</span>
        <span>19</span>
        <span>PAK</span>
        <p>Lorem ipsum dolo adipisicing elit.</p>
        <p> <strong>From 119$</strong>  / Person</p>
    </div>
  )
}
export default Cards