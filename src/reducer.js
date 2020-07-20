const profReducer = (state={}, action) => {
    switch(action.type){
        case "Add":
            return Object.assign({}, state, action.profile);
        default:
            return state;
    }
}

export default profReducer;