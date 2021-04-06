<template>
<div class="is-flex is-justify-content-center head " style="margin-top:5rem">
<h1 class="has-text-weight-bold">Add New Blog Here!</h1>
</div>
<div class="is-flex is-align-items-center cardHead" style="width:100%; margin-top:3rem">
    <base-card class="card">
        <form @submit.prevent="submitForm" class="is-flex is-justify-content-center">
            <div style="width:100%">
                <label for="title">Blog Title</label>
            <br>
            <input type="text" id="title" v-model="title"><br>
            <label for="image">Blog Image Url</label><br>
            <input type="text" id="image" v-model="image"><br>
            <label for="description">Blog Description</label><br>
            <textarea id="description"  rows="5"   class="textarea has-fixed-size" v-model="desc"></textarea>
            <button class="button is-light has-text-weight-bold">Publish</button>
            
            </div>
            
        </form>
    </base-card>

</div>
    
    
</template>

<script>
export default {
    data(){
        return{
            title:'',
            image:'',
            desc:'',
        }
    },
    methods:{
        submitForm(){
            this.$store.dispatch('blogs/loadBlog' , {
                title:this.title,
                image:this.image,
                desc:this.desc,
                data:new Date()
            })
        }
    }
}
</script>

<style scoped>

label{
    font-size: 1rem;
    font-weight: 500;
    
}
input{
    margin-bottom: 1rem;
    margin-top: .35rem;
    width: 95%; 
}
textarea{
    margin-top: .35rem;
    width: 95%;
    border: 1px solid #7e7e7e;
    min-width:0px;
}
button{
    border: 1px solid black ;
    margin: 1rem 0;
}
.head{
    font-size: 2rem;
}
.card{
    width: 50%;
}
.cardHead{
    height:60vh
}
@media only screen and (max-width: 768px){
    .head{
        font-size: 1rem;
    }
    .card{
        width: 90%;
    }
    .cardHead{
        height: 63vh;
    }
    label{
        font-size: .75rem;
    }
    body{
        overflow-y: hidden;
    }
}
</style>