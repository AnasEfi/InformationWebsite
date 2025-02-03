<template>
    <div class="study-material-flex">
        <HeadPersonCard v-for="(person, index) in personsList" :key="index" :name="person.name"
            :biography="person.biography" :photo="person.photo" />
    </div>
</template>
<script>

import HeadPersonCard from './HeadPersonCard.vue';

export default {
    name: 'HeadPersonCardList',
    components: { HeadPersonCard },
    props: {
        personsList: {
            type: Array,
            default: () => [],
        }
    },
    mounted() {
        console.log('personList in HeadPersonCardList:', this.personList);
    }

}
</script>

<style scoped>
.study-material-flex {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

@media (max-width: 768px) {
    .study-material-flex {
        display: flex;
        flex-grow: 1;
    }

}
</style>