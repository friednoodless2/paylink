import{
    ADD_RECIEVER_USER,
    ADD_RECIEVER_USER_SUCCESS,
    RECIEVER_USER_FAILURE,
    TOGGLE_RECIEVER_USER,
    DELETE_RECIEVER_USER,
    LOADED_RECIEVER_USER,
    FETCH_RECIEVER_USER
} from '../actions/reciever_user'

export const RECIEVER_USER_DEFAULT_STATE = {
    loading: false, 
    saving: false, 
    error: '',
    items: []
}

export default function reciever_user (state = RECIEVER_USER_DEFAULT_STATE, action)
{
    switch (action.type) {
        case LOADED_RECIEVER_USER:
            return {...state, items: action.reciever_user, loading: false}

        case FETCH_RECIEVER_USER: 
            return {...state, loading: true}
        
        case ADD_RECIEVER_USER: 
            return {...state, saving: true}
        
        case ADD_RECIEVER_USER_SUCCESS:
            return {...state, items: state.items.concat(action.reciever_user)}

        case RECIEVER_USER_FAILURE:
            return {...state, loading: false, saving: false, error: action.error}
            
        case TOGGLE_RECIEVER_USER:
            return {...state, items: state.items.map((reciever_user) => reciever_user._id === action.id ? {...reciever_user, done: !reciever_user.done} : reciever_user)}
        
        case DELETE_RECIEVER_USER:
            return {...state, items: state.items.reduce((items, reciever_user) => reciever_user._id !== action.id ? items.concat(reciever_user) : items, [])}
        
        default:
            return state
        }
}