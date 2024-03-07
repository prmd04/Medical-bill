import React, { Fragment } from 'react'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
  <Fragment>
    <header className='h-20 w-screen bg-slate-700 fixed top-0 left-0 decoration-white flex items-center justify-around shadow-md font-bold'>
      <h1 className='text-2xl text-white'>Medical Bill</h1>
      <HeaderCartButton/>
    </header>
  </Fragment>
  )
}

export default Header