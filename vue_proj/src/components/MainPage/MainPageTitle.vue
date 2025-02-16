<template>
    <div class="main-text-sections-description">
        <h1 :style="{color:textColor}"  >{{ this.title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'MainPageTitle',
    props: {
        title: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: '#e8e3d3',
        },
        lineColor: {
            type: String,
            default: '#e8e3d3'
        }
    },

    computed: {
        textColor() {
            return this.color;
        },
        lineStyle() {
            return {
                backgroundColor: this.lineColor
            }
        }
    }
}
</script>

<style scoped>
.main-text-sections-description {
    display: flex;
    margin: 30px 0 50px 0; 
    justify-content: center;
    font-family: "Ruda", sans-serif;
    column-gap: 15px;
    font-weight: 500;
    color: var(--font-color-dark-primary);
}

h1 {
    position: relative; 
    font-size: 25px;
    color: #e8e3d3;
    font-style: normal;
}

h1::before {
    content: ""; 
    position: absolute; 
    left: -360px; 
    top: 50%; 
    height: 2px;
    width: 340px;
    background-color: v-bind('lineStyle.backgroundColor');
    transform: translateY(-50%); 

}

h1::after {
    content: ""; 
    position: absolute; 
    right: -360px; 
    top: 50%;
    height: 2px;
    width: 340px;
    background-color: v-bind('lineStyle.backgroundColor');
    transform: translateY(-50%); 
}
</style>