<template>
    <section class="resources">
        <Header></Header>
        <div class="main-img">
            <div class="head-part-resources">
                <div class="head-img"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"
                        viewBox="0 0 24 24" width="100" height="100">
                        <path
                            d="M23.786,19.492L16.713,1.836c-.624-1.529-2.376-2.269-3.911-1.645l-.925,.378c-.249,.102-.472,.244-.68,.402-.548-.594-1.326-.972-2.196-.972H3C1.346,0,0,1.346,0,3V21c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3V8.895l5.304,13.242c.625,1.543,2.417,2.26,3.909,1.641l.926-.378c1.505-.574,2.286-2.434,1.647-3.907ZM13.574,7.446l2.778-1.132,4.171,10.412-2.778,1.132L13.574,7.446Zm-.942-5.025l.925-.378c.496-.206,1.097,.031,1.302,.543l.75,1.871-2.777,1.132-.747-1.866c-.208-.51,.038-1.095,.549-1.303ZM2,7h3v10H2V7Zm5,0h3v10h-3V7Zm3-4v2h-3V2h2c.551,0,1,.448,1,1ZM3,2h2v3H2V3c0-.552,.449-1,1-1Zm-1,19v-2h3v3H3c-.551,0-1-.448-1-1Zm7,1h-2v-3h3v2c0,.552-.449,1-1,1Zm12.929-.991c-.104,.247-.297,.438-.544,.539h0l-.926,.378c-.511,.206-1.095-.037-1.3-.54l-.669-1.671,2.778-1.132,.665,1.661c.102,.247,.101,.52-.003,.766Z" />
                    </svg>
                </div>
                <div class="main-title">
                    <p>{{ resourcesData.text }}</p>
                </div>
            </div>
        </div>
        <BreadCrumbs />

        <div class="recources-block" v-if="safeContent.length > 0">
            <div v-for="(part, index) in splitContent(safeContent)" :key="index"
                :class="['content-part', `part-${index}`]" v-html="part"></div>
        </div>
        <div v-else>
            Нет данных для отображения.
        </div>


        <Footer></Footer>
    </section>
</template>
<script>
import axios from 'axios';
import DOMPurify from 'dompurify';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';

export default {
    components: { Header, Footer, BreadCrumbs },
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
section.resources {
    display: flex;
    flex-direction: column;
   
}

.main-img {
    display: flex;
    background-color: rgb(74, 72, 101);
    height: 120px;
    width: 100%;

}


.head-part-resources {
    display: flex;

    gap: 30px;
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
    border: 10px solid rgb(74, 72, 101);
    width: 300px;
    height: 200px;
   

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
    border: none;
    height: 100px;
}

.recources-block {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 30px;
    gap: 20px;
     justify-content: center;
}

</style>
