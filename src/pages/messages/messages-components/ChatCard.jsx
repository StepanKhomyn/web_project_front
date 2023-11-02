import React, {useState, useRef, useEffect} from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatMessage from "./ChatMessage";

function ChatCard(props) {
//     const [chatHistory, setChatHistory] = useState([
//     {
//       iSendThisMessage: true,
//       messageText: "Доброго дня, це авто ще в наявності?",
//     },
//     {
//       iSendThisMessage: false,
//       messageText: "Доброго дня, так",
//     },
//     {
//       iSendThisMessage: true,
//       messageText: "Яка причина продажу?",
//     },
//     {
//       iSendThisMessage: false,
//       messageText: "Покатався на теслі і зрозумів, що це не моє",
//     },
//     {
//       iSendThisMessage: false,
//       messageText:
//         "До того ж, мені часто доводиться їздити по областях у зв'язку із роботою",
//     },
//     {
//       iSendThisMessage: false,
//       messageText: "А для такого це авто явно не розраховане",
//     },
//     {
//       iSendThisMessage: true,
//       messageText: "Зрозуміло",
//     },
//     {
//       iSendThisMessage: true,
//       messageText: "Чи буде торг?",
//     },
//     {
//       iSendThisMessage: false,
//       messageText: "Ні, оскільки авто майже з салону",
//     },
//     {
//       iSendThisMessage: true,
//       messageText: "Навіть 100$ не опустите?",
//     },
//     {
//       iSendThisMessage: false,
//       messageText: "За 100$ ще можна буде домовитися",
//     },
//     {
//       iSendThisMessage: true,
//       messageText: "Чудово)",
//     },
//     {
//       iSendThisMessage: true,
//       messageText: "Коли б можна було під'їхати та оглянути авто?",
//     },
//     {
//       iSendThisMessage: false,
//       messageText: "Я вільний на цих вихідних",
//     },
//     {
//       iSendThisMessage: true,
//       messageText: "Добре, я буду десь біля обіду",
//     },
//     {
//       iSendThisMessage: false,
//       messageText: "Добре, чекатиму",
//     },
//     {
//       iSendThisMessage: true,
//       messageText:
//         "Залиште свій номер телефону щоб у разі чого можна було подзвонити",
//     },
//     {
//       iSendThisMessage: false,
//       messageText: "+38067*******",
//     },
//     {
//       iSendThisMessage: true,
//       messageText: "Мій: +38099*******",
//     },
//   ]);

    console.log(props.chatData.chatHistory)
    const [chatHistory, setChatHistory] = useState(props.chatData.chatHistory)

  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);


  useEffect(() => {
    setChatHistory(props.chatData.chatHistory);
  }, [props.chatData.chatHistory]);

  const handleSendClick = () => {
    const newMessage = {
      iSendThisMessage: true,
      messageText: inputValue,
    };

    setChatHistory([...chatHistory, newMessage]);
    setInputValue(''); // Clear the input field
  };


  const handleAddImgClick = () =>{
    console.log("Add img")
  }

//   console.log(chatHistory)


  return (
    <div className="chat-container">
      <div className="chat-container-seller">
        <AccountCircleIcon /> {props.chatData.sellerName}
      </div>
      <div className="line-separator"></div>

      <div className="messages">
        {chatHistory.map((message) => (
          <ChatMessage {...message} />
        ))}
      </div>

      <div className="line-separator"></div>

      <div className="message-input-container">
        <input
          type="text"
          className="message-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
          placeholder="Напишіть повідомлення..."
        ></input>
        <div className="message-send-container">

        <svg onClick={handleAddImgClick} style={{cursor:"pointer"}}  xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6875 3.75C8.96439 3.75 7.5 5.23565 7.5 7.15385L7.5 15.4615C7.5 18.1444 9.55201 20.25 12 20.25C14.448 20.25 16.5 18.1444 16.5 15.4615V7.15385H18V15.4615C18 18.8963 15.351 21.75 12 21.75C8.649 21.75 6 18.8963 6 15.4615L6 7.15385C6 4.48383 8.06137 2.25 10.6875 2.25C13.3136 2.25 15.375 4.48383 15.375 7.15385V15.4615C15.375 17.3669 13.9013 18.9808 12 18.9808C10.0987 18.9808 8.625 17.3669 8.625 15.4615V7.15385H10.125V15.4615C10.125 16.615 11.0018 17.4808 12 17.4808C12.9982 17.4808 13.875 16.615 13.875 15.4615V7.15385C13.875 5.23565 12.4106 3.75 10.6875 3.75Z" fill="#080341"/>
        </svg>

        {inputValue.trim() !== '' && (
          <svg onClick={handleSendClick}
          style={{cursor:"pointer"}}
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>)}
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
