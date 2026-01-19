import Message from "./Message";
import Message_info from "./Message_info";
import style from "./Message_block.module.css";

function Message_block(message) {
    const text = <Message key={message.id} text={message.text} edit={message.edit} source={message.source[0]} source_data={message.source[1]} />

    const mssg = (text) => ( 
    <div key={message.id} className={style.message_block}>
        <img className={style.user_image} src={message.userImage} alt="img"/>
        <div className={style.message_content}>
            <Message_info username={message.username} time={message.time} />
            {text}
        </div>
    </div>);

    return (
        mssg(text)
    )
}
export default Message_block;