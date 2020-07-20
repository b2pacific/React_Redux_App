const profReducer = (state={}, action) => {
    switch(action.type){
        case "Add":
            return state = action.profile;
        default:
            return state;
    }
}

export default profReducer;