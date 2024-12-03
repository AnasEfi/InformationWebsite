<template>
    <div class="study-material-flex">
            <StudyMaterialCard v-for="(material, index) in materials" :key="index"
                :materialId="material.materialId" :title="material.title" :author="material.author" />
    </div>
</template>
<script>

import StudyMaterialCard from './StudyMaterialCard.vue';

export default {
    name: 'StudyMaterialList',
    components: { StudyMaterialCard },
    data() {
        return {
           materials: [
                {
                    materialId: 1,
                    title: "Проектирование и эксплуатация АСДУ в нефтегазовом комплексе",
                    author: "Григорьев Л.И." 
                },
            
                {
                    materialId: 2,
                    title: "Интегрированные системы автоматизированного управления. Методический материал к изучению курса",
                    author: "Григорьев Л.И." 
                },
                {
                    materialId: 3,
                    title: "Управление и идентификация. Методический материал к изучению курса.",
                    author: "Григорьев Л.И." 
                },
                {
                    materialId: 4,
                    title: "Введение в синергетику",
                    author: "Григорьев Л.И." 
                },
                {
                    materialId: 5,
                    title: "Современные технологии программирования. Задания на лабораторные работы.",
                    author: "Леонов Д.Г." 
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
@media (max-width: 768px){
    .study-material-flex{
    display: flex;
    flex-grow: 1;
    }

}

</style>