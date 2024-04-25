import { httpService } from './http.service'

const BASE_URL = 'comment/'

export const commentService = {
    query,
    // getById,
    save,
    // remove,
    getEmptyComment,
    getEmptyFilter
}
window.cs = commentService


async function query(filterBy = {}) {
    return httpService.get(`${BASE_URL}?txt=${filterBy.txt}`)
}

// function getById(commentId) {
//     return httpService.get(`comment/${commentId}`)
// }

// async function remove(commentId) {
//     return httpService.delete(`comment/${commentId}`)
// }

async function save(comment) {
    let savedComment = comment
    // if (comment._id) {
    //     savedComment = await httpService.put(`comment/${comment._id}`, comment)
    // } else {
        savedComment = await httpService.post(BASE_URL, comment)
    // }
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





