import style from "./Message.module.css";
import Message_gif from "./Message_gif";

function Message({ text, edit=false, source, onToggleEdit}) {
    if (source.enabled) {
        return <Message_gif gif={source.data} />;
    }

    const textEdit = edit ? "desmarcar" : "editar (marcar)";
    const buttonClassName = edit ? style.edit_button_active : style.edit_button;

    return (
        <p className={style.message}>
        {text}
        {edit && <span className={style.editing_text}>(editado)</span>}
        <button onClick={onToggleEdit} className={buttonClassName}>
            {textEdit}
        </button>
        </p>
    );
}

export default Message;