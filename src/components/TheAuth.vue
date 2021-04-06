<template>
    <teleport to='body'>
        <div>
            <div class="modal" :class="{'is-active':activeStatus}">
                <div class="modal-background"  style="height:100vh" @click="closeModal"></div>
                <div class="modal-card" style="max-width:100vw;">
                    <div style="">
                        <base-card class="is-flex is-justify-content-center; padding:2rem" >
                            <form style="height:50vh; width:100%" @submit.prevent="submitForm" class="is-flex is-justify-content-center is-align-items-center">
                                <div v-if="mode==='signUp'">
                                    <div  class="is-flex is-justify-content-space-between">
                                        <div class="mr-3">
                                            <label for="first">First Name</label>
                                            <input   type="text" id="first" class=" input is-small" v-model="firstName">
                                        </div>
                                        <div class="ml-3">
                                            <label for="last">Last Name</label>
                                            <input   type="text" id="last" class=" input is-small" v-model="lastName">
                                        </div>
                                    </div>
                                    <label for="email">Your E-Mail</label><br>
                                    <input class="input is-small" type="email" id="email" v-model="email"><br>
                                    <label for="password">Your Password</label><br>
                                    <input class="input is-small" type="password" id="password" v-model="password">
                                    <button class="button is-info my-4" @click="closeModal">Register</button>
                                    <h1 class="has-text-weight-bold is-size-6">Already an user? <span @click="loginClicked" style="color:#2793DA; cursor:pointer">Log in</span></h1>
                                </div>
                                <div v-else style="width:80%">
                                    <label for="email">Your E-Mail</label><br>
                                    <input class="input is-small" type="email" id="email" v-model="email"><br>
                                    <label for="password">Your Password</label><br>
                                    <input class="input is-small" type="password" id="password" v-model="password">
                                    <button class="button is-info my-4" @click="closeModal">Login</button>
                                    <h1 class="has-text-weight-bold is-size-6">Not an user? <span @click="registerClicked" style="color:#2793DA; cursor:pointer">Register Here</span></h1>
                                </div>
                            </form>
                        </base-card>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
    
</template>
<script>
export default {
    data(){
        return{
            mode:"signUp",
            activeStatus:false,
            firstName:'',
            lastName:'',
            email:'',
            password:'',
        }
    },
    props:['active'],
    watch:{
        active(value){
            this.activeStatus=value;
            
        }
    },
    methods:{
        closeModal(){
        
        this.$emit('close',this.mode);
        },
        loginClicked(){
            this.mode='login'
        },
        registerClicked(){
            this.mode='signUp'
        },
        async submitForm(){
            await this.$store.dispatch('auth',{
                email:this.email,
                password:this.password,
                firstName:this.firstName,
                lastName:this.lastName,
                mode:this.mode
            });
            this.activeStatus=false;
        this.email='';
        this.password='';
        this.firstName='';
        this.lastName='';
            
        }
    },
    emits:['close']
}
</script>
<style scoped>

input{
    font-size: 5rem;
    margin: 1rem 0rem .5rem 0rem;
}

label{
    font-weight: 600;
    font-size: 1.2rem;
}
</style>