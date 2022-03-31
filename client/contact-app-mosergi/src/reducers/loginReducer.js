export default function loginReducer(state = false, action){
    if (action.type === "noLogin"){
        return state = action.loginStatus;
    } else if (action.type === "TrueLogin"){
        return state = action.loginStatus;
    } else {
        return state;
    }
}
