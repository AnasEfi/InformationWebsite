<template>
    <div class="section">
        <div v-if="stuff.length === 0">Сотрудники не найдены</div>
        <div v-for="(stuffItem, index) in stuff" :key="index" class="person-card">
           
            <div class="person-img-container">
            <img :src="stuffItem.img" alt="Person Photo" class="person-img" />
        </div>
        <div class="top-card"> <div class="person-name">{{ stuffItem.name }}</div></div>
        </div>
    </div>

</template>


<script>


export default {
    name: 'StaffCardList',
    props: {
        stuff: {
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
    display: flex;
    padding: 30px 70px;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
}

.person-card {
    background: white;
    text-decoration: none;
    color: #444;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all .1s ease-in;
    border: 10px solid rgb(74, 72, 101);

    &:hover {
        top: -2px;
        box-shadow: 0 4px 5px rgb(0, 0, 0, 0.2)
    }

}

.person-name {
    font-size: 18px;
    font-weight: bold;
    color:aliceblue;
 
}

.person-img-container {
    width: 300px;
    height: 300px;
    overflow: hidden;
   
    display: flex;
    justify-content: center; /* Центрирование по горизонтали */
    align-items: center; /* Центрирование по вертикали */
}
.top-card{
    height: 30px;
    background-color:rgb(74, 72, 101);
  
}

.person-img {
    width: 80%;
    height: 80%;
    object-fit: cover;

}
</style>