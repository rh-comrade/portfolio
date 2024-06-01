'use client'
import React from 'react'
import Button from '@/components/button/button'
const Home = () => {
  const handleClick = ()=>{
    alert("you clicked me")
  }
  return (
    <div className='container'>
      <Button
       text={'my special button component'} 
       cls={`btn btn-primary w-100`}
       color='yellow'
       curve='5px'
       border='2px solid yellow'
      //  bgcolor='black'
       handler={handleClick}
       />
      <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold text-body-emphasis">Move With Joy!</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Welcome to "let's go", where we are dedicated to providing exceptional
          moving services to customers in India. As a startup, we believe that
          moving doesn't have to be stressful or complicated, and we are
          passionate about making the process as seamless and enjoyable as
          possible.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
            Get a Quote
          </button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">
            Contact Us
          </button>
        </div>
      </div>
      <div className="overflow-hidden" >
        <div className="container px-5">
          {/* <img src="./public/images/moving-van.jpg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
