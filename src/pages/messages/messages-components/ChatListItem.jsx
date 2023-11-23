import React from 'react';
import '../Messages.css';

function ChatListItem(props) {
  return (
    <>
      <a href="#" className={`chat-card ${props.isLastClicked ? 'last-clicked' : ''}`} onClick={props.onClick}>
        <div className='chat-img-container'>
          <img className="chat-img" src={props.carImg} alt={props.carName} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="seller-name">{props.sellerName}</div>
          <div className="car-name">{props.carName}</div>
          <div className="last-message">{props.lastMessage}</div>
        </div>
      </a>
    </>
  );
}

export default ChatListItem;