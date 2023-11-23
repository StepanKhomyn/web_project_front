import React, { useState } from "react";
import "./Messages.css";

import ChatListItem from "./messages-components/ChatListItem";

import Header from "../Header";
import Menu from "../cars-list/components/Menu";
import ChatCard from "./messages-components/ChatCard";




const chatsData = [
  {
    sellerName: "Ігор",
    carImg:
      "https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp",
    carName: "Tesla Model X 2022",
    chatHistory: [
      {
        iSendThisMessage: true,
        messageText: "Доброго дня, це авто ще в наявності?",
      },
      {
        iSendThisMessage: false,
        messageText: "Доброго дня, так",
      },
      {
        iSendThisMessage: true,
        messageText: "Яка причина продажу?",
      },
      {
        iSendThisMessage: false,
        messageText: "Покатався на теслі і зрозумів, що це не моє",
      },
      {
        iSendThisMessage: false,
        messageText:
          "До того ж, мені часто доводиться їздити по областях у зв'язку із роботою",
      },
      {
        iSendThisMessage: false,
        messageText: "А для такого це авто явно не розраховане",
      },
      {
        iSendThisMessage: true,
        messageText: "Зрозуміло",
      },
      {
        iSendThisMessage: true,
        messageText: "Чи буде торг?",
      },
      {
        iSendThisMessage: false,
        messageText: "Ні, оскільки авто майже з салону",
      },
      {
        iSendThisMessage: true,
        messageText: "Навіть 100$ не опустите?",
      },
      {
        iSendThisMessage: false,
        messageText: "За 100$ ще можна буде домовитися",
      },
      {
        iSendThisMessage: true,
        messageText: "Чудово)",
      },
      {
        iSendThisMessage: true,
        messageText: "Коли б можна було під'їхати та оглянути авто?",
      },
      {
        iSendThisMessage: false,
        messageText: "Я вільний на цих вихідних",
      },
      {
        iSendThisMessage: true,
        messageText: "Добре, я буду десь біля обіду",
      },
      {
        iSendThisMessage: false,
        messageText: "Добре, чекатиму",
      },
      {
        iSendThisMessage: true,
        messageText:
          "Залиште свій номер телефону щоб у разі чого можна було подзвонити",
      },
      {
        iSendThisMessage: false,
        messageText: "+38067*******",
      },
      {
        iSendThisMessage: true,
        messageText: "Мій: +38099*******",
      },
    ],
  },
  {
    sellerName: "Василь",
    carImg:
      "data:image/jpeg;base64,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",
    carName: "Kia Optima",
    chatHistory: [
      {
        iSendThisMessage: true,
        messageText: "Продайте машину",
      },
      {
        iSendThisMessage: false,
        messageText: "Ладно, ок",
      }
    ],
  },
  {
    sellerName: "Іван",
    carImg:
      "https://images1.bonhams.com/image?src=Images/live/2021-02/26/25059955-1-16.jpg&top=0.105000000000&left=0.096666666666&bottom=0.845000000000&right=0.753333333333",
    carName: "Mercedes-benz w126 Coupe",
    chatHistory: [
      {
        iSendThisMessage: true,
        messageText: "Машина ще в наявності?",
      },
      {
        iSendThisMessage: false,
        messageText: "Ні, я просто вимахуюся",
      }
    ],
  },

  {
    sellerName: "Олександр Лях",
    carImg:
      "https://cdn1.riastatic.com/photosnew/auto/photo/skoda_octavia__513695706f.webp",
    carName: "Skoda Octavia",
    chatHistory: [
      {
        iSendThisMessage: true,
        messageText: "Опустите трохи?",
      },
      {
        iSendThisMessage: false,
        messageText: "Торгу не буде",
      }
    ],
  },
];

chatsData.forEach((chat) => {
  if (chat.chatHistory && chat.chatHistory.length > 0) {
    chat.lastMessage = chat.chatHistory[chat.chatHistory.length - 1].messageText;
  }
});



const Messages = () => {
  const [lastClickedIndex, setLastClickedIndex] = useState(-1);
  const [currChatData, setCurrChatData] = useState(chatsData[0]);

  const [showChatList, setShowChatList] = useState(true); // Add this state


  const handleChatItemClick = (chatData, index) => {
    setLastClickedIndex(index);
    setCurrChatData(chatData);
    setShowChatList(false); // Hide the chat list
  };

  const handleBackButtonClick = () => {
    
  }

  const handleBackClick = () => {
    setShowChatList(true); // Show the chat list
  };


  return (
    <div style={{ marginLeft: "70px", marginRight: "70px" }}>
      <Header />
      <div style={{ display: "flex" }}>
        <Menu />
        <div id="main" style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {!showChatList && ( // Show only if showChatList is true
              <svg
                className="back-btn"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="16px"
                height="16px"
                viewBox="0 0 1024 1024"
                onClick={handleBackClick}
                style={{ cursor: "pointer" }}
              >
                <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z" />
              </svg>
            )}
            <h2>Всі повідомлення</h2>
          </div>

          <div className="main-container">
            {showChatList && ( // Show chat list if showChatList is true
              <div className="chats">
                {chatsData.map((chatData, index) => (
                  <ChatListItem
                    key={chatData.sellerName}
                    sellerName={chatData.sellerName}
                    carImg={chatData.carImg}
                    carName={chatData.carName}
                    lastMessage={chatData.lastMessage}
                    onClick={() => handleChatItemClick(chatData, index)}
                    isLastClicked={index === lastClickedIndex}
                  />
                ))}
              </div>
            )}

            {showChatList || ( // Show chat card if showChatList is false
              <ChatCard chatData={currChatData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div style={{ marginLeft: "70px", marginRight: "70px" }}>
  //     <Header />
  //     <div style={{ display: "flex" }}>
  //       <Menu />
  //       <div id="main" style={{ width: "100%" }}>
  //         <div style={{ display: "flex", alignItems: "center", gap: "0.5rem"}}>
  //           <svg className="back-btn" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="16px" height="16px" viewBox="0 0 1024 1024"><path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"/></svg>
  //           <h2>Всі повідомлення</h2>
  //         </div>
          

  //         <div className="main-container">
  //           <div className="chats">
  //             {chatsData.map((chatData, index) => (
  //               <ChatListItem
  //                 key={chatData.sellerName} // Add a unique key for each item
  //                 sellerName={chatData.sellerName}
  //                 carImg={chatData.carImg}
  //                 carName={chatData.carName}
  //                 lastMessage={chatData.lastMessage}
  //                 onClick={() => handleChatItemClick(chatData, index)} // Pass the chat data and index 
  //                 isLastClicked={index === lastClickedIndex}
  //               />
  //             ))}
  //           </div>

  //           <ChatCard chatData={currChatData}/>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Messages;
