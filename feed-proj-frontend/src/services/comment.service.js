import { httpService } from './http.service'
import { utilService } from './util.service'

const STORAGE_KEY = 'comment_db'

export const commentService = {
    query,
    getById,
    save,
    remove,
    getEmptyComment,
    getEmptyFilter
}
window.cs = commentService


async function query(filterBy = {}) {
    return httpService.get(STORAGE_KEY, filterBy)
}

function getById(commentId) {
    return httpService.get(`comment/${commentId}`)
}

async function remove(commentId) {
    return httpService.delete(`comment/${commentId}`)
}
async function save(comment) {
    let savedComment
    if (comment._id) {
        savedComment = await httpService.put(`comment/${comment._id}`, comment)
    } else {
        savedComment = await httpService.post('comment', comment)
    }
    return savedComment
}

function getEmptyComment() {
    return {
        userImg: 'https://xsgames.co/randomusers/assets/avatars/female/10.jpg',
        email: '',
        msg: ''
    }
}

function getEmptyFilter() {
    return {
        txt: ''
    }
}





