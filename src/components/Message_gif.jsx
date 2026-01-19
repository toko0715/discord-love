import style from "./Message_gif.module.css";
function Message_gif({ gif }) {
    return <img className={style.message_gif} src={gif} alt="gif" />
}

export default Message_gif;