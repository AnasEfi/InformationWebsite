<template>
    <div class="history-block">
        <Header></Header>
        <ParallaxEffect :backgroundImage="parallaxImage" :text="textForWrapper"></ParallaxEffect>
        <BreadCrumbs/>
        <div class="content-wrapper">
        <ArticleCard :title="this.articleInfo.title" :content="this.articleInfo.content"></ArticleCard>
        
        <PhotoListCarousel></PhotoListCarousel>
    </div>
        <Footer></Footer>
    </div>

</template>

<script>
import axios from 'axios';
import Header from '../components/common/Header.vue'
import Footer from '../components/common/Footer.vue'
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import ArticleCard from '@/components/PicturePage/ArticleCard.vue'
import ParallaxEffect from '@/components/common/ParallaxEffect.vue';
import parallaxImage from '@/assets/images/parallax.jpg';
import PhotoListCarousel from '@/components/PicturePage/PhotoListCarusel.vue'

export default {
    name: 'HistoryPage',
    components: { Header, Footer, BreadCrumbs, ArticleCard, ParallaxEffect, PhotoListCarousel },
    data() {
        return {
            articleInfo: {},
            textForWrapper : "Портрет кафедры",
            parallaxImage,
        }
        
    },
    methods: {
        async fetchArticle() {
            try {
                const response = await axios.get('http://localhost:3000/picture');
                this.articleInfo = response.data[0];
            } catch (error) {
                console.error('Error fetching DescriptionOfHeads', error);

            }
        }
    },
    created() {
        this.fetchArticle(),
        this.parallaxImage='https://asugubkin.ru/about/history/picture/.keep/.p1.jpg'
    }

}

</script>
<style scoped>
.content-wrapper{
    padding: 30px 50px;
}
</style>