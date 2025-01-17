<template>
    <div class="item">
        <a href="" class="card">
            <div class="thumb"></div>
            <article>
                <h1>{{ this.title }}</h1>
                <span>{{ this.author }}</span>
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
    background: white;

    color: #444;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    transition: all .1s ease-in;

    &:hover {
        top: -2px;
        box-shadow: 0 4px 5px rgb(0, 0, 0, 0.2)
    }

    article {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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

    .thumb {
        padding-bottom: 10%;
        background-color: #295773;
        background-position: center;
    }
}

@media (max-width: 768px) {
    .item {
        flex: 1;
    }
}
</style>