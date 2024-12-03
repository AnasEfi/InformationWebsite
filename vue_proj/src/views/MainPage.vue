<template>
    <main class="main-page">
        <Header></Header>
        <section class="main-section">
            <div class="main-img" id="main-img">
                <div class="major-title">
                    <p>Кафедра <br> Автоматизированных <br>систем управления</p>
                </div>
            </div>
            <div class="main-info-block">
                <div><button class="btn-documents-1">
                        Положения о кафедре
                    </button></div>
                <div><button class="btn-documents-2">
                        Документы СМК
                    </button></div>
            </div>
            <section class="news">
                <MainPageTitle :title="titleNews" />
                <ArticleList />
            </section>
        </section>
        <section class="main-sections-description">
            <MainPageTitle :title="titleChapter" />
            <ChapterList></ChapterList>
        </section>
        <section class="study-material">
            <MainPageTitle :title="titleStudyMaterial" />
            <StudyMaterialList></StudyMaterialList>
        </section>
        <section class="study-material-docs">
            <MainPageTitle :title="titleStudyMaterialDocs"></MainPageTitle>
            <StudyMaterialDocsList></StudyMaterialDocsList>

        </section>
        <Footer></Footer>
    </main>

</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ArticleList from '../components/MainPageArticleList.vue';
import ChapterList from '../components/ChapterList.vue';
import MainPageTitle from '../components/MainPageTitle.vue';
import StudyMaterialList from '../components/StudyMaterialList.vue';
import StudyMaterialDocsList from '@/components/StudyMaterialDocsList.vue';

export default {
    name: 'MainPage',
    components: { Header, Footer, ArticleList, ChapterList, MainPageTitle, StudyMaterialList, StudyMaterialDocsList },
    data() {
        return {
            titleNews: 'Актуальные новости',
            titleChapter: 'Основные разделы',
            titleStudyMaterial: 'Материалы сотрудников кафедры',
            titleStudyMaterialDocs: 'Документы по учебной работе',

        };
    }
}
</script>

<style scoped>
.main-img {
    display: flex;
    gap: 30px;
    flex-direction: row;
    background-color: rgb(74, 72, 101);
    width: 100%;
    height: 500px;

    .major-title {
        padding: 0px 0px 10px 20px;
        align-content: end;
    }

    p {
        font-size: 50px;
        font-family: "Ubuntu";
        color: white;
    }
}

.main-info-block {
    display: inline-flex;
    width: 100%;
    justify-content: flex-end;
    gap: 10px;
    background-color: rgb(74, 72, 101);

    .btn-documents-1 {
        background-color: --main-bg-color;
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
        font-size: medium;
        border: 0px solid;
        width: 150px;
        height: 40px;
        cursor: pointer;
        margin-right: 20px;

        &:hover {
            color: white;
            background-color: rgb(74, 72, 101);
            transition: .5s ease-in-out;
        }
    }

    .btn-documents-2 {

        background-color: --main-bg-color;
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
        font-size: medium;
        border: 0px solid;
        width: 150px;
        height: 40px;
        cursor: pointer;
        margin-right: 70px;

        &:hover {
            color: white;
            background-color: rgb(74, 72, 101);
            transition: .5s ease-in-out;
        }
    }
}

section.news,
section.study-material-docs {
    margin: 40px 10px;
    padding: 50px 10vw;
}

section.main-sections-description {

    background-color: #fff;
    width: 100%;
    margin-top: 100px;
    padding: 10px 10vw;

}

section.study-material {
    margin: 40px 10px;
    padding: 50px 10vw;
}


@media(max-width: 768px)  {
    .main-img {
        p {
        padding: 0px 0px 10px 20px;
        font-size: 30px;
        align-content: center;
        }
    }
}
</style>