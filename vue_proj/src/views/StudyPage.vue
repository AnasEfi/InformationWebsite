<template>
    <div class="history-block">
        <Header></Header>
        <BreadCrumbs />
        <InformStudyBlock :title="title" :content="safeContent"></InformStudyBlock>
        <section class="document-block">
            <MainPageTitle :title="titleStudyMaterial" lineColor="#4A4865" color="#4A4865" />
            <PersonStudyMaterialList :materials="this.materials" />
            <LearnMoreButton title="Все материалы" url="/"></LearnMoreButton>
        </section>
        <section class="document-block">
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
import InformStudyBlock from '@/components/StudyPage/InformStudyBlock.vue';
import PersonStudyMaterialList from '../components/MainPage/PersonStudyMaterialList.vue';
import StudyMaterialDocsList from '@/components/MainPage/StudyMaterialDocsList.vue';
import MainPageTitle from '@/components/MainPage/MainPageTitle.vue';
import axios from 'axios';
import LearnMoreButton from '@/components/common/LearnMoreButton.vue';

export default {
    name: 'StudyPage',
    components: { Header, Footer, BreadCrumbs, InformStudyBlock, PersonStudyMaterialList, StudyMaterialDocsList, MainPageTitle, LearnMoreButton },
    data() {
        return {
            title: '',
            content: '',

            titleStudyMaterial: 'Материалы сотрудников кафедры',
            titleStudyMaterialDocs: 'Документы по учебной работе',
            materials: [],
            studyDocs: []
        }
    },

    methods: {
        async fetchInformStudyBlock() {
            try {
                const response = await axios.get('http://localhost:3000/directionOfWork');
                this.title = response.data.title;
                this.content = response.data.content;
            } catch (error) {
                console.error('Error fetching StudyDescription Info', error);

            }
        },
        async fetchPersonStudyMaterials() {
            try {
                const response = await axios.get('http://localhost:3000/staffDocuments');
                this.materials = response.data;
            } catch (error) {
                console.error('Error fetching studyDocs', error);
                this.isLoading = false
            }
        },
        async fetchStudyDocs() {
            try {
                const response = await axios.get('http://localhost:3000/documents');
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
        this.fetchPersonStudyMaterials();
        this.fetchStudyDocs();
    }
}
</script>
<style scoped>
.document-block{
    padding: 30px 0px 0px 0px;
}
</style>