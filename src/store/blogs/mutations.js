export default{
    setBlog(state,payload){
        console.log(payload);
        
        state.blogs=payload;
        console.log(state.blogs);
        
    }
}