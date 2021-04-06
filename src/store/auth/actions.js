export default{
    async auth(context, payload){
        const mode = payload.mode;
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdh9THy9lepbYVVM7j3fdF6kf7WAP6scQ';
        if(mode === 'login'){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAdh9THy9lepbYVVM7j3fdF6kf7WAP6scQ';
        }
        const response = await fetch (url , {
            method:'POST',
            body:JSON.stringify({
                email:payload.email,
                password:payload.password,
                returnSecureToken:true
            })
            
        });
        const responseData=await response.json();
        context.commit('setUser',{
            ...responseData,
            ...payload,
            logStatus:true
        });
        const userId = context.getters.userId;
        if(mode==='signUp'){
        await fetch (`https://blog-villa-default-rtdb.firebaseio.com/users/${userId}.json`,{
            method:'POST',
            body:JSON.stringify(payload),
        });
        
        if(!response.ok){
            const error = new Error(responseData.message||'Failed to authenticate.')
            throw error;
        }
        }
        else{
            const userResponse = await fetch(`https://blog-villa-default-rtdb.firebaseio.com/users/${userId}.json`);
            const userResponseData = await userResponse.json();
            const ridam =Object.keys(userResponseData)[0];
            context.commit('setUser',{
                ...responseData,
                ...userResponseData[ridam],
                logStatus:true
            });
            
        }

    },
    logout(context){
        const logoutData={
            localId:null,
            idToken:null,
            logStatus:false
        }
        context.commit('setUser',logoutData);
    }
}