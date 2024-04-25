import { commentService } from '../../services/comment.service'
import { store } from '../store'
import { ADD_COMMENT, REMOVE_COMMENT, SET_COMMENTS, UPDATE_COMMENT, SET_FILTER_BY } from '../reducers/comment.reducer'

export async function loadComments() {
    try {
        const filterBy = store.getState().commentModule.filterBy
        const comments = await commentService.query(filterBy)
        console.log('Comments from DB:', comments)
        store.dispatch( {type: SET_COMMENTS, comments} )
    } catch (err) {
        console.log('Cannot load comments', err)
        throw err
    }
}

export async function removeComment(commentId) {
    try {
        const commentToRemove = await commentService.remove(commentId)
        store.dispatch( {type: REMOVE_COMMENT, comment: commentToRemove} )
    } catch (err) {
        console.log('Cannot remove comment', err)
        throw err
    }
}

export async function addComment(comment) {
    try {
        const commentToAdd = await commentService.save(comment)
        console.log('Added Comment', commentToAdd)
        store.dispatch( {type: ADD_COMMENT, comment: commentToAdd} )
    } catch (err) {
        console.log('Cannot add comment', err)
        throw err
    }
}

export async function updateComment(comment) {
    try {
        const savedComment = await commentService.save(comment)
        console.log('Updated Comment:', savedComment)
        store.dispatch({type: UPDATE_COMMENT, comment: savedComment})
        return savedComment
    } catch (err) {
        console.log('Cannot save comment', err)
        throw err
    }
}

export function setFilter(filterBy) {
    store.dispatch( {type: SET_FILTER_BY, filterBy} )
}