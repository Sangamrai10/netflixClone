import React, { useRef } from 'react'
import bg from '../img/logo/bg.jpg'
import Sign from '../pages/Sign'
// import Sec1 from '../pages/Sec1'
import { Route, Routes, Link } from 'react-router-dom'

export default function Header() {

  return (
    <>
      <header>
        <section className='top'>
          <div className='lo d-flex position-absolute z-2 container justify-content-between'>
            <div>
              {/* <a href="">
                <img style={{ width: "160px" }} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
              </a> */}
            </div>
            <div className='mt-2'>
              <Link className='py-2 px-3 rounded sign-in text-white text-decoration-none' to="/sign">Sign In</Link>
            </div>
          </div>
          <div className='position-relative top-0'>
            <img className='back overflow-hidden' src={bg} alt="" />
            <div className='linearColor position-absolute z-1 top'>df</div>
            <div className='linearColor1 position-absolute z-1 top'>df</div>
          </div>
          <div className='content position-absolute text-center z-1'>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h4>Watch anywhere. Cancle anytime</h4>
            <div className='inp'>
              <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
              <div className='d-flex mt-3 gap-2'>
                <div className='input position-relative text-start'>
                  <label className='label position-absolute' htmlFor="email">Email address</label>
                  <div className=''>
                    <div className='bg-primary position-absolute z-n1 ok w-100 h-100'></div>
                    <input className='outline-none z-2' type="email" id='email' autoComplete='email' />
                  </div>
                </div>
                <button className='sub text-white rounded fs-4'>Get Started <i className="bi bi-chevron-right"></i></button>
              </div>
            </div>
          </div>
        </section>
        <Routes>
          {/* <Route path="*" element={<Sec1 />} /> */}
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </header>
    </>
  )
}
