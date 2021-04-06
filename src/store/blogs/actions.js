export default{
    async loadBlog(context, payload){
        console.log(payload);
        const userId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        console.log(context);
        
        const response = await fetch(`https://blog-villa-default-rtdb.firebaseio.com/blogs/${userId}.json?auth=`+token,{
            method:'POST',
            body:JSON.stringify(payload)
        });
        if(!response.ok){
            //re
        }
    },
    fillBlog(context, payload){
        context.commit('setBlog',payload);
    }
}