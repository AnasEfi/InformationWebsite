<template>
    <section class="news">
        <Header></Header>
        <div class="news-content">
            <div class="news-cards">
                <nav class="bread-crumbs">
                    <ul>
                        <li><a href="http://uw.edu" title="University of Washington"
                                style="position: relative; top: 2px;"><svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" width="20" height="19">
                                    <g id="_01_align_center" data-name="01 align center">
                                        <path
                                            d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H20.8a3.2,3.2,0,0,0,3.2-3.2v-10.4ZM15,22.026H9V17a3,3,0,0,1,6,0Zm7-1.2a1.2,1.2,0,0,1-1.2,1.2H17V17A5,5,0,0,0,7,17v5.026H3.2a1.2,1.2,0,0,1-1.2-1.2V11.319l10-9,10,9Z" />
                                    </g>
                                </svg></a></li>
                        <li><a href="https://www.washington.edu/news/" title="UW News">Новости</a></li>
                        <li class="current"><span> The latest news from the UW </span></li>
                    </ul>
                </nav>
                <div v-if="news.length === 0">Новости не найдены</div>
                <NewsCard v-for="(newsItem, index) in news" :key="index" :publisher="newsItem.publisher"
                    :title="newsItem.title" :shortDescripion="newsItem.shortDescripion" :content="newsItem.content"
                    :publishDate="newsItem.publishDate" :url="newsItem.url" />

                <div class="navigation-pagination">
                    <nav class="pagination-area">
                        <div class="nav-links">
                            <span aria-current="page" class="page-numbers current">1</span>
                            <a class="page-numbers" href="">2</a>
                            <a class="page-numbers" href="">3</a>
                            <a class="next page-numbers" href="">>></a>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="recent-news-block">
                <div class="search-title">Поиск по новостям</div>
                <div class="search-container">
                    <input type="text" class="search-input" placeholder="Поиск...">
                    <button class="search-button">>></button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </section>
</template>

<script>

import axios from 'axios';
import NewsCard from '../components/NewsCard.vue';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
    components: { NewsCard, Header, Footer },
    name: 'PageNews',
    data() {
        return {
            news: [],
        }
    },

    methods: {
        async fetchNews() {
            try {
                const response = await axios.get('http://localhost:3000/news');
                this.news = response.data; 
            } catch (error) {
                console.error('Error fetching news', error);
            }
        }
    },

    created() {
        this.fetchNews();
    }
}
</script>

<style scoped>
section.news {
    margin: 0px 0px;
    padding: 0px 0px;
}

.news-content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    height: 100%;

}

.bread-crumbs {
    padding: 10px 0px;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
    font-family: Ruda;

    li {
        list-style: none;
        display: inline-block;
        position: relative;
        font-size: 15px;
    }

    li:not(:last-child)::after {
        content: ">";
        padding: 0px 10px;
        font-size: 15px;
        height: 10px;
        width: 10px;
        right: 5px;
        top: 7px;
        opacity: .8;
        filter: alpha(opacity=80);
        -webkit-background-size: 7px 5px;
        -moz-background-size: 7px 5px;
        -o-background-size: 7px 5px;
        background-size: 7px 5px;
    }
}

.recent-news-block {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0px 30px 0px 0px;

    .search-title {
        font-size: 25px;
        padding: 80px 10px 5px 10px;
        font-weight: 600;
        text-align: left;
        border-bottom: 2px solid #ccc;
        color:  rgb(74, 72, 101);
        font-weight: 800;
    }

    .search-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        padding: 20px 10px 10px 10px;
    
        display: flex;
        
        .search-input {
            padding: 10px 0 10px 20px;
            font-size: 18px;
            border:#fff;
            outline: none;
          
        }

        .search-input:focus {
            fill: rgb(49, 5, 80);

        }

        .search-button {
            padding: 10px 10px;
            font-size: 16px;
            background-color: #fff;
            border:#fff;
            cursor: pointer;
        }

        .search-button:hover {
           transform: ease 0.3s;
           background-color:  rgb(74, 72, 101);
        }
    }
}

.news-cards {
    flex: 2;
    display: flex;
    flex-direction: column;
}

.navigation-pagination {
    margin: 40px 0px;

}

.pagination-area {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.page-numbers {
    padding: 5px 10px;
    border: 1px solid #ccc;
    text-decoration: none;
    color: #333;
}

.page-numbers.current {
    background-color: #333;
    color: #fff;
}
</style>