<template>
    <article class="stuff-card-item">
        <div class="blog-img"><img :src="img" alt="Photo"/>
        </div>
        <div class="full-blog-content">

            <div class="title-wrap">
                <h3>{{ name }}</h3>
            </div>
            <div class="person-desc" v-html="safeContent">
            </div>
           
            </div>
       
    </article>
</template>

<script>
import DOMPurify from 'dompurify';

export default {
    name: 'StuffCard',
    props: {
        name: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        },
        info: {
            type: String,
            default: ''
        }
    },
    methods: {
        
    },
    computed: {
        safeContent() {
            return DOMPurify.sanitize(this.info);
        },
    }
}
</script>

<style scoped>
.stuff-card-item {
    font-family: Ruda;
    transition: all 0.5s ease 0s;
    background: #fff;
    margin-bottom: 20px;
    overflow: hidden;
    padding: 5px 10px 10px 45px;
    position: relative;
}

</style>