export const ADD_RECIEVER_USER = 'ADD_RECIEVER_USER'
export const ADD_RECIEVER_USER_SUCCESS = 'ADD_RECIEVER_USER_SUCCESS'
export const RECIEVER_USER_FAILURE = 'RECIEVER_USER_FAILURE'
export const TOGGLE_RECIEVER_USER = 'TOGGLE_RECIEVER_USER'
export const DELETE_RECIEVER_USER = 'DELETE_RECIEVER_USER'
export const LOADED_RECIEVER_USER = 'LOADED_RECIEVER_USER'
export const FETCH_RECIEVER_USER = 'FETCH_RECIEVER_USER'

export function addReciever_user(reciever_user){
    return {type: ADD_RECIEVER_USER, reciever_user}
}
export function addReciever_userSuccess(reciever_user){
    return {type: ADD_RECIEVER_USER_SUCCESS, reciever_user}
}
export function reciever_userFailure(error){
    return {type: RECIEVER_USER_FAILURE, error}
}
export function toggleReciever_user(id){
    return {type: TOGGLE_RECIEVER_USER, id}
}
export function deleteReciever_user(id){
    return {type: DELETE_RECIEVER_USER, id}
}
export function loadedReciever_user(reciever_user){
    return {type: LOADED_RECIEVER_USER, reciever_user}
}
export function fetchReciever_user(){
    return {type: FETCH_RECIEVER_USER}
}
