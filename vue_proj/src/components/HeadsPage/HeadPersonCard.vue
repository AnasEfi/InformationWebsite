<template>
    <div class="person-container">
        <div class="person-photo-block">
            <img :src="photo" alt="Photo" />
        </div>
        <div class="person-biography">
            <div class="person-name">
                <h2>
                    {{ name }}
                </h2>
            </div>
            <div class="biography-text" v-html="safeContent">

            </div>
        </div>
    </div>
</template>
<script>
import DOMPurify from 'dompurify';
export default {
    name: 'HeadPersonCard',
    props: {
        name: {
            type: String,
            default: ''
        },
        biography: {
            type: String,
            default: ''
        },
        photo: {
            type: String,
            default: ''
        }
    },
    methods: {

    },
    computed: {
        safeContent() {
            return DOMPurify.sanitize(this.biography);
        },
    }
}
</script>
<style scoped>
.person-container {
    display: flex;
    margin: 50px 0px 20px 0px;
    padding: 10px 0px 50px 0px;
    position: relative;
    justify-content: center;

}

.person-photo-block {
    padding: 10px 10px;
    block-size: cover;
    background-position: center;
    position: relative;
    left: 40px;
    top: 30px;
    z-index: 1;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.162);
    height: fit-content;
    background-color: rgb(255, 255, 255);
}

.person-photo-block img {

    height: 400px;
    object-fit: cover;

}

.person-biography {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.171);
    background-color: white;
    padding: 30px 30px 30px 190px;
    position: relative;
    top: -15px;
    left: -100px;
    z-index: 2;
    text-align: start;
    align-content: center;
    font-weight: 600;
    height: fit-content;


    z-index: 0;
    /* Биография под изображением */
}

.person-biography .biography-text {
    display: flex;
    flex-direction: column;
    gap: 15px;
    line-height: 1.4;

    p {
        padding: 10px 0px;
    }
}

.person-biography .biography-text p {
    padding: 10px 0px;
}

.person-biography .person-name {
    padding: 10px 0px;

}
</style>