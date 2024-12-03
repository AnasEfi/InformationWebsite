<template>
        <div class="main-sections-description-flex-container">
            <ChapterCard v-for="(chapter, index) in chapters" :key="index"
            :chapterId ="chapter.chapterId" :title = "chapter.title" :description="chapter.description" />

        </div>
</template>
<script>

import ChapterCard from './ChapterCard.vue'

export default {
    name: 'ChapterList',
    components: { ChapterCard },
    data() {
        return {
            chapters: [
                {
                    chapterId: 1,
                    title: 'О кафедре',
                    description: 'Информация о текущей деятельности и истории кафедры.'
                },
                {
                    chapterId: 2,
                    title: 'Учебная работа',
                    description: 'Основные направления учебной работы, текущее расписание.'
                },
                {
                    chapterId: 3,
                    title: 'ВКР',
                    description: 'Методические рекомендации по выпускным квалификационным работам.'
                },
                {
                    chapterId: 4,
                    title: 'Практика',
                    description: 'Практика: методические рекомендации, правила оформления.'
                },
                {
                    chapterId: 5,
                    title: 'Наука',
                    description: 'Основные направления научной деятельности кафедры, участие в выставках и конференциях.'
                },
                {
                    chapterId: 6,
                    title: 'Сотрудники',
                    description: 'Личные страницы, информация о читаемых курсах.'
                },
                {
                    chapterId: 7,
                    title: 'Ресурсы',
                    description:'Вспомогательные ресурсы, доступные студентам и сотрудникам кафедры.'
                },
                {
                    chapterId: 8,
                    title: 'Юбилей',
                    description:'Информация о юбилейных мероприятиях, посвященных 40-летию создания кафедры АСУ РГУ нефти и газа имени И.М.Губкина.'
                },

            ]

        }

    }

}
</script>

<style scoped>

.main-sections-description-flex-container {

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    padding-top: 30px;
    margin: 0 0 60px 0;
    min-height: 400px;
}

</style>