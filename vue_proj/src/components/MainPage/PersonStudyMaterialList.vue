<template>
    <div class="study-material-flex" v-if="materials.length === 0">Нет материалов</div>
        <div class="study-material-flex" v-else>
        <StudyMaterialCard v-for="(material, index) in materials" :key="index" :materialId="material.materialId"
            :title="material.title" :author="material.author" :publishDate="material.publishDate" />
    </div>
</template>
<script>

import StudyMaterialCard from './PersonStudyMaterialCard.vue';

export default {
    name: 'StudyMaterialList',
    components: { StudyMaterialCard },
    props: {
        materials: {
            type: Array,
            default: () => [],
        }
    },
}
</script>

<style scoped>
.study-material-flex {
    display: flex;
    justify-content:center;
    gap: 20px;
    flex-wrap: wrap;
    padding: 10px 100px;
}

@media (max-width: 768px) {
    .study-material-flex {
        display: flex;
        flex-grow: 1;
    }

}
</style>