<template>
        <Header></Header>
        <SectionTitle :title="resourcesData.title"></SectionTitle>
        <BreadCrumbs />

        <div class="recources-block" v-if="safeContent.length > 0">
            <div v-for="(part, index) in splitContent(safeContent)" :key="index"
                :class="['content-part', `part-${index}`]" v-html="part"></div>
        </div>
        <div v-else>
            Нет данных для отображения.
        </div>

        <Footer></Footer>
</template>
<script>
import axios from 'axios';
import DOMPurify from 'dompurify';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import SectionTitle from '@/components/common/SectionTitle.vue';

export default {
    components: { Header, Footer, BreadCrumbs, SectionTitle },
    name: 'ResourcesPage',

    data() {
        return {
            resourcesData: []
        }
    },
    methods: {
        async fetchResources() {
            try {
                const response = await axios.get('http://localhost:3000/resources');
                this.resourcesData = response.data;
                console.log('Данные успешно загружены:', this.resourcesData);
                console.log('Первый элемент:', this.resourcesData.text);
                console.log('Второй:', this.resourcesData.resource);
            } catch (error) {

                console.error('Error fetching stuff', error);
            }
        },
        splitContent(content) {
            if (content) {
                const parts = content.split(/<dt>/);
                parts.shift();
                return parts;
            }
            return [];
        }

    },

    created() {
        this.fetchResources();
    },

    computed: {
        safeContent() {
            return DOMPurify.sanitize(this.resourcesData.resource);
        },

    }
}

</script>
<style scoped>



.head-part-resources {
    display: flex;
    gap: 40px;
    font-size: 20px;
}

.head-img {
    fill: white;
    position: relative;
    padding: 20px 10px;
}

.main-title {
    font-size: 40px;
    color: white;
    font-weight: 600;
    align-self: center;
}

.resource-title {
    font-size: 40px;
}

.content-part {
    display: flex;
    flex-direction: column;
    gap:20px;
    padding: 10px 10px;
    background: white;
    text-decoration: none;
    color: #444;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all .1s ease-in;
    border-left: 10px solid rgb(74, 72, 101);
    width: 300px;
    height: fit-content;
   

    &:hover {
        top: -2px;
        box-shadow: 0 4px 5px rgb(0, 0, 0, 0.2)
    }
}
::v-deep .content-part a{
        font-weight: 900;
    }

.part-0 {
    width: 100%;
    margin: 0px 0px 40px 0px;
    border: none;
    height: fit-content;
    box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.2);
}

.recources-block {
    display: flex;
    flex-wrap: wrap;
    padding: 30px 30px;
    gap: 30px;
    justify-content: center;
    font-size: 20px;
}

</style>
