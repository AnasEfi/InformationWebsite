<template>
    <section class="staff">
        <Header></Header>
        <BreadCrumbs></BreadCrumbs>
        <article class="stuff-card-item">

            <div class="image-wrapper">
                <img :src="imgUrl" alt="Sample Image">
            </div>
            <div class="full-blog-content">
                <div class="title-wrap">
                    <h3>{{ name }}</h3>
                </div>
                <div class="person-desc" v-html="safeContent">
                </div>

            </div>
        </article>
        <Footer></Footer>
    </section>
</template>

<script>

import DOMPurify from 'dompurify';
import axios from 'axios';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

import BreadCrumbs from '@/components/common/BreadCrumbs.vue';

export default {
    name: 'StaffCardPage',
    components: { Header, Footer, BreadCrumbs },
    data() {
        return {
            staffId: '',
            name: '',
            img: '',
            info: '',
        }
    },

    methods: {
        async fetchPersonInfo() {
            try {
                // const url = `http://localhost:3000/staff/${this.staffId}`;
                const url = `http://localhost:3000/${this.staffId}`;
                const response = await axios.get(url);

                this.name = response.data.name;
                this.imgUrl = response.data.imgUrl;
                this.info = response.data.content;

            } catch (error) {
                console.error('Error fetching stuff item', error);
            }
        },

        getStaffId() {
            this.staffId = (this.$route.path).split('/').pop();
        }

    },

    computed: {
        safeContent() { 
            return DOMPurify.sanitize(this.info);
        },
    },
    mounted() {
        this.getStaffId();
        this.fetchPersonInfo();
    }
}
</script>


<style scoped>
.document-block {
    padding: 30px 0px 0px 0px;
}

.image-wrapper {
    position: relative;
    display: inline-block;
    overflow: hidden;
    border: 4px rgb(119, 42, 157);
}

.image-wrapper img {
    display: block;
    border: 10px rgb(119, 42, 157);
}

.image-wrapper::before,
.image-wrapper::after {
    content: '';
    position: absolute;
    background-color: rgb(119, 42, 157);
    width: 50px;
    height: 50px;
}

.image-wrapper::before {
    top: 0;
    left: 0;
    clip-path: polygon(0 0, 100% 0, 0 100%);
    /* Закрашиваем верхний левый угол */
}

.image-wrapper::after {
    bottom: 0;
    right: 0;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
    
}
</style>