import style from './App.module.css'
import Message_block from './components/Message_block'
import UserImageYoshi from "./assets/Matching_Icons_1.jpg";
import UserImageToko from "./assets/Matching_Icons_.jpg";

function App() {
  const messages = [
    {
        id: 1,
        username: "𝒴𝘰𝘴𝘩𝘪",
        time: "ayer a las 2:17",
        text: "amolchito? 0_o",
        edit: true,
        userImage: UserImageYoshi,
        source: [
            false
        ]
    },
    {
        id: 2,
        username: "toko",
        time: "ayer a las 22:45",
        text: "mi amol",
        edit: false,
        userImage: UserImageToko,
        source: [
            false
        ]
    },
    {
        id: 3,
        username: "toko",
        time: "ayer a las 22:50",
        text: null,
        edit: false,
        userImage: UserImageToko,
        source: [
            true,
            "https://media1.tenor.com/m/HY_KHdSjvcMAAAAd/seal-bounce.gif"
        ]
    },
    {
        id: 4,
        username: "𝒴𝘰𝘴𝘩𝘪",
        time: "ayer a las 22:56",
        text: "aamolchitoooooooo",
        edit: false,
        userImage: UserImageYoshi,
        source: [
            false
        ]
    },
    {
      id: 5,
      username: "toko",
      time: "hoy a las 09:15",
      text: "hola amol",
      edit: false,
      userImage: UserImageToko,
      source: [
          false
      ]
    }
  ];  
  return (
    <div className={style.message_block_container}>
      {messages.map((message) => (
        <Message_block 
          key={message.id}
          id={message.id}
          username={message.username}
          time={message.time}
          text={message.text}
          edit={message.edit}
          userImage={message.userImage}
          source={message.source}
        />
      ))}
    </div>
  )
}

export default App
