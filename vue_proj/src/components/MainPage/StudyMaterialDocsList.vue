<template>
    <div class="study-material-flex">
            <StudyMaterialDocs v-for="(docs, index) in documents" :key="index"
                :docsId="docs.docsId" :title="docs.title" :tag="docs.tag"/>
    </div>
</template>
<script>

import StudyMaterialDocs from './StudyMaterialDocs.vue';

export default {
    name: 'StudyMaterialList',
    components: {StudyMaterialDocs},
    data() {
        return {
           documents: [
                {
                    docsId: 1,
                    title: "Расписание еженедельных консультаций",
                    tag: "Учебная работа" 
                },
            
                {
                    docsId: 2,
                    title: "Методические рекомендации по выпускным квалификационным работам",
                    tag: "Учебная работа" 
                },
                {
                    docsId: 3,
                    title: "Вопросы вступительного экзамена в магистратуру",
                    tag: "Учебная работа" 
                },
                {
                    docsId: 4,
                    title: "Рекомендации по отчетам магистрантов по педагогической практике",
                    tag: "Учебная работа" 
                },
            ]
        }
    }
}
</script>

<style scoped>
.study-material-flex{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

</style>