import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
        <div className="messageInfo">
            <img src="https://avatars.githubusercontent.com/u/39208985?v=4" alt="" />
            <span>Just now</span>
        </div>
        <div className="messageContent">
            <p>Hey, how are you?</p>
            <img src="https://avatars.githubusercontent.com/u/39208985?v=4" alt="" />
        </div>      
    </div>
  )
}

export default Message