<template>
    <button v-if="!link" class="button" >
        <slot></slot>
    </button>
    <router-link v-else :to="to">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props:{
        to:{
            type:String,
            require:false,
            default:'/'
        },
        link:{
            type:Boolean,
            require:false,
            default:false
        }
    }
}
</script>