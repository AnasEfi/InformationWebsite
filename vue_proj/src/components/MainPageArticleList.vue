<template>
    <div>
        <div class="news-card-block">
            <ArticleCard v-for="(article, index) in articles" :key="index"
                class="news-info-item unicamp-box event-caption" :publisher="article.publisher"
                :articleTitle="article.articleTitle" :articleShortDescripion="article.articleShortDescripion"
                :articleContent="article.articleContent" :articlePublishDate="new Date(article.articlePublishDate)" />
        </div>

        <div class="all-news-container">
            <a href="/pages/news">
                <span class="btn">
                    Все новости
                    <i class="fa-solid fa-arrow-right"></i>
                </span>
            </a>
        </div>
    </div>
</template>
<script>

import ArticleCard from './ArticleCard.vue';

export default {
    name: 'ArticleList',
    components: { ArticleCard },
    data() {
        return {
            articles: [
                {
                    publisher: "Леонов Дмитрий Геннадьевич",
                    articleTitle: "Заседание кафедры",
                    articleShortDescripion: "28 октября в 17:00 состоится заседание кафедры АСУ (аудитория 1215а)",
                    articleContent: "Повестка дня: Утверждение учебных планов по направлениям бакалавриата и магистратуры на 2025 год набора и корректировка текущих учебных планов. Формирование государственных экзаменационных комиссий на 2025 год.",
                    articlePublishDate: "2001-10-20T17:00:00Z"
                },
                {
                    publisher: "Леонов Дмитрий Геннадьевич",
                    articleTitle: "Заседание кафедры",
                    articleShortDescripion: "28 октября в 17:00 состоится заседание кафедры АСУ (аудитория 1215а)",
                    articleContent: "Повестка дня: Утверждение учебных планов по направлениям бакалавриата и магистратуры на 2025 год набора и корректировка текущих учебных планов. Формирование государственных экзаменационных комиссий на 2025 год.",
                    articlePublishDate: "2001-10-20T17:00:00Z"
                },
                {
                    publisher: "Леонов Дмитрий Геннадьевич",
                    articleTitle: "Заседание кафедры",
                    articleShortDescripion: "28 октября в 17:00 состоится заседание кафедры АСУ (аудитория 1215а)",
                    articleContent: "Повестка дня: Утверждение учебных планов по направлениям бакалавриата и магистратуры на 2025 год набора и корректировка текущих учебных планов. Формирование государственных экзаменационных комиссий на 2025 год.",
                    articlePublishDate: "2001-10-20T17:00:00Z"
                },
                {
                    publisher: "Леонов Дмитрий Геннадьевич",
                    articleTitle: "Заседание кафедры",
                    articleShortDescripion: "28 октября в 17:00 состоится заседание кафедры АСУ (аудитория 1215а)",
                    articleContent: "Повестка дня: Утверждение учебных планов по направлениям бакалавриата и магистратуры на 2025 год набора и корректировка текущих учебных планов. Формирование государственных экзаменационных комиссий на 2025 год.",
                    articlePublishDate: "2001-10-20T17:00:00Z"
                }
            ]
        }
    }
}
</script>

<style scoped>


.news-text-container {
    display: flex;
    align-items: center;
    column-gap: 15px;
    color: var(--font-color-dark-primary)
}

.news-text-container .inner {
    height: 3px;
    width: 45px;
    border-radius: 5px;
    background-color: #295773;
}


.news-card-block {
    margin: 20px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;

    .news-info-item {
        flex: 1;

        &:hover {
            transition: .7s;
            transform: translateY(-35px);
        }
    }

}

.unicamp-box {
    position: relative;
    display: block;
    background: white;
    box-shadow: 0 0 10px rgba(51, 51, 51, 0.1);
    padding: 42px 30px 34px;
    height: calc(100% + 35px);
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    transition: .5s ease-in-out;
}

.all-news-container {
    margin: 70px 0px;

}

.all-news-container .btn {
    padding: 10px 20px;
    background-color: var(--secondary-bg-color);
    color: #fff;
    border-radius: 2px;
    transition: .3s;
    float: right;

    i {
        margin-left: 10px;
    }

    &:hover {
        transition: .3s;
        background-color: #000;
    }
}
</style>