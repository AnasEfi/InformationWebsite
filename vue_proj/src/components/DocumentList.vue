<template>
    <div class="documents-flex-container">
        <DocumentCard v-for="(doc, index) in documents" :key="index" :idPage=doc.idPage :title="doc.title"
            :url="doc.url"/>
    </div>
</template>
<script>

import DocumentCard from './DocumentCard.vue'

export default {
    name: 'DocumentList',
    components: { DocumentCard },
    data() {
        return {
            documents: [
                {
                    title: "Положение о кафедре",
                    idPage: 1,
                    url: 'https://asugubkin.ru/about/.keep/.about.pdf'
                },
                {
                    title: "ПЕРЕЧЕНЬ ДОКУМЕНТИРОВАННОЙ ИНФОРМАЦИИ СМК",
                    idPage: 1,
                    url: 'https://asugubkin.ru/about/.keep/smk.asu.pdf'
                }
            ]

        }

    }

}
</script>

<style scoped>
.documents-flex-container {
    display: flex;
    gap: 10px;
    margin: 20px 30px;
    align-items: center;
    justify-content: flex-start;
}
</style>