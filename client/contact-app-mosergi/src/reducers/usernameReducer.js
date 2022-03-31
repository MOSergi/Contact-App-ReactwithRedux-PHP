export default function usernameReducer(state = "", action){
    if (action.type === "setUsername"){
        return state = action.payload;   
    } else {
        return state;
    }
}