import { all } from 'redux-saga/effects'
import newLinkSagas from './newLink'
import reciever_userSagas from './reciever_user'

export default function* rootSagas(){
    yield all([
        newLinkSagas(),
        reciever_userSagas(),
    ])
}