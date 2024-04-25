import { Component } from "react"
import { commentService } from "../services/comment.service"

export class CommentFilter extends Component {

    state = {
        filter: commentService.getEmptyFilter()
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState(prevState => ({
            filter: {
                ...prevState.filter,
                [name]: value
            }
        }))

    }

    render() {
        return (
            <section className="comment-filter">
                <input type="text" name="filter" value={this.state.filter.txt} placeholder="Filter" onChange={this.handleChange} />
            </section>
        )
    }
}