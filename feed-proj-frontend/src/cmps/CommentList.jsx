import { CommentPreview } from "./CommentPreview"

export function CommentList(props) {
    return (
        <section className="comment-list">
            {props.comments.length > 0 && 
            props.comments.map(comment => {
                return <CommentPreview comment={comment} key={comment._id} />
                     })}
        </section>
    )
}