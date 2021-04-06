<template>
    <the-auth @close="closeAuth" :active="active"></the-auth>
    <div class="n">
    <nav class="is-flex is-justify-content-space-between is-align-items-center p-3 nav is-fixed-top">
        <div>
            <router-link to="/home"><h1 class="has-text-weight-bold title" >BlogVilla</h1></router-link>
        </div>
        <div class="is-flex functions is-hidden-mobile">
            <base-button link style="color:black" class="fc" to="/yourblog">Your Blogs</base-button>
            <base-button link style="color:black" class="fc" to="/favorite">Favorite</base-button>
            <base-button link style="color:black" class="fc" to="/addblog">Add Blog</base-button>
            <h1 style="font-weight:500; padding: 0 1rem; cursor:pointer; color:black">Contact Us</h1>
        </div>
        <div class="auth is-hidden-mobile mr-5">
            <base-button v-if="!isLoggedIn" @click="openAuth"  class="is-info">{{cap}}</base-button>
            <base-button v-else @click="logout"  class="is-info">Log Out</base-button>
            <base-button v-if="isLoggedIn && caption!==''" style="border:0px; border-radius:100%;"  class="mx-2 is-uppercase is-info">{{ caption }}</base-button>
        </div>
    </nav>
    </div>
</template>
<script>
import TheAuth from './TheAuth.vue';
export default {
    components:{
      TheAuth 
    },
    data(){
        return{
            active:false,
            cap:'Sign Up'
        }
    },
    methods:{
        openAuth(){
            this.active=true;
        },
        closeAuth(mode){
            if(mode==='login'){
                this.cap = 'Login'
            }
            else{
                this.cap = 'Sign Up'
            }
            
            this.active=false;
        },
        logout(){
            this.$store.dispatch('logout');
        }
    },
    computed:{
        isLoggedIn(){
            console.log(this.$store.getters.isLoggedIn);
            
            return this.$store.getters.isLoggedIn;
        },
        caption(){
            console.log(this.$store.getters.firstName);
            
            return (this.$store.getters.firstName)[0];
        }
    }
}
</script>
<style scoped>
.fc{
    padding: 0 1rem;
    font-weight: 500;
}

.title{
    font-size: 1.5rem;
}
.nav{
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    background-color: #fff;
}
.n{
    position: fixed;
    width: 100vw;
    top: 0;
    z-index: 2;
}
</style>