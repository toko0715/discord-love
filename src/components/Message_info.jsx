import styles from './Message_info.module.css';

function Message_info({ username, time }) {
    return (
        <>
            <div className={styles.message_info}>
                <strong className={styles.message_info_username}>{username}</strong>
                <div className={styles.message_info_time}>{time}</div>
            </div>
        </>
    )
}

export default Message_info;