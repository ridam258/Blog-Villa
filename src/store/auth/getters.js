export default{
    userId(state){
        console.log(state.userId);
        
        return state.userId;
    },
    token(state){
        return state.token;
    },
    isLoggedIn(state){
        console.log(state.isLoggedIn);
        
        return state.isLoggedIn;
    },
    firstName(state){
        return state.firstName;
    },
    lastName(state){
        return state.lastName;
    }
}