<template>
    <div class="item">
        <a href="" class="card">
            <article>
                <h1>{{ this.title }}</h1>
                <div class="block-wrapper">
                <span class="author-block">{{ this.author }}</span>
                <span class="publish-date-block">{{ this.publishDate }}</span>
            </div>
            </article>
        </a>
    </div>
</template>
<script>
export default {
    name: 'StudyMaterialCard',
    props: {
        materialId: {
            type: Number,
            default: null
        },
        title: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        },
        publishDate:{
            type: Date,
            default: ''
        }
    }
}
</script>

<style scoped>
.item {
    flex: 0 1 calc(33.333% - 20px);
}

.card {
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    border-top: 15px solid rgb(74, 72, 101);
    background: white;
    color: #444;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all .1s ease-in;

    &:hover {
        top: -2px;
        box-shadow: 0 4px 5px rgb(0, 0, 0, 0.2)
    }

    article {
        height: 100%;
        padding: 15px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .block-wrapper{
            display:flex;
            justify-content:space-between;
        }
    }
   

    h1 {

        font-size: 20px;
        margin: 0;
        color: #333;
    }

    p {
        flex: 1;
        line-height: 1.4;
    }

    span {
        font-size: 12px;
        font-weight: bold;
        color: #999;
        text-transform: uppercase;
        letter-spacing: .05em;
        margin: 2em 0 0 0;
    }
}

@media (max-width: 768px) {
    .item {
        flex: 1;
    }
}
</style>