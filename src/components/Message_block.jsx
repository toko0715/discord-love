import Message from "./Message";
import Message_info from "./Message_info";
import style from "./Message_block.module.css";

function Message_block({id, username, time, text, edit, userImage, source, onToggleEdit}) {

    return (
        <div key={id} className={style.message_block}>
            <img className={style.user_image} src={userImage} alt="img"/>
            <div className={style.message_content}>
                <Message_info username={username} time={time} />
                <Message 
                    text={text} 
                    edit={edit} 
                    source={source} 
                    onToggleEdit={() => onToggleEdit(id)}
                />
            </div>
        </div>
    );
}
export default Message_block;