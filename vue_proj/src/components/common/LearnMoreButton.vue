<template>
    <a class="btn-style">{{ title }}</a>
</template>

<script>
export default {
    name: 'LearnMoreButton',
    props: {
        title: {
            type: String,
            default: '',
        },
        url: {
            type: String,
            default: '/',
        }
    },

}
</script>

<style>
a.btn-style {
    padding: 15px 20px;
    position: relative;
    left: 730px;
    margin: 50px 0px 0px 0px;
    text-transform: uppercase;
    background-color: #e8e3d3;
    font-family: "Ruda", sans-serif;
    font-weight: 1000;
    color: #5A5A5A;
    display: inline-block;
    position: relative;
    border-bottom: none;
    text-decoration: none;
    margin-bottom: 25px;
    margin-right: 50px;
    line-height: 24px;
    font-size: 16px;
}

a.btn-style:after {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-5 0 23 23' width='40' height='50'%3E%3Cpath d='m6.733,23.888l-.707-.707,10.827-10.827c.095-.095.146-.22.146-.354s-.052-.259-.146-.354L6.026.819l.707-.707,10.827,10.827c.283.283.439.66.439,1.061s-.156.777-.439,1.061l-10.827,10.827Z' fill='white'/%3E%3C/svg%3E");
    position: absolute;
    
    background-color: rgb(74, 72, 101);
    top: 0;
    bottom: 0;
    width: 55px;
    height: 55px;
    right: -50px;
    top: 50%;
    margin-top: -28px;
}
</style>