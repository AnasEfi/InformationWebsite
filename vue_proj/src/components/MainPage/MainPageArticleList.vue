<template>
    <div>
        <div class="carousel-container">
            <button class="carousel-button prev" @click="prevSlide">&#10094;</button>
            <div class="carousel">
                <ArticleCard v-for="(article, index) in visibleArticles" :key="index" class="news-info-item unicamp-box"
                    :publisher="article.publisher" :articleTitle="article.articleTitle"
                    :articleShortDescripion="article.articleShortDescripion" :articleContent="article.articleContent"
                    :articlePublishDate="new Date(article.articlePublishDate)" />
            </div>
            <button class="carousel-button next" @click="nextSlide">&#10095;</button>
        </div>
    </div>
</template>
<script>


import ArticleCard from './ArticleCard.vue';


export default {
    name: 'ArticleList',
    components: { ArticleCard},
    data() {
        return {
            articles: [
                {   
                    publisher: "Леонов Дмитрий Геннадьевич",
                    articleTitle: "Заседание кафедры 1",
                    articleShortDescripion: "28 октября в 17:00 состоится заседание кафедры АСУ (аудитория 1215а)",
                    articleContent: "Повестка дня: Утверждение учебных планов по направлениям бакалавриата и магистратуры на 2025 год набора и корректировка текущих учебных планов. Формирование государственных экзаменационных комиссий на 2025 год.",
                    articlePublishDate: "2001-10-20T17:00:00Z"
                },
                {
                    publisher: "Леонов Дмитрий Геннадьевич",
                    articleTitle: "Заседание кафедры 2",
                    articleShortDescripion: "28 октября в 17:00 состоится заседание кафедры АСУ (аудитория 1215а)",
                    articleContent: "Повестка дня: Утверждение учебных планов по направлениям бакалавриата и магистратуры на 2025 год набора и корректировка текущих учебных планов. Формирование государственных экзаменационных комиссий на 2025 год.",
                    articlePublishDate: "2001-10-20T17:00:00Z"
                },
                {
                    publisher: "Леонов Дмитрий Геннадьевич",
                    articleTitle: "Заседание кафедры 3",
                    articleShortDescripion: "28 октября в 17:00 состоится заседание кафедры АСУ (аудитория 1215а)",
                    articleContent: "Повестка дня: Утверждение учебных планов по направлениям бакалавриата и магистратуры на 2025 год набора и корректировка текущих учебных планов. Формирование государственных экзаменационных комиссий на 2025 год.",
                    articlePublishDate: "2001-10-20T17:00:00Z"
                },
                {
                    publisher: "Леонов Дмитрий Геннадьевич",
                    articleTitle: "Заседание кафедры 4",
                    articleShortDescripion: "28 октября в 17:00 состоится заседание кафедры АСУ (аудитория 1215а)",
                    articleContent: "Повестка дня: Утверждение учебных планов по направлениям бакалавриата и магистратуры на 2025 год набора и корректировка текущих учебных планов. Формирование государственных экзаменационных комиссий на 2025 год.",
                    articlePublishDate: "2001-10-20T17:00:00Z"
                },
                {
                    publisher: "Леонов Дмитрий Геннадьевич",
                    articleTitle: "Заседание кафедры 5",
                    articleShortDescripion: "28 октября в 17:00 состоится заседание кафедры АСУ (аудитория 1215а)",
                    articleContent: "Повестка дня: Утверждение учебных планов по направлениям бакалавриата и магистратуры на 2025 год набора и корректировка текущих учебных планов. Формирование государственных экзаменационных комиссий на 2025 год.",
                    articlePublishDate: "2001-10-20T17:00:00Z"
                }
            ],
            currentIndex: 0 // Текущий индекс отображаемого элемента
        }
    },
    computed: {
        visibleArticles() {
            const endIndex = this.currentIndex + 3;
            return this.articles.slice(this.currentIndex, endIndex);
        }
    },
    methods: {
        nextSlide() {
            if (this.currentIndex + 3 < this.articles.length) {
                this.currentIndex += 1;
            }
        },
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex -= 1;
            }
        }
    }
}
</script>

<style scoped>
.carousel-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
}

.carousel {
    display: flex;
    gap: 20px;
    width: 90%;
    transition: transform 0.5s ease-in-out;
}

.carousel-button {
    background-color: rgba(0, 0, 0, 0.0);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
}

.carousel-button.prev {
    left: 10px;
}

.carousel-button.next {
    right: 10px;
}

.news-info-item {
    box-sizing: border-box;
    flex: 1;

    &:hover {
        transition: .7s;
        transform: translateY(-35px);
    }

}
a.uw-btn {
    padding: 15px 20px;
    margin: 0px 55px;
    text-transform: uppercase;
    background-color: #e8e3d3;
    font-family: "Ruda", sans-serif;
    font-weight: 1000;
    color: #5A5A5A;
    display: inline-block;
    position: relative;
    border-bottom: none;
    text-decoration: none;
    margin-bottom: 25px;
    margin-right: 50px;
    line-height: 24px;
    font-size: 16px;
}

a.uw-btn:after {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='50' height='50'%3E%3Cpath d='M15.4,9.88,10.81,5.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14,11.29a1,1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0,15.4,9.88Z' fill='white'/%3E%3C/svg%3E");
    position: absolute;
    background-color: rgb(67, 65, 90);
    top: 0;
    bottom: 0;
    width: 55px;
    height: 55px;
    right: -50px;
    top: 50%;
    margin-top: -28px;
}

.unicamp-box {
    position: relative;
    display: block;
    background: white;
    box-shadow: 0 0 10px rgba(51, 51, 51, 0.1);
    height: calc(100% + 35px);
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    transition: .5s ease-in-out;
}
</style>