
<template>
    <div class="history-block">
        <Header></Header> 
        
        <Footer></Footer>
    </div>

</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'HistoryPage',
    components: {Header, Footer}
}
</script>