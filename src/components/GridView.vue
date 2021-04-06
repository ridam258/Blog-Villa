<template>
    <div class="is-flex is-justify-content-center is-align-items-center">
    <div class="other">
        <base-card class="p-0">
            <div class="is-flex is-justify-content-center" style="width:100%">
                <img style="height:20vh; object-fit:cover; width:100%" class="mb-2" :src="blog.image" alt="">
            </div>
            <div class="px-3 py-2">
            <h1 style="height:7vh;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;overflow: hidden;" class="has-text-weight-bold is-capitalized">{{blog.title}}</h1>
            <p class="is-size-7">{{blog.data.substring(0,10)}}</p>
            </div>
        </base-card>
    </div>
</div>
</template>
<script>
export default {
    props:['blog']
}
</script>
<style scoped>
.other{
    width: 100%;
}
</style>