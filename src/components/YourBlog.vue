<template>
<div class="is-flex is-justify-content-center head " style="margin-top:5rem">
<h1 class="has-text-weight-bold mt-3">All Your Blogs Are Here!</h1>
</div>
    <div class="is-flex is-justify-content-center">
    <div class="grid-container other">         
            <div class="grid-item p-3"  v-for="blog in blogs" :key="blog.title">
               <grid-view :blog='blog'></grid-view>
               
            </div>
    </div>
</div>
</template>
<script>
import GridView from './GridView.vue';
export default {
    components:{
        GridView
    },
    data(){
        return{
            blogs:[]
        }
    },
    computed:{
        userId(){
            return this.$store.getters.userId;
        }
    },
    async created(){
        const response = await fetch(`https://blog-villa-default-rtdb.firebaseio.com/blogs/${this.userId}.json`);
            const responseData = await response.json();   
            const ridam = Object.keys(responseData);   
            console.log(responseData);
            ridam.forEach(element => {
                this.blogs.push(responseData[element]);
                
            });
            
    }
    
}
</script>
<style scoped>
.grid-container {
       justify-items: center;
  display: inline-grid;
        grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
        grid-gap: 1rem;
  overflow-y: auto;
   overflow-x:hidden;
   height: 73vh;
   width: 80vw;
   margin-top: 3rem;
   }
   .grid-container::-webkit-scrollbar{
   width: 5px;
}
.grid-item{
    width:80%
}
.head{
    font-size: 2rem;
}
</style>