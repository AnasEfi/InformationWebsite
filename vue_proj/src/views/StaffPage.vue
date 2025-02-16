<template>
    <section class="staff">
        <Header></Header>
        <SectionTitle :title="this.title"></SectionTitle>
        <BreadCrumbs/>
        <div v-if="staff.length > 0">
            <StuffCardList :staff="staff"></StuffCardList>
        </div>
        <div v-else>
            Загрузка данных...
        </div>
        <Footer></Footer>
    </section>
</template>

<script>
import axios from 'axios';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import StuffCardList from '@/components/StaffPage/StaffCardList.vue';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import SectionTitle from '@/components/common/SectionTitle.vue'

export default {
    components: { StuffCardList, Header, Footer, BreadCrumbs, SectionTitle },
    name: 'StaffPage',

    data() {
        return {
            staff: [],
            title: 'Сотрудники кафедры'
        }
    },
    methods: {
        async fetchStaff() {
            try {
                const response = await axios.get('http://localhost:3000/staffShort');
                this.staff = response.data;
            } catch (error) {
                console.error('Error fetching staff', error);
            }
        },
    },
    created() {
        this.fetchStaff();
    }
}
</script>

<style scoped>



</style>