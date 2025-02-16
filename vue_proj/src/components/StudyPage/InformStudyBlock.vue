<template>
    <div class="study-wrapper">
        <div class="information-block-cover">
            <MainPageTitle :title="this.title"></MainPageTitle>
            <div class="content-wrapper" v-html="content">
            </div>
        </div>
    </div>
</template>
<script>
import MainPageTitle from '../MainPage/MainPageTitle.vue';

export default {
    name: 'InformBlock',
    components: { MainPageTitle },
    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        }
    },
}
</script>
<style scoped>
.study-wrapper {
    background-color: rgb(74, 72, 101);
    padding: 0px 0px 30px 0px;
}

.information-block-cover {
    padding: 30px 60px;
    margin: 0 auto;
    border-radius: 8px;

}
.information-block-cover h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
}

::v-deep .information-block-cover .content-wrapper ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

::v-deep .information-block-cover .content-wrapper ul li {
    background-color: #fff;
    margin-bottom: 10px;
    font-size: 20px;
    padding: 15px;
    border-left: 10px solid rgb(232, 227, 211);;
   
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

}


::v-deep .information-block-cover .content-wrapper ul li:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}


::v-deep .information-block-cover .content-wrapper ul li strong {
    color: #007bff;
}
</style>