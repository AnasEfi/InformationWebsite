<template>
    <article class="stuff-card-item">
        <div class="top-card"></div>
        <div class="person-card">
            <div class="person-name">
               {{ name }}
            </div>
            <a :href="staffUrl">Перейти к сотруднику</a>
        </div>
    </article>
</template>

<script>


export default {

    name: 'StaffCard',
    props: {
        staffId: {
            type:String,
            default:''
        },
        name: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            default: ''
        },
    },
    computed: {
        staffUrl() {
            return `${window.location.href}/${this.staffId}`;
        }
    },
   
}
</script>

<style scoped>
.stuff-card-item {
    padding: 10px 0px;
    font-family: Ruda;
    transition: all 0.5s ease 0s;
    background: #fff;
    width: 250px;
   

}
.person-card {
    padding: 10px 10px;
    background: white;
    text-decoration: none;
    color: #444;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all .1s ease-in;
    height: 100px;

    &:hover {
        top: -2px;
        box-shadow: 0 4px 5px rgb(0, 0, 0, 0.2)
    }

}

.top-card {
    height: 20px;
    background-color: rgb(74, 72, 101);

}

</style>