import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <span className='logo'>FiveSec</span>
        <div className="user">
            <img src="https://avatars.githubusercontent.com/u/39208985?v=4" alt="" />
            <span>John</span>
            <button>Logout</button>
        </div>

    </div>
  )
}

export default Navbar