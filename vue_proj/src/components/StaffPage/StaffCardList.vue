<template>
    <div class="section">
        <div v-if="staff.length === 0">Сотрудники не найдены</div>
        <div v-else class="staff-wrapper">
        <ShortStaffCard v-for="(staffItem, index) in staff" :key="index" 
        :name="staffItem.name" :staffId="staffItem.staffId" :url="staffItem.url">
    </ShortStaffCard>
</div>
    </div>

</template>


<script>
import ShortStaffCard from './ShortStaffCard.vue';



export default {
    name: 'StaffCardList',
    components: { ShortStaffCard },
    props: {
        staff: {
            type: Array,
            default: () => [],
        }
    },
    methods: {

    },
}
</script>

<style scoped>
.section {
    padding: 30px 30px;
    justify-content: center;
}
.staff-wrapper{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

</style>