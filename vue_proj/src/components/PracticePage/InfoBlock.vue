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
    name: 'InfoBlock',
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
    methods: {
        createStyleForIncomeContent() {
            const wrapper = document.createElement('DIV') 
            wrapper.className = 'document-wrapper';
            const target = document.querySelector('.content-wrapper a');
            target.insertAdjacentElement("beforeend", wrapper) ;
            wrapper.appendChild(target) ;
        }
    },
    mounted(){
        
    },
}
</script>
<style scoped>
.study-wrapper {
    background-color: rgb(74, 72, 101);


}

.content-wrapper {
    box-shadow: 1px 1px 8px 1px rgba(13, 13, 22, 0.288);
    border-top: 15px solid rgb(74, 72, 101);
    border-bottom: 15px solid rgb(74, 72, 101);
    background-color: white;
    padding: 20px 40px;
    font-size: 20px;

}

::v-deep .information-block-cover {
    padding: 30px 60px;


}
::v-deep .document-wrapper{
    border: 1px solid black;
}

::v-deep .content-wrapper h3 {
    font-size: 24px;
    color: #333;
    margin: 30px 0px 50px 0px;
    text-align: center;
    position: relative;
}

::v-deep .content-wrapper h3::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -15px;
    width: 50px;
    height: 2px;
    background-color: #333;
    transform: translateX(-50%);
}

::v-deep .information-block-cover ol,
::v-deep .information-block-cover ul {
    margin-left: 20px;
    margin-bottom: 1em;
}

::v-deep .information-block-cover li {
    margin-bottom: 0.5em;
    font-size: 16px;
}



::v-deep .information-block-cover .content-wrapper ol li {
    background-color: #fff;
    margin-bottom: 10px;
    font-size: 20px;
    padding: 15px;
    border-left: 10px solid rgb(232, 227, 211);
    ;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

}


::v-deep .information-block-cover .content-wrapper ul li:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

::v-deep .information-block-cover p {
    margin-bottom: 1em;
    font-size: 20px;
}



::v-deep .information-block-cover .content-wrapper ul li {
    background-color: #fff;
    margin-bottom: 10px;
    font-size: 20px;
    padding: 15px;
    border-left: 10px solid rgb(232, 227, 211);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

}


::v-deep .information-block-cover .content-wrapper ul li:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>