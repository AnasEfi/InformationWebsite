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
    }
}
</script>

<style>
a.btn-style {
    padding: 15px 20px;
    margin: 0px 80px;
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
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='50' height='50'%3E%3Cpath d='M15.4,9.88,10.81,5.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14,11.29a1,1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0,15.4,9.88Z' fill='white'/%3E%3C/svg%3E");
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