import { combineReducers} from 'redux'
import reciever_user, { RECIEVER_USER_DEFAULT_STATE} from './reciever_user'
import newlink, {NEWLINK_DEFAULT_STATE} from './newLink'

const paylinkApp = combineReducers({
    reciever_user,
    newlink
})
const newlinkApp = combineReducers({
    newlink
})

export const DEFAULT_STATE = {
    reciever_user: RECIEVER_USER_DEFAULT_STATE,
    newlink: NEWLINK_DEFAULT_STATE
}
export default paylinkApp