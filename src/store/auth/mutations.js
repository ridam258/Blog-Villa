export default{
    setUser(state , payload){
        state.userId=payload.localId;
        state.token = payload.idToken;
        console.log(payload);
        state.firstName=payload.firstName;
        state.lastName = payload.lastName;
        state.isLoggedIn=payload.logStatus;
    }
}