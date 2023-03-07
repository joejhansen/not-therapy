function Entry({ entry }) {
    const { isUser, date, content } = entry
    const datePosted = new Date(date)
    return (
        <li>
            {isUser
                ? "User"
                : "Bot"} : {datePosted.toLocaleTimeString()} : {content}
        </li>
    )
}

export default Entry