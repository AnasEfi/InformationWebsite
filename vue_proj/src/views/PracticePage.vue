<template>
    <div class="history-block">
        <Header></Header>
        <BreadCrumbs />
        <section class="document-block">
        <InfoBlock :title="title" :content="safeContent"></InfoBlock>
            <MainPageTitle :title="titleStudyMaterialDocs" lineColor="#4A4865" color="#4A4865" />
            <StudyMaterialDocsList :documents="this.studyDocs"></StudyMaterialDocsList>
        </section>
        <Footer></Footer>
    </div>

</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import DOMPurify from 'dompurify';
import InfoBlock from '@/components/PracticePage/InfoBlock.vue';
import StudyMaterialDocsList from '@/components/MainPage/StudyMaterialDocsList.vue';
import MainPageTitle from '@/components/MainPage/MainPageTitle.vue';
import axios from 'axios';

export default {
    name: 'PracticePage',
    components: { Header, Footer, BreadCrumbs, InfoBlock, StudyMaterialDocsList, MainPageTitle},
    data() {
        return {
            title: '',
            content: '',
            titleStudyMaterialDocs: 'Доступные документы',
            studyDocs: []
        }
    },

    methods: {
        async fetchInformStudyBlock() {
            try {
                const response = await axios.get('http://localhost:3000/practiceInfo');
                this.title = response.data.title;
                this.content = response.data.content;
            } catch (error) {
                console.error('Error fetching StudyDescription Info', error);

            }
        },
        async fetchStudyDocs() {
            try {
                const response = await axios.get('http://localhost:3000/practiceDocuments');
                this.studyDocs = response.data;
            } catch (error) {
                console.error('Error fetching studyDocs', error);
                this.isLoading = false
            }
        }
    },
    computed: {
        safeContent() {
            return DOMPurify.sanitize(this.content);
        },
    },
    mounted() {
        this.fetchInformStudyBlock();
        this.fetchStudyDocs();
    }
}
</script>
<style scoped>

</style>