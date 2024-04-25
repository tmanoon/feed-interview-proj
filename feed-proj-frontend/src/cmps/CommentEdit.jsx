import { Component } from "react"
import { commentService } from "../services/comment.service"
import { addComment } from "../store/actions/comment.actions"
export class CommentEdit extends Component {

    state = {
        newComment: commentService.getEmptyComment()
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState(prevState => ({
            newComment: {
                ...prevState.newComment,
                [name]: value
            }
        }))
    }

    onSubmitComment = async () => {
        await addComment(this.state.newComment)
    }

    render() {
        return (
            <section className="comment-edit flex column">
                <input type="text" value={this.state.newComment.email} name="email" placeholder="Email" onChange={this.handleChange} />
                <textarea value={this.state.newComment.msg} name="msg" placeholder="Message" onChange={this.handleChange} />
                <span className="submit-btn" onClick={this.onSubmitComment}> Submit</span>
            </section>
        )
    }
}
