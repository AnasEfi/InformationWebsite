<template>
    <main class="main-page">
        <Header></Header>
        <section class="main-section">
            <div class="main-img">
            </div>
            <div class="button-cover">
            <LearnMoreButton title="Узнать больше" url="/"></LearnMoreButton>
        </div>
        </section>
        <nav aria-label="popular links" class="container uw-links">
            <ul class="center-block">
                <li><a href="http://artsuw.org/" title="Arts UW">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                            id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 47 47;"
                            xml:space="preserve" width="47" height="47">
                            <path
                                d="M470.549,111.573L313.237,36.629c-34.628-20.684-77.728-21.051-112.704-0.96L41.451,111.573  c-0.597,0.299-1.216,0.619-1.792,0.96c-37.752,21.586-50.858,69.689-29.272,107.441c7.317,12.798,18.08,23.284,31.064,30.266  l43.883,20.907V375.68c0.026,46.743,30.441,88.039,75.072,101.931c31.059,8.985,63.264,13.384,95.595,13.056  c32.326,0.362,64.531-4,95.595-12.949c44.631-13.891,75.046-55.188,75.072-101.931V271.104l42.667-20.395v175.957  c0,11.782,9.551,21.333,21.333,21.333c11.782,0,21.333-9.551,21.333-21.333v-256C512.143,145.615,492.363,122.473,470.549,111.573z   M384,375.787c0.011,27.959-18.129,52.69-44.8,61.077c-27.046,7.728-55.073,11.479-83.2,11.136  c-28.127,0.343-56.154-3.408-83.2-11.136c-26.671-8.388-44.811-33.118-44.8-61.077v-84.309l70.763,33.707  c17.46,10.368,37.401,15.816,57.707,15.765c19.328,0.137,38.331-4.98,54.976-14.805L384,291.477V375.787z M452.267,211.733  l-160.896,76.8c-22.434,13.063-50.241,12.693-72.32-0.96l-157.419-74.88c-17.547-9.462-24.101-31.357-14.639-48.903  c3.2-5.934,7.998-10.853,13.85-14.201l159.893-76.373c22.441-13.034,50.233-12.665,72.32,0.96l157.312,74.944  c11.569,6.424,18.807,18.555,18.965,31.787C469.354,193.441,462.9,205.097,452.267,211.733L452.267,211.733z" />
                        </svg>
                        <span>О кафедре</span>
                    </a>


                </li>
                <li><a href="http://uw.edu/maps" title="Maps">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="47" height="50">
                            <g id="_01_align_center" data-name="01 align center">
                                <path
                                    d="M5,19H9.414L23.057,5.357a3.125,3.125,0,0,0,0-4.414,3.194,3.194,0,0,0-4.414,0L5,14.586Zm2-3.586L20.057,2.357a1.148,1.148,0,0,1,1.586,0,1.123,1.123,0,0,1,0,1.586L8.586,17H7Z" />
                                <path
                                    d="M23.621,7.622,22,9.243V16H16v6H2V3A1,1,0,0,1,3,2H14.758L16.379.379A5.013,5.013,0,0,1,16.84,0H3A3,3,0,0,0,0,3V24H18.414L24,18.414V7.161A5.15,5.15,0,0,1,23.621,7.622ZM18,21.586V18h3.586Z" />
                            </g>
                        </svg>
                        <span>Учебная работа</span></a>
                </li>
                <li><a href="https://my.uw.edu/" title="MyUW">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_3" height="50" viewBox="0 0 24 24" width="47"
                            data-name="Layer 3">
                            <path
                                d="m19.535 3.122-1.656-1.658a4.968 4.968 0 0 0 -3.536-1.464h-6.343a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-12.343a4.968 4.968 0 0 0 -1.465-3.535zm-1.414 1.414a2.932 2.932 0 0 1 .379.464h-2.5v-2.5a3.1 3.1 0 0 1 .465.38zm.879 14.464a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3-3v-14a3 3 0 0 1 3-3h6v3a2 2 0 0 0 2 2h3zm-3-10a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2zm1 5a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-.192 3.413a1 1 0 0 1 -.217 1.394 6.464 6.464 0 0 1 -3.456 1.193 3.252 3.252 0 0 1 -2-.7c-.328-.225-.453-.3-.7-.3a3.951 3.951 0 0 0 -1.832.794 1 1 0 0 1 -1.214-1.588 5.861 5.861 0 0 1 3.05-1.206 3.025 3.025 0 0 1 1.832.655 1.347 1.347 0 0 0 .864.345 4.586 4.586 0 0 0 2.277-.809 1 1 0 0 1 1.396.222z" />
                        </svg><span>ВКР</span>
                    </a> </li>
                <li><a href="http://gohuskies.com" title="Athletics"><svg xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="47" height="50">
                            <path
                                d="M19,2h-1V1c0-.552-.448-1-1-1s-1,.448-1,1v1H8V1c0-.552-.448-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v12c0,2.757,2.243,5,5,5h4c.552,0,1-.448,1-1s-.448-1-1-1H5c-1.654,0-3-1.346-3-3V10H23c.552,0,1-.448,1-1v-2c0-2.757-2.243-5-5-5Zm3,6H2v-1c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v1Zm-3.121,4.879l-5.707,5.707c-.755,.755-1.172,1.76-1.172,2.829v1.586c0,.552,.448,1,1,1h1.586c1.069,0,2.073-.417,2.828-1.172l5.707-5.707c.567-.567,.879-1.32,.879-2.122s-.312-1.555-.878-2.121c-1.134-1.134-3.11-1.134-4.243,0Zm2.828,2.828l-5.708,5.707c-.377,.378-.879,.586-1.414,.586h-.586v-.586c0-.534,.208-1.036,.586-1.414l5.708-5.707c.377-.378,1.036-.378,1.414,0,.189,.188,.293,.439,.293,.707s-.104,.518-.293,.707Zm-16.707-1.707c0-.552,.448-1,1-1h7c.552,0,1,.448,1,1s-.448,1-1,1H6c-.552,0-1-.448-1-1Zm6,4c0,.552-.448,1-1,1H6c-.552,0-1-.448-1-1s.448-1,1-1h4c.552,0,1,.448,1,1Z" />
                        </svg><span>Практика</span></a> </li>
                <li><a href="http://uw.edu/social" title="UW social media links"><svg xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1" height="50" viewBox="0 0 24 24" width="47" data-name="Layer 1">
                            <path
                                d="m20 0a4 4 0 0 0 -4 4 1 1 0 0 0 2 0 2 2 0 0 1 4 0v11.026a4.948 4.948 0 0 0 -3-1.026 5 5 0 0 0 -4.145 2.207 3.98 3.98 0 0 0 -5.71 0 5 5 0 0 0 -4.145-2.207 4.948 4.948 0 0 0 -3 1.026v-11.026a2 2 0 0 1 4 0 1 1 0 0 0 2 0 4 4 0 0 0 -8 0v15a5 5 0 0 0 10 0 2 2 0 0 1 4 0 5 5 0 0 0 10 0v-15a4 4 0 0 0 -4-4zm-15 22a3 3 0 1 1 3-3 3 3 0 0 1 -3 3zm14 0a3 3 0 1 1 3-3 3 3 0 0 1 -3 3z" />
                        </svg><span>Наука</span></a> </li>
                <li><a href="http://www.lib.washington.edu" title="Libraries"><svg xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="47" height="50">
                            <path
                                d="M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Zm6,13A6,6,0,0,0,6,23a1,1,0,0,0,2,0,4,4,0,0,1,8,0,1,1,0,0,0,2,0ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,18,2Zm6,13a6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8ZM6,2A2,2,0,1,0,8,4,2,2,0,0,0,6,2ZM2,15a4,4,0,0,1,4-4A1,1,0,0,0,6,9a6.006,6.006,0,0,0-6,6,1,1,0,0,0,2,0Z" />
                        </svg><span>Сотрудники</span></a> </li>
                <li><a href="http://www.uwmedicine.org" title="UW Medicine"><svg xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="47" height="50">
                            <path
                                d="M19.9,3.091A4,4,0,0,0,14.9.153L13.176.646A2.981,2.981,0,0,0,12,1.3,2.981,2.981,0,0,0,10.824.646L9.1.153A4,4,0,0,0,4.105,3.091,5,5,0,0,0,0,8v7a5.006,5.006,0,0,0,5,5h6v2H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2H13V20h6a5.006,5.006,0,0,0,5-5V8A5,5,0,0,0,19.9,3.091ZM13,3.531a1,1,0,0,1,.725-.961l1.725-.493A2,2,0,0,1,18,4V7.938a2.006,2.006,0,0,1-1.45,1.921L13,10.873ZM6.8,2.4A1.993,1.993,0,0,1,8.55,2.077l1.725.493A1,1,0,0,1,11,3.531v7.342L7.45,9.859A2.006,2.006,0,0,1,6,7.938V4A1.987,1.987,0,0,1,6.8,2.4ZM22,15a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V8A3,3,0,0,1,4,5.184V7.938a4.014,4.014,0,0,0,2.9,3.845l3.451.987a6.019,6.019,0,0,0,3.3,0l3.451-.987A4.014,4.014,0,0,0,20,7.938V5.184A3,3,0,0,1,22,8Z" />
                        </svg><span>Ресурсы</span></a> </li>
                <li><a href="http://www.uwmedicine.org" title="UW Medicine"><svg xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="47" height="50">
                            <path
                                d="M23,22H22V14a5.006,5.006,0,0,0-5-5H13V6.039A2.5,2.5,0,0,0,14.5,3.75,7.293,7.293,0,0,0,12.738.327a1,1,0,0,0-1.476,0A7.293,7.293,0,0,0,9.5,3.75,2.5,2.5,0,0,0,11,6.039V9H7a5.006,5.006,0,0,0-5,5v8H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2ZM7,11H17a3,3,0,0,1,3,3v1.98c-.936-.1-1.5-.7-1.5-.98a1,1,0,0,0-2,0c0,.343-.682,1-1.75,1C13.661,16,13,15.306,13,15a1,1,0,0,0-2,0c0,.343-.682,1-1.75,1-1.089,0-1.75-.694-1.75-1a1,1,0,0,0-2,0c0,.315-.579.888-1.5.981V14A3,3,0,0,1,7,11ZM4,17.979A4.156,4.156,0,0,0,6.5,17a4.309,4.309,0,0,0,5.5.015A4.309,4.309,0,0,0,17.5,17a4.156,4.156,0,0,0,2.5.978V22H4Z" />
                        </svg><span>Юбилей</span></a> </li>
            </ul>
        </nav>
        <section class="news">
            <MainPageTitle :title="titleNews" />
            <ArticleList />
            <LearnMoreButton title="Все новости" url="/"></LearnMoreButton>
        </section>

        <section class="study-material">
            <MainPageTitle :title="titleStudyMaterial" lineColor="#4A4865" color="#4A4865" />
            <PersonStudyMaterialList :materials="this.materials" />
            <LearnMoreButton title="Все материалы" url="/"></LearnMoreButton>
        </section>
        <section class="study-material-docs">
            <MainPageTitle :title="titleStudyMaterialDocs"></MainPageTitle>
            <StudyMaterialDocsList :documents="this.studyDocs"></StudyMaterialDocsList>
            <LearnMoreButton title="Все материалы" url="/"></LearnMoreButton>
        </section>
        <Footer></Footer>
    </main>

