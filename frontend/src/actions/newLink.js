export const ADD_NEWLINK = 'ADD_NEWLINK'
export const ADD_NEWLINK_SUCCESS = 'ADD_NEWLINK_SUCCESS'
export const NEWLINK_FAILURE = 'NEWLINK_FAILURE'
export const TOGGLE_NEWLINK = 'TOGGLE_NEWLINK'
export const DELETE_NEWLINK = 'DELETE_NEWLINK'
export const LOADED_NEWLINK = 'LOADED_NEWLINK'
export const FETCH_NEWLINK = 'FETCH_NEWLINK'

export function addNewLink(newlink){
    return {type: ADD_NEWLINK, newlink}
}
export function addNewLinkSuccess(newlink){
    return {type: ADD_NEWLINK_SUCCESS, newlink}
}
export function NewLinkFailure(error){
    return {type: NEWLINK_FAILURE, error}
}
export function toggleNewLink(id){
    return {type: TOGGLE_NEWLINK, id}
}
export function deleteNewLink(id){
    return {type: DELETE_NEWLINK, id}
}
export function loadedNewLink(newlink){
    return {type: LOADED_NEWLINK, newlink}
}
export function fetchNewLink(){
    return {type: FETCH_NEWLINK}
}
