<template>
    <nav class="bread-crumbs">
        <ul>
            <li><a href="http://localhost:8082" title="Asu.gubkin.ru" style="position: relative; top: 2px;"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="19">
                        <g id="_01_align_center" data-name="01 align center">
                            <path
                                d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H20.8a3.2,3.2,0,0,0,3.2-3.2v-10.4ZM15,22.026H9V17a3,3,0,0,1,6,0Zm7-1.2a1.2,1.2,0,0,1-1.2,1.2H17V17A5,5,0,0,0,7,17v5.026H3.2a1.2,1.2,0,0,1-1.2-1.2V11.319l10-9,10,9Z" />
                        </g>
                    </svg></a></li>
            <li v-for="(breadcrumb, idx) in breadcrumbList" :key="idx" @click="routeTo(idx)"
                :class="{ 'linked': !!breadcrumb.link }">
                {{ breadcrumb.name }}
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'BreadCrumbs',
    data() {
        return {
            breadcrumbList: []
        }
    },
    mounted() { this.updateList() },
    watch: { '$route'() { this.updateList() } },
    methods: {
        routeTo(pRouteTo) {
            if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
        },
        updateList() { this.breadcrumbList = this.$route.meta.breadcrumb }
    }
}

</script>
<style scoped>
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

</style>