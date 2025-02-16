<template>
    <div class="video-article-block">
        <div class="text-block-cover">
            <div class="title-block">
                <h1>{{ title }}</h1>
            </div>
            <div class="content-wrapper">
                <div class="content-block" v-html="safeContent"></div>

                <div class="vidoe-container">
                    <iframe width="800" height="500" :src="filmUrl" frameborder="10"
                        allow="clipboard-write; autoplay webkitAllowFullScreen mozallowfullscreen allowFullScreen"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DOMPurify from 'dompurify';
export default {
    name: 'ArticleCard',
    props: {
        title: {
            type: String,
            default: 'Юбилейный фильм'
        },
        content: {
            type: String,
            default: ''
        },
        filmUrl: {
            type: String,
            default: "https://rutube.ru/play/embed/46867df65eb784f41ec992a76bd11d79/"
        }
    },
    methods: {

    },
    computed: {
        safeContent() {
            return DOMPurify.sanitize(this.content);
        },
    }

}
</script>
<style scoped>
.video-article-block {
    box-shadow: 1px 1px 8px 1px rgba(13, 13, 22, 0.288);
    border-bottom: 15px solid rgb(74, 72, 101);

}

.video-container {
    display: flex;
    justify-content: center;

    padding-bottom: 56.25%;
    /* 16:9 */
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: #000;
}

.video-container iframe {

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.content-wrapper {
    display: flex;
    margin: 40px 0px 0px 0px;
    padding: 40px 100px;
    justify-content: center;
    text-align: left;
    
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
}

::v-deep .content-wrapper p {

    padding: 10px 0px;
    padding: 15px 20px;
    line-height: 1.6;
    font-weight: 500;
    text-align: justify;
    margin-bottom: 20px;
    background-color: #f9f9f9;
    border-left: 4px solid rgb(74, 72, 101);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;

}

::v-deep .content-block p :hover {
    transform: translateY(-5px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
}

.content-block {
    font-size: 20px;
    text-align: left;

}


.img-cover {
    align-content: center;


}

.title-block {
    min-height: 128px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 36px;



}

.title-block h1 {
    text-align: center;
    position: relative;
    padding: 10px 0 12px;
    max-width: 970px;
    margin: 0 auto;


}

.title-block h1::after {

    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    -webkit-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    width: 66px;
    height: 3px;
    background: rgb(74, 72, 101);
}



@media (max-width: 768px) {
    ::v-deep .content-block p {
        padding: 10px 15px;
        font-size: 16px;
    }
}
</style>
