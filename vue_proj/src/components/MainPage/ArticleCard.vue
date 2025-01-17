<template>
        <article class="news-card-item">
            <div class="full-blog-content">
                <div class="event-start-date">
                    <span class="event-start-day">{{ formatDate(articlePublishDate).day }}</span>
                    <span class="event-start-month"> {{ formatDate(articlePublishDate).month }}, {{
                        formatDate(articlePublishDate).year }} </span>
                    <span class="post-time"> / {{ formatDate(articlePublishDate).hour }} : {{
                        formatDate(articlePublishDate).minute }}</span>
                </div>

                <div class="title-wrap">
                    <h3>{{ articleTitle }}</h3>
                </div>
                <div class="blog-desc">
                    <h3>{{ articleShortDescription }}</h3>
                    <p>{{ truncatedContent }}</p>
                </div>

                <div class="user-info">{{ publisher }}</div>
            </div>
            <div class="blog-button">Узнать больше</div>
        </article>

</template>

<script>
export default {
    name: 'ArticleCard',
    props: {
        publisher: {
            type: String,
            default: ''
        },
        articleTitle: {
            type: String,
            default: ''
        },
        articleShortDescription: {
            type: String,
            default: ''
        },
        articleContent: {
            type: String,
            default: ''
        },
        articlePublishDate: {
            type: Date,
            default: null
        }
    },
    computed: {

        truncatedContent() {
            const maxWords = 8;
            const words = this.articleContent.split(' ');
            if (words.length > maxWords) {
                return words.slice(0, maxWords).join(' ') + '...';
            }
            return this.articleContent;
        }
    },
    methods: {
        formatDate(date) {
            if (!date) return { day: '', month: '', year: '', hour: '', minute: '' };

            const day = date.getDate();
            const month = date.toLocaleString('ru-RU', { month: 'long' });
            const year = date.getFullYear();
            const hour = date.getHours().toString().padStart(2, '0');
            const minute = date.getMinutes().toString().padStart(2, '0');

            return { day, month, year, hour, minute };
        }
    }
}
</script>

<style scoped>

article.news-card-item {

    transition: all 0.3s ease;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
    padding: 20px 30px 45px;

    .blog-img {
        width: 100%;
        position: relative;
        overflow: hidden;
    }

    .full-blog-content {
        overflow: hidden;
        padding: 20px 0 0;
        font-family: Ruda;

        .event-start-date {

            .event-start-day {
                display: block;
                font-size: 52px;
                line-height: 40px;
            }

            .event-start-month {
                font-size: 13px;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 1px;
                line-height: 26px;
                color: #9b9b9b;
            }

            .post-time {
                font-size: 13px;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 1px;
                line-height: 26px;
                color: #9b9b9b;
            }
        }

        .user-info {
            padding: 10px 0px 0px 0px;
           font-style: italic;
            display: flex;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
            margin-bottom: 20px;
        }

        .title-wrap {
            h3 {
                padding: 0 0 10px 0;
                font-size: 20px;
                line-height: 1.24;
                font-weight: 800;
            }
        }
    }

    .blog-button {
        position: absolute;
        bottom: -30px;
        left: 0;
        right: 0;
        text-align: center;
        background-color: rgb(255, 255, 255);
        color: rgb(74, 72, 101);
        border-bottom: 3px solid rgb(35, 31, 67);
        padding: 15px 30px;
        font-family: "Ruda";
        font-size: 16px;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.3s ease;
        opacity: 0;
        display: block;
    }

}

article.news-card-item:hover .blog-button {
    bottom: 0;
    opacity: 1;
   
}
</style>