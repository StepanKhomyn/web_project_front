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
    // lastMessage: chatsData[0].chatHistory[chatsData[0].chatHistory.length - 1].messageText,
    // lastMessage: "vscwcvvc",
  },
  {
    sellerName: "Юра",
    // lastMessage: "Ладно, ок",
    carImg:
      "https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp",
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
    // lastMessage: "Ні, я просто вимахуюся",
    carImg:
      "https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp",
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
    // lastMessage: "Торгу не буде",
    carImg:
      "https://cdn3.riastatic.com/photosnew/auto/photo/tesla_model-3__515756233f.webp",
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



  const handleChatItemClick = (chatData, index) => {
    setLastClickedIndex(index);
    setCurrChatData(chatData);
  };

  console.log(currChatData);

  return (
    <div style={{ marginLeft: "70px", marginRight: "70px" }}>
      <Header />
      <div style={{ display: "flex" }}>
        <Menu />
        <div id="main" style={{ width: "100%" }}>
          <h2>Всі повідомлення</h2>

          <div className="main-container">
            <div className="chats">
              {chatsData.map((chatData, index) => (
                <ChatListItem
                  key={chatData.sellerName} // Add a unique key for each item
                  sellerName={chatData.sellerName}
                  carImg={chatData.carImg}
                  carName={chatData.carName}
                  lastMessage={chatData.lastMessage}
                  onClick={() => handleChatItemClick(chatData, index)} // Pass the chat data and index 
                  isLastClicked={index === lastClickedIndex}
                />
              ))}
            </div>

            <ChatCard chatData={currChatData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
