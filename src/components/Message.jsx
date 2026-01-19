import { useState } from "react";
import style from "./Message.module.css";
import Message_gif from "./Message_gif";

function Message({ text, edit=false, source=false, source_data=null}) {
    const [isEditing, setIsEditing] = useState(edit);
    console.log("state-isEditing:", isEditing);
    if (source) {
        return <Message_gif gif={source_data} />
    }

    const textEdit = isEditing ? "desmarcar" : "editar (marcar)";
    const buttonClassName = isEditing ? style.edit_button_active : style.edit_button;
    const displayEdit = isEditing && <span className={style.editado}>(editado)</span>;
    
    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    return (
        <p className={style.message}>
        {text}
        {displayEdit}
        <button onClick={handleEditClick} className={buttonClassName}>{textEdit}</button>
        </p>
    );
}

export default Message;