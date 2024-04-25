import { Component } from "react"
import { CommentList } from "../cmps/CommentList"
import { CommentFilter } from "../cmps/CommentFilter"
import { CommentEdit } from "../cmps/CommentEdit"
import { connect } from "react-redux"

class _CommentIndex extends Component {

    render() {
        return (
            <section className="comment-index">
                <CommentEdit />
                <CommentFilter />
                <CommentList comments={this.state.comments} />
                </section>
        )
    }
}

const mapStateToProps = storeState => ({
    comments: storeState.commentModule.comments,
    filterBy: storeState.commentModule.filterBy,
})

export const CommentIndex = connect(mapStateToProps)(_CommentIndex)