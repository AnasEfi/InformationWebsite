<template>
    <div class="item item__content">
        <h2>{{ this.title }}</h2>
        <p>{{ description }}</p>
        <a>Перейти</a>
    </div>
</template>
<script>
export default {
    name: 'ChapterCard',
    props: {
        chapterId: {
            type: Number,
            default: null
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.item {
    border: 2px solid rgb(0, 0, 0);
    border-radius: 0.1%;
    text-align: center;
    padding: 5px;
    flex: 1 1 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    box-shadow: 5px 1px 1px rgb(0, 0, 0, 0.1);

    &:hover {
        --expand: 1;
        color: white;
    }
}

.item:before,
.item:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: hsl(0, 0%, 0%);
    border: 2px solid white;
    top: 0;
    left: 0;
    z-index: -1;
}

.item:after {
    transform: translate(calc(var(--expand) * -2%), calc(var(--expand) * -2%));
    transition: transform 0.2s;
}

.item__content {
    transition: transform 0.2s;
    transform: translate(calc(var(--expand) * -4%), calc(var(--expand) * -4%));
}
.item__content a {
    color: #8aa8d5;
}

</style>
