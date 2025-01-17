<template>
    <section class="stuff">
        <Header></Header>
        <div class="main-img">
            <div class="MainTitle">
                <p>Сотрудники кафедры</p>
            </div>
        </div>
        <BreadCrumbs/>
        <div v-if="stuff.length > 0">
            <StuffCardList :stuff="stuff"></StuffCardList>
        </div>
        <div v-else>
            Загрузка данных...
        </div>
        <Footer></Footer>
    </section>
</template>

<script>
import axios from 'axios';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import StuffCardList from '@/components/StuffPage/StuffCardList.vue';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';

export default {
    components: { StuffCardList, Header, Footer, BreadCrumbs },
    name: 'StuffPage',

    data() {
        return {
            stuff: [],
        }
    },
    methods: {
        async fetchStuff() {
            try {
                const response = await axios.get('http://localhost:3000/stuff');
                this.stuff = response.data;
            } catch (error) {
                console.error('Error fetching stuff', error);
            }
        },
    },
    created() {
        this.fetchStuff();
    }
}
</script>

<style scoped>

.main-img{
    display: flex;
    background-color:  rgb(74, 72, 101);
    height: 120px;
    width: 100%;
}
</style>