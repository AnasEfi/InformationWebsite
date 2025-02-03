<template>
    <div class="timeline">
        <div class="hr"></div>
        <div v-for="(event, index) in eventsList" :key="index" class="timestamp">
            <div class="circle">
            </div>
            <div :class="{'left': index % 2 == 0, 'right': index % 2 !== 0 }">
                <div class="year">{{ event.date }}</div>
                <br>
                <div class="content">
                    <p v-html="getSafeContent(event.eventContent)"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DOMPurify from 'dompurify';
export default {
    name: 'HistoryEventsBlock',
    props: {
        eventsList: []
    },
    methods: {
        getSafeContent(content) {
            return DOMPurify.sanitize(content);
        }
    }

}
</script>

<style scoped>
.timeline {

    position: relative;
    display: flex;
    flex-wrap: wrap;
    min-height: 150vh;
    width: 100%;
    padding: 0px 10px;
    margin: 40px 0px;

}

.hr {
    position: absolute;
    width: 2px;
    background-color: #222;
    left: calc(50% - 2px);
    height: 100%;
    border-radius: 10px;
}

.year {
    font-size: 3em;
}

.right .year {
    text-align: left;
}


.left .year {
    text-align: right;
}

.left .content {
    padding-left: 55%;

}

.right .content {

    padding-right: 55%;

}

.timestamp {
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle {
    width: 14px;
    height: 14px;
    background-color: #252525;
    border-radius: 50%;
    border: 2px solid aliceblue;
    position: absolute;
    left: calc(50% - 8px);
}

.left,
.right {
    padding: 0 40px;
    flex-basis: 80%;
    position: relative;

    p {
        text-align: justify;
    }
}
</style>