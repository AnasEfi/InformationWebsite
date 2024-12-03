<template>
        <div class="main-text-sections-description">
            <h1>{{this.title}}</h1>
            <span class="inner"></span>
        </div>
</template>

<script>
export default {
    name: 'MainPageTitle',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>

.main-text-sections-description {
    display: flex;
    margin: 30px 0 0 0;
    align-items: center;
    font-family: "Ubuntu", sans-serif;
    column-gap: 15px;
    font-weight: 500;
    font-style: normal;
    font-style: normal;
    margin-bottom: 40px;
    color: var(--font-color-dark-primary);

    .inner {
        height: 3px;
        width: 45px;
        border-radius: 5px;
        background-color: #295773;
    }
    
}



</style>