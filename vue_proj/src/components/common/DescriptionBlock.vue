<template>
    <div class="description-block">
        <h1>{{ title }}</h1>
        <div v-html="content"></div> 
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        } ,
        content: {
            type: String,
            default: ''
        } 
    }
}
</script>

<style scoped>
.description-block {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    padding: 30px;
    
}
.description-block h1{
    padding: 10px 0px 10px 0px;
    align-self: center;
}

</style>