<template>
    <div>
        <h2>{{ title }}</h2>
        <br>
        <p>
            {{ text }}
        </p>
        <img :src="imgUrl" >
        <div class="links" v-for="(link, index) in links" :key="index">{{ link }}</div>

        <div class="docs" v-for="(link, index) in documents" :key="index">{{ link }}</div>
    </div>
</template>

<script>
export default {
    name: 'InformBlock',
    props: {
        imgUrl: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        links: {
            type: Array,
            default: () => []
        },
        documents: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style></style>