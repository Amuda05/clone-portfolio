import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="container">
           <div className="img">
           <img src="/src/media/logo.png" alt="" />
           </div>
    <p>Home</p>
    <p id='about'>About me</p>
    <p>Service</p>
    <p>Portfolio</p>
    <p>Blog</p>
    <p>Contact</p>
    </div>
    <div className="main">
        <h2 className='dav'>I Am David Miller</h2>
        <h1>
            creative Designer

        </h1>
        <p>CONTACT ME</p>
    </div>
    </nav>
    </>
  )
}

export default Navbar