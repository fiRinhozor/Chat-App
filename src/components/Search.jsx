import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder="Find a User" />
        </div>
        <div className="userChat">
            <img src="https://avatars.githubusercontent.com/u/39208985?v=4" alt="" />
        <div className="userChatInfo">
            <span>John</span>
        </div>
        </div>
    </div>
  )
}

export default Search