<template>
    <div class="history-block">
        <Header></Header>
        <BreadCrumbs/>
        <section>
            <h2>История кафедры</h2>
            <HistoryEventsBlock :eventsList="this.events"></HistoryEventsBlock>
        </section>
        <Footer></Footer>
    </div>

</template>

<script>
import Header from '../components/common/Header.vue'
import Footer from '../components/common/Footer.vue'
import axios from 'axios';
import HistoryEventsBlock from '@/components/HistoryPage/HistoryEventsBlock.vue';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
export default {
    name: 'HistoryPage',
    components: { Header, Footer, HistoryEventsBlock, BreadCrumbs },
    data() {
        return {
            events: []
        };
    },
    methods: {
        async fetchEvents() {
            try {
                const response = await axios.get('http://localhost:3000/historyEvents');
                this.events = response.data;
                console.log(response.data);
            }
            catch (error) {
                console.error('Error fetching historyEvents', error);
            }
        }
    },
    created() {
        this.fetchEvents();
    }
}
</script>
<style scoped>
</style>