import React, { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Header from '../component/Header'
import Sign from './Sign'


export default function Sec1() {

  const [buttonClicked, setButtonClicked] = useState(false);
  const handleClick = () => {
    // Update state to indicate that the button has been clicked
    setButtonClicked(true);
  };

  return (
    <>
      <div className='lo d-flex position-absolute z-2 container justify-content-between'>
        <div>
          <a href="/">
            <img style={{ width: "160px" }} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
          </a>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </>
  )
}
