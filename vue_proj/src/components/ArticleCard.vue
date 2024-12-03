<template>
    <article class="news-card-item">
        <div class="full-blog-content">
            <div class="event-start-date">
                <span class="event-start-day">{{ formatDate(articlePublishDate).day }}</span>
                <span class="event-start-month"> {{ formatDate(articlePublishDate).month }}, {{
                    formatDate(articlePublishDate).year }} </span>
                <span class="post-time"> / {{ formatDate(articlePublishDate).hour }} : {{
                    formatDate(articlePublishDate).minute }}</span>
                       <div class="user-info">{{ publisher }}</div>
            </div>
            
            <div class="title-wrap">
                <h3>{{ articleTitle }}</h3>
            </div>
            <div class="blog-desc">
                <h3>{{ articleShortDescription }}</h3>
                <p>{{ articleContent }}</p>
            </div>
            <div class="blog-button">Узнать больше</div>
        </div>
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

<style>

.news-content {
    display: flex;
    flex-direction: wrap;
    gap: 20px;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

.event-start-month {
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 26px;
    color: #9b9b9b;
}

.event-start-day {
    display: block;
    font-size: 52px;
    line-height: 40px;
}

.event-title {
    font-size: 20px;
    line-height: 1.6;
    margin: 0;
}

.event-read-more {
    line-height: 18px;
    color: darkred;
}

.post-time {
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 26px;
    color: #9b9b9b;
}


.recent-news-block {
    flex: 1;
    background-color: rgb(37, 59, 107);
}

.news-cards {
    flex: 2;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 5px 1px rgba(0, 0, 0, .05);

    article.news-card-item {
        transition: all .5s ease 0s;
        background: #fff;
        margin-bottom: 40px;
        overflow: hidden;
        border: var(--border-1);
        box-shadow: 0px 4px 30px rgba(0, 0, 0, .05);
        padding: 30px 30px 45px;

        .blog-img {
            width: 100%;
            position: relative;
            overflow: hidden;
        }

        .full-blog-content {
            overflow: hidden;
            padding: 40px 0 0;

            .user-info {
                display: flex;
                align-items: center;
                gap: 15px;
                flex-wrap: wrap;
                margin-bottom: 20px;
            }

            .title-wrap {
                padding: 10px 0px;

                h3 {
                    font-size: 24px;
                    line-height: 1.24;
                    font-weight: 400;
                }
            }

            .blog-button {
                color: #fff;
                display: inline-block;
                background-color: cadetblue;
                margin: 40px 0 0 0;
                padding: 10px 30px;
                width: auto;
                height: auto;
                font-family: "Ubuntu";
                font-size: 16px;
                cursor: pointer;

                &:hover {
                    background-color: #333;
                    transition: 0.3s ease-in-out;
                }
            }

        }
    }
}
</style>