</template>

<script>
import axios from 'axios';

import Header from '../components/common/Header.vue'
import Footer from '../components/common/Footer.vue'
import ArticleList from '../components/MainPage/MainPageArticleList.vue';
import MainPageTitle from '../components/MainPage/MainPageTitle.vue';
import StudyMaterialDocsList from '@/components/MainPage/StudyMaterialDocsList.vue';
import PersonStudyMaterialList from '../components/MainPage/PersonStudyMaterialList.vue';
import LearnMoreButton from '@/components/common/LearnMoreButton.vue';

export default {
    name: 'MainPage',
    components: { Header, Footer, ArticleList, MainPageTitle, PersonStudyMaterialList, StudyMaterialDocsList, LearnMoreButton },
    data() {
        return {
            titleNews: 'Актуальные новости',
            titleChapter: 'Основные разделы',
            titleStudyMaterial: 'Материалы сотрудников кафедры',
            titleStudyMaterialDocs: 'Документы по учебной работе',
            materials: [],
            studyDocs:[],
            isLoading: true,
        };
    },
    methods: {
        async fetchPersonStudyMaterials() {
            try {
                const response = await axios.get('http://localhost:3000/staffDocuments');
                this.materials = response.data;
            } catch (error) {
                console.error('Error fetching stuffDocuments', error);
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
    mounted() {
         this.fetchPersonStudyMaterials(); 
         this.fetchStudyDocs();
    }
   
}
</script>

<style scoped>
.main-section {
    padding: 10px 10px 80px 10px;
    box-shadow: inset 0 0 20px 1px rgba(0, 0, 0, 0.2);
}

.main-img {
    
    background-image: url('../assets/images/main-foto.PNG');
    margin: 50px 0px 0px 0px;
    height: 300px;
    background-repeat: no-repeat;
    background-size: cover;

    p {
        font-size: 50px;
        font-family: "Ruda";
        color: white;
    }
}

.button-cover{
    position: relative;
    right: 700px;
}

nav.container {
    display: flex;
    justify-content: center;
    background-color: #e8e3d3;
    margin-top: 10px;
    height: 150px;
    padding: 0px 0px;
}


nav.container ul {
    display: flex;
    background-color: #fff;
    flex-wrap: wrap;
    position: relative;
    margin-top: -70px;
    padding: 70px 30px;
    align-content: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.2);
}


nav.container ul li {
    justify-content: center;

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Ruda, sans-serif;
        transition: transform 0.2s ease;
        width: 130px;
        gap: 10px;
        font-weight: 800;
        color: rgb(74, 72, 101);
        text-align: center;

    }

    a:hover {
        transform: scale(1.1);
        color: #5A5A5A;
    }

}

nav.container ul li:not(:last-child) {
    border-right: 1px solid rgba(56, 56, 56, 0.158);
}


section.news,
section.study-material-docs {

    padding: 40px 20px;
    background-color: rgb(74, 72, 101);

}

section.main-sections-description {
    background-color: #fff;
    width: 100%;
    margin-top: 100px;
    padding: 10px 20px;

}

section.study-material {
    padding: 40px 20px;
}


@media(max-width: 768px) {
    .main-img {
        p {
            padding: 0px 0px 10px 20px;
            font-size: 30px;
            align-content: center;
        }
    }
}
</style>