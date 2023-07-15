import React from 'react'
import "./NavBar.css"
const Navbar = () => {
  return (
<div className="navbar bg-slate-700 police  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn text-white btn-ghost normal-case text-xl">DevLabX</a>
  </div>




  <div className="navbar-end">




<button className='bg-slate-500 py-2 px-4 rounded-xl relative ' >
  <span className='absoute w-2 h-2 rounded-full bg-green-700 left-0 top-0'></span>
  <h2 className='text-white font-semibold text-xl'>Coming soon</h2>
  <span className='text-white '>on playstore</span>
</button>




    
  </div>
</div>  )
}

export default Navbar