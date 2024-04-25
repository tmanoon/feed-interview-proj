import { CommentPreview } from "./CommentPreview"

export function CommentList(props) {
    return (
        <section className="comment-list">
            {this.props.comments > 0 && 
            this.props.comments.map(comment => {
                return <CommentPreview comment={comment} key={comment._id} />
                     })}
        </section>
    )
}