function Entry({ entry }) {
    const { isUser, date, content } = entry
    const datePosted = new Date(date)
    return (
        <div className="row">
            <div className="col">
                <div className="entry">
                    {isUser
                        ? "User"
                        : "Bot"} : {datePosted.toLocaleTimeString()} :{content}
                </div>
            </div>
        </div>
    )
}

export default Entry