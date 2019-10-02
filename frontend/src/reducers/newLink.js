import{
    ADD_NEWLINK,
    ADD_NEWLINK_SUCCESS,
    NEWLINK_FAILURE,
    TOGGLE_NEWLINK,
    DELETE_NEWLINK,
    LOADED_NEWLINK,
    FETCH_NEWLINK
} from '../actions/newLink'

export const NEWLINK_DEFAULT_STATE = {
    loading: false, 
    saving: false, 
    error: '',
    items: []
}

export default function newlink (state = NEWLINK_DEFAULT_STATE, action)
{
    switch (action.type) {
        case LOADED_NEWLINK:
            return {...state, items: action.newlink, loading: false}

        case FETCH_NEWLINK: 
            return {...state, loading: true}
        
        case ADD_NEWLINK: 
            return {...state, saving: true}
        
        case ADD_NEWLINK_SUCCESS:
            return {...state, items: state.items.concat(action.newlink)}

        case NEWLINK_FAILURE:
            return {...state, loading: false, saving: false, error: action.error}
            
        case TOGGLE_NEWLINK:
            return {...state, items: state.items.map((newlink) => newlink._id === action.id ? {...newlink, done: !newlink.done} : newlink)}
        
        case DELETE_NEWLINK:
            return {...state, items: state.items.reduce((items, newlink) => newlink._id !== action.id ? items.concat(newlink) : items, [])}
        
        default:
            return state
        }
}