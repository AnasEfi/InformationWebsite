<template>
    <div class="document-card">
        <a :href="this.url">
            <div class="img-doc">
                <img src="../assets/images/doc.logo.png">
            </div>
            <div>
                <h3>{{ title }}</h3>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'DocumentCard',
    props:
    {
        title: {
            type: String,
            default: '',
        },
        url: {
            type: String,
            default: '',
        },
        idPage: {
            type: Number,
            default: null
        }
    }
}
</script>

<style scoped>
.document-card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
    width: 500px;
    height: fit-content;
    padding: 10px 

}

.img-doc{
    flex:2;
}

img {
    width:50px;
    height:auto;
}

h3 {
    flex: 3;
}
</style>