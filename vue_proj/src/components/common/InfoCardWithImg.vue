<template>
    <div class="content">
        <div class="group-wrapper">
            <div class="image-part">
                <img :src="imgUrl">
            </div>
            <div class="text-part">
                <h2>{{ title }}</h2>
                <p v-html="content">
                </p>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'InfoCardWithImg',
    props: {
        imgUrl: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    }
}
</script>
<style scoped>
::v-deep .content .group-wrapper {

    display: flex;
    margin: 50px 0px 20px 0px;
    padding: 10px 0px 50px 0px;
    position: relative;
    justify-content: center;

}

::v-deep .content .group-wrapper .image-part {
    height: 400px;
    width: 500px;
    padding: 10px 10px;
    background-image: url('https://static.tildacdn.com/tild6334-6130-4066-b830-353334306662/9.jpg');
    background-repeat: no-repeat;
    block-size: cover;
    background-position: center;
    position: relative;
    left: -30px;
    top: 30px;
    z-index: 1;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.162);


}

::v-deep .content .group-wrapper .text-part {

    height: fit-content;
    width: 600px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.171);
    background-color: white;
    padding: 20px 20px;
    position: relative;
    top: -15px;
    left: 30px;
    z-index: 2;
    text-align: start;
    align-content: center;
    font-weight: 600;

    p {
        padding: 10px 20px;
        font-size: 20px;
        line-height: 1.7;

    }
}

::v-deep .content .group-wrapper .text-part::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 2px solid rgba(117, 112, 57, 0.279);
    z-index: 2;
}
</style>