export function CommentPreview(props) {
    return (
        <div className="comment">
                    <img src={this.props.comment.userImg} />
                    <div className="txt-details">
                        <h3>{this.props.comment.email}</h3>
                        <p>{this.props.comment.msg}</p>
                    </div>
                </div>
    )
}