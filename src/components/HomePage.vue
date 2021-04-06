<template>
<div class="first">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi, officia aut autem aperiam perspiciatis beatae minus odit natus libero placeat magni vero quasi, aspernatur, perferendis repellat in consequatur fugit?</p>
</div>
<div class="is-flex is-justify-content-center">
    <div class="card2">
        <base-card class="p-0">
            <div style="width:100%; height:100%;">
                <div :class="{dis:index!==counter, hi:index===counter}" v-for="(blog,index) in results" :key="blog.data" >
                    <div v-if="index===counter" class="is-flex" style="height:100%">
                        <div style="height:100%; width:80%">
                            <img :src="blog.image" style="height:100%; object-fit:cover; width:100%" alt="">
                        </div>
                        <div class="pt-6 px-6 is-flex is-flex-direction-column is-justify-content-space-between" style=" height:100%; width:120%">
                            <div>
                            <h1 class="has-text-weight-bold title is-capitalized" style="display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;overflow: hidden;">{{blog.title}}</h1>
                            <p style="display: -webkit-box;-webkit-line-clamp: 4;-webkit-box-orient: vertical;overflow: hidden;">{{blog.desc}}</p>
                            </div>
                            <p class="py-4">{{blog.data.substring(0,10)}}</p>
                        </div>
                        
                    </div>
                    <div>
                        </div>
                </div>
            </div>
        </base-card>
    </div>
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
            blogs:[],
            counter:0,
            results:[]
        }
    },
    computed:{
        // blogsArray(){
        //     const results=this.blogs.splice(0,3);
        //     return results
        // }
    },
    async created(){
        const response = await fetch(`https://blog-villa-default-rtdb.firebaseio.com/blogs.json`)
        const responseData =await response.json();
        Object.keys(responseData).forEach(element => {
            const ridam =  Object.keys(responseData[element])
            console.log(ridam);
            ridam.forEach(el => {
            const adarsh = responseData[element][el];
            console.log(adarsh);
            this.blogs.push(adarsh);
            });
        });
            console.log(this.blogs);
            this.$store.dispatch('blogs/fillBlog',this.blogs);
            for (let index = 0; index < 3; index++) {
                this.results.push(this.blogs[index]);

            }
    },
    mounted(){
      this.$nextTick(()=>{
         window.setInterval(()=>{
            if(this.counter<this.results.length-1){
               this.counter++;
            }
            else if(this.counter==this.results.length-1){
               this.counter=0;
            }
         },6000)
      })
   }
}
</script>
<style scoped>
.card2{
    margin-top: 8vh;
    height: 40vh;
    width: 70%;
}

.titAuth{
    font-size: 1.5rem;
}
.dis{
   display: none;
   height: 0px;
   width: 0px;
}
.hi{
   width: 100%;
   height:100%
}
.title{
    font-size: 1.5rem;
}
.date{
    position: relative;
    bottom:5vh;
    left:29vw;
    font-size: .9rem;
    /* right: 40vw; */
}
.grid-container {
       justify-items: center;
  display: inline-grid;
        grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
        grid-gap: 1rem;
  overflow-y: auto;
   overflow-x:hidden;
   height: 75vh;
   width: 80vw;
   margin-top: 3rem;
   }
   .grid-container::-webkit-scrollbar{
   width: 5px;
}
/* .other{
    height: 40vh;
    width: 25%;
    padding: 1rem;
    padding-top: 2rem;
    
} */
.grid-item{
    width:80%
}
.first p{
    width: 50%;
}
.first{
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
}
@media only screen and (max-width: 768px) {
    .grid-container{
        grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    }
}
</style>

