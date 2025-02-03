<template>
    <div class="history-block">
        <Header></Header> 
        <BreadCrumbs/>
        <PhotoList></PhotoList>
        <Footer></Footer>
    </div>

</template>

<script>
import Header from '../components/common/Header.vue'
import Footer from '../components/common/Footer.vue'
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import PhotoList from '@/components/PicturePage/PhotoList.vue';

export default {
    name: 'HistoryPage',
    components: {Header, Footer, BreadCrumbs, PhotoList}

}
</script>