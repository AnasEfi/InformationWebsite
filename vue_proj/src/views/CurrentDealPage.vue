<template>
    <div class="current-deal">
        <Header></Header>
        <SectionTitle :title="this.title" />

        <section class="current-deal-block">
            <BreadCrumbs></BreadCrumbs>
            <div v-for="(block, index) in informs" :key="index">
                <div v-if="block.imgUrl !== ''">
                    <InfoCardWithImg :title="block.title" :imgUrl="block.imgUrl" :content="block.content" />
                </div>
                <div v-else>
                    <InfoBlock :title="block.title" :content="block.content"></InfoBlock>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>


</template>

<script>
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';
import axios from 'axios';
import SectionTitle from '@/components/common/SectionTitle.vue';
import InfoCardWithImg from '@/components/common/InfoCardWithImg.vue';
import InfoBlock from '@/components/PracticePage/InfoBlock.vue';
import DOMPurify from 'dompurify'
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';

export default {
    name: 'CurrentDealPage',
    components: { Header, Footer, SectionTitle, InfoCardWithImg, InfoBlock, BreadCrumbs },

    data() {
        return {
            informs: [],
            title: "Информация о кафедре"
        };
    },
    methods: {
        async fetchCurrentDealInfo() {
            try {
                const response = await axios.get('http://localhost:3000/about');
                this.informs = response.data;
                console.log(this.informs);
            } catch (error) {
                console.error('Error fetching currentDeal', error);
            }
        },
        safeContent(content) {
        const cleanContent = DOMPurify.sanitize(content);
        return cleanContent;
        },

    },
   
    mounted() {
        this.fetchCurrentDealInfo();
    }
}
</script>
<style scoped></style>