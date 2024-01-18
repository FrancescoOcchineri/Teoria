export default function cartReducer(state = [], action) {

    switch (action.type) {
        case 'ADD_CART':
            return {
                ...state,
            }

        case 'REMOVE_CART':
            return {
                ...state,
            }

        default:
            break;
    }

    return state
}
