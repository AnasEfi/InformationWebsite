<template>
    <div class="history-block">
        <Header></Header>
        <section class="history-heads-block">
            <BreadCrumbs></BreadCrumbs>
            <div class="description-block">
            <DescriptionBlock :title="description.title" :content="safeContentDescription"></DescriptionBlock>
            <img src="../assets/images/Heads1975.png" alt="year 1975">
            </div>
            <HeadPersonCardList :personsList="headsInfo"></HeadPersonCardList>
        </section>
        <Footer></Footer>
    </div>

</template>

<script>
import DOMPurify from 'dompurify';
import Header from '../components/common/Header.vue'
import Footer from '../components/common/Footer.vue'
import DescriptionBlock from '../components/common/DescriptionBlock.vue'
import axios from 'axios';
import HeadPersonCardList from '@/components/HeadsPage/HeadPersonCardList.vue';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';

export default {
    name: 'HistoryPage',
    components: { Header, Footer, DescriptionBlock, HeadPersonCardList, BreadCrumbs },
    data() {
        return {
            description: [],
            headsInfo: []
        }
    },
    methods: {
        async fetchDescription() {
            try {
                const response = await axios.get('http://localhost:3000/aboutHistoryHeadsInfo');
                this.description = response.data;
            } catch (error) {
                console.error('Error fetching DescriptionOfHeads', error);

            }
        },
        async fetchHeadsInfo() {
            try {
                const response = await axios.get('http://localhost:3000/aboutHistoryHeads');
                this.headsInfo = response.data;
            
            } catch (error) {
                console.error('Error fetching HeadsInfo', error);

            }
        },

    },

    computed: {
        safeContentDescription() {
            return DOMPurify.sanitize(this.description.content);
        },
    },
    mounted() {
        this.fetchDescription();
        this.fetchHeadsInfo();
    },

}
</script>

<style scoped>

.description-block{
    display: flex;
}
</style>