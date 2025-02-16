<template>
    <div class="history-block">
        <Header></Header>
        <BreadCrumbs/>
        <ArticleCard/>
        <FilmCard/>
        <FilmCard :filmUrl=this.filmUrl :title="this.title"></FilmCard>
        <AccordionCard></AccordionCard>
        <Footer></Footer>
    </div>

</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import ArticleCard from '@/components/AnniversaryPage/ArticleCard.vue';
import FilmCard from '@/components/AnniversaryPage/FilmCard.vue';
import AccordionCard from '@/components/AnniversaryPage/AccordionCard.vue'


export default {
    name: 'HistoryPage',
    components: { Header, Footer, BreadCrumbs, ArticleCard, FilmCard, AccordionCard },
    data() {
        return {
            filmUrl: "https://rutube.ru/play/embed/c143e1dc964e9b5c2e4f3ac11de22561/",
            title:"Поздравления от преподавателей"

        }
    }
}
</script>
<style scoped></style>