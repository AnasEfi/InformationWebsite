<template>
    <div class="study-material-flex">
        <StudyMaterialCard v-for="(material, index) in materials" :key="index" :materialId="material.materialId"
            :title="material.title" :author="material.author" />
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
    gap: 20px;
    flex-wrap: wrap;
}

@media (max-width: 768px) {
    .study-material-flex {
        display: flex;
        flex-grow: 1;
    }

}
</style>