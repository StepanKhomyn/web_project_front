import React from 'react'

function ChatMessage(props) {

    const messageClass = `message ${props.iSendThisMessage ? "message-r" : "message-l"}`

  return (
    <div className={messageClass} style={{display: "flex", gap:"7px"}}>
    {props.messageText}
    <div style={{fontSize:"10px", display:"flex", alignItems: "end"}}>10:00</div>
  </div>
  )
}

export default ChatMessage