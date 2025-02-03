<template>
    <div class="parallax-img" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="parallax-text">{{ this.text }}</div>
    </div>
</template>
<script>
export default {
    name: 'ParallaxEffect',
    props: {
        backgroundImage: {
            type: String,
            required: true
        },
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.parallax-img {
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.parallax-text {
    height:block;
    padding: 350px 0px 0px 600px;
    width: 100%;
    font-size: 40px;
    color: white; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
    text-align: center;   
}
</style>