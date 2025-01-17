<template>
    <div class="current-deal-block">
        <Header></Header>
        <div>
            <DocumentList></DocumentList>
            <InformBlock v-for="(informblock, index) in informs" :key="index" :imgUrl=informblock.imgUrl :text="informblock.text" 
            :links="informblock.links"/>
        </div>
        <Footer></Footer>
    </div>

</template>

<script>
import Header from '../components/common/Header.vue'
import Footer from '../components/common/Footer.vue'
import DocumentList from '../components/DocumentList.vue';
import InformBlock from '../components/InformBlock.vue';
import axios from 'axios';


export default {
    name: 'CurrentDealPage',
    components: { Header, Footer, DocumentList, InformBlock },

    data() {
        return {
            informs: []
        };
    },
    created(){
        this.fetchInforms();
    },
    methods: {
        async fetchInforms(){
            try {
                const response = await axios.get("http://localhost:3000/informs");
                this.informs = response.data;
            }
            catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        }
    }
}
</script>
<style>

</style>
