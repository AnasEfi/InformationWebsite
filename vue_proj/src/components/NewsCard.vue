<template>
    <article class="news-card-item">
        <div class="blog-img">
        </div>
        <div class="full-blog-content">

            <div class="title-wrap">
                <h3>{{ title }}</h3>
            </div>
            <div class="blog-desc" v-html="safeContent">
            </div>
            <div class="article-info-wrapper">
                <div class="user-info">{{ publisher }}</div>
                <div class="publish-date">{{ publishDate }}</div>
                
                <div class="blog-button">Читать новость</div>
            </div>
        </div>
    </article>
</template>
<script>
import DOMPurify from 'dompurify';

export default {
    name: 'NewsCard',
    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        publisher: {
            type: String,
            default: ''
        },
        publishDate: {
            type: Date,
            default: ''
        },
        url: {
            type: String,
            default: ''
        }

    },
    computed: {
        safeContent() {
            return DOMPurify.sanitize(this.content);
        }
    }
}
</script>

<style scoped>

.news-card-item {
    font-family: Ruda;
    transition: all 0.5s ease 0s;
    background: #fff;
    margin-bottom: 20px;
    overflow: hidden;
    padding: 5px 10px 10px 45px;
    position: relative; 
}
.news-card-item::after {

    content: ''; 
    position: absolute; 
    bottom: 0;
    width: 100%; 
    height: 1px; 
    background-color: rgba(75, 75, 83, 0.258);
}


.news-card-item .blog-img {
    width: 100%;
    position: relative;
    overflow: hidden;
}

.news-card-item .full-blog-content {
    overflow: hidden;

   
}

.news-card-item .full-blog-content .user-info {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    font-weight: 1000;
    color:rgba(75, 75, 83, 0.708);
}

.news-card-item .full-blog-content .title-wrap {
    padding: 10px 0px;
}

.news-card-item .full-blog-content .title-wrap h3 {
    font-size: 24px;
    line-height: 1.24;
    font-weight: 900;
    color: rgb(74, 72, 101);
}

.news-card-item .full-blog-content .blog-button {
    text-transform: uppercase;
    background-color: #e8e3d3;
    font-family: "Ruda", sans-serif;
    font-weight: 1000;
    color: #5A5A5A;
    padding: 10px 10px;
    margin: -10px 10px 10px 10px;

}

.article-info-wrapper {
    display: flex;
    gap: 20px;
    padding: 30px 0px 0px 0px;
}

.user-info::after,
.publish-date::after {
    content: '|'; 
    margin-left: 10px; 
    color: #ccc; 
}

.blog-button::after {
    content: none;
}
</style>