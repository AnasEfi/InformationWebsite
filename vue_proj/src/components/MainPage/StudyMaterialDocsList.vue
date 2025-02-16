<template>
    <div class="study-material-flex">
            <StudyMaterialDocs v-for="(docs, index) in documents" :key="index"
                :docsId="docs.docsId" :title="docs.title" :tag="docs.tag" :publishDate="docs.publishDate"/>
    </div>
</template>
<script>

import StudyMaterialDocs from './StudyMaterialDocs.vue';

export default {
    name: 'StudyMaterialList',
    components: {StudyMaterialDocs},
    props: {
        documents: {
            type: Array,
            default: () => [],
        }
    },
}
</script>

<style scoped>
.study-material-flex{
    display: flex;
    justify-content:center;
    gap: 20px;
    flex-wrap: wrap;
    padding: 10px 100px;
}


</style>