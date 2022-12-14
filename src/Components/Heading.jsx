import React from 'react'
import './styles.css';

function Heading() {
  return (
    <>
    <div className='navBar'>
        <h2>Code Editor</h2>
        <div className='navBar-right'>
            <button  className='header-btn active'>SignUP</button>
            <button className='header-btn'>Login</button>
        </div>
        </div>
    </>
  )
}

export default Heading