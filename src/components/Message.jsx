import style from "./Message.module.css";
import Message_gif from "./Message_gif";

function Message({ text, edit=false, source=false, source_data=null}) {
    if (source) {
        return <Message_gif gif={source_data} />
    }
    return (
        <p className={style.message}>
        {text}
        {edit && <span className={style.editado}>(editado)</span>}
        </p>
    );
}

export default Message;