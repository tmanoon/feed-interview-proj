export function CommentPreview(props) {
    return (
        <div className="comment flex space-between align-center">
                    <img src={props.comment.userImg} />
                    <div className="txt-details">
                        <h3>{props.comment.email}</h3>
                        <p>{props.comment.msg}</p>
                    </div>
                </div>
    )
}