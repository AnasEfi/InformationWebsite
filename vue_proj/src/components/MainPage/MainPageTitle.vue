<template>
    <div class="main-text-sections-description">
        <h1>{{ this.title }}</h1>
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

<style scoped>
.main-text-sections-description {
    display: flex;
    margin: 30px 0 40px 0; 
    justify-content: center;
    font-family: "Ruda", sans-serif;
    column-gap: 15px;
    font-weight: 500;
    color: var(--font-color-dark-primary);
}

h1 {
    position: relative; /* Родительский элемент для псевдоэлементов */
    font-size: 25px;
    color: #e8e3d3;
    font-style: normal;
}

h1::before {
    content: ""; 
    position: absolute; 
    left: -360px; 
    top: 50%; 
    height: 1px;
    width: 340px;
    background-color: #e8e3d3;
    transform: translateY(-50%); 
}

h1::after {
    content: ""; 
    position: absolute; 
    right: -360px; 
    top: 50%;
    height: 1px;
    width: 340px;
    background-color:#e8e3d3;
    transform: translateY(-50%); /* Центрируем вертикально */
}
</style>