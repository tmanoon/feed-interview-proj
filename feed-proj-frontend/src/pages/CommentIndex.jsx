import { Component } from "react"
import { CommentList } from "../cmps/CommentList"
import { CommentFilter } from "../cmps/CommentFilter"
import { CommentEdit } from "../cmps/CommentEdit"
import { connect } from "react-redux"
import { loadComments } from "../store/actions/comment.actions"
import { setFilter } from "../store/actions/comment.actions"
import { commentService } from "../services/comment.service"

class _CommentIndex extends Component {

    state = {
        comments: [],
        filterBy: commentService.getEmptyFilter()
    }

    async componentDidMount() {
        try {
            await loadComments()
            this.setState({ comments: this.props.comments })
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.comments !== this.props.comments) {
            this.setState({ comments: this.props.comments })
        }
    }

    setFilterBy = async e => {
        try {
        const filterValue = e.target.value
        setFilter({ 'txt' : filterValue }) 
        this.setState({ filterBy: { 'txt': filterValue } })
        await loadComments()
        this.setState( {comments: this.props.comments} )
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    render() {
        return (
            <section className="comment-index">
                <div className="container">
                    <CommentEdit />
                    <CommentFilter filterBy={this.state.filterBy} setFilterBy={this.setFilterBy} />
                    {this.state.comments.length > 0 && <CommentList comments={this.state.comments} />}
                </div>

            </section>
        )
    }
}

const mapStateToProps = storeState => ({
    comments: storeState.commentModule.comments,
    filterBy: storeState.commentModule.filterBy,
})

export const CommentIndex = connect(mapStateToProps)(_CommentIndex)