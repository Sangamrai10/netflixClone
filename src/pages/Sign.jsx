import React from 'react'
import bg from '../img/logo/bg.jpg'


export default function Sign() {
    return (
        <>
            <div>
                <section>
                    <div className='position-relative top-0'>
                        <img className='back overflow-hidden' src={bg} alt="" />
                        {/* <div className='linearColor position-absolute z-1 top'>df</div>
                        <div className='linearColor1 position-absolute z-1 top'>df</div> */}

                        {/* form division  */}
                        <div className=' fd position-absolute z-2 w-100  text-white'>
                            <div className='d-flex justify-content-center '>
                                <div className='fd-inn'>
                                    <h4 className='fs-1 fw-bold'>Sign In</h4>
                                    <form action="">
                                        {/* Email input  */}
                                        <div className='input1 position-relative mt-3'>
                                            <label className='label position-absolute' htmlFor="email">Email or Phone number</label>
                                            <div className=''>
                                                <div className='position-absolute z-n1 w-100 h-100'></div>
                                                <input className='z-2' type="email" id='email1' required/>
                                                <span className='email-error'></span>
                                            </div>
                                        </div>

                                        {/* password input */}
                                        <div className='input1 position-relative mt-4'>
                                            <label className='label position-absolute' htmlFor="email">Password</label>
                                            <div className=''>
                                                <div className='position-absolute z-n1 w-100 h-100'></div>
                                                <input className='z-2' type="password" id='pass' autoComplete='email' required/>
                                                <span className='pass-error'></span>
                                            </div>
                                        </div>

                                        {/* sign in or sign in with code  */}
                                        <div className='w-100 mt-4'>
                                            <a className=' w-100 sn' role='button' id='button' href="#">Sign In</a>
                                            <p className='text-center mb-0 py-3 fs-5'>OR</p>
                                            <a className='usc' role='button' href="#">Use a Sign-In Code</a>
                                            <div className='text-center my-4'>
                                                <a className='text-decoration-none text-light' href="#">forgot password?</a>
                                            </div>
                                            <div>
                                                <input className='mb-3' type="checkbox" /> <span>Remember me</span>
                                                <p>New to Netflix? <a className='text-decoration-none text-white fw-bold' href="#">Sign up now.</a></p>
                                                <p className=''>
                                                    <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. </span>
                                                    <a className='text-decoration-none' href="">Learn more.</a>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
