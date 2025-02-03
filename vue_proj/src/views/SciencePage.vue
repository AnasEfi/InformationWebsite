<template>
    <section class="resources">
        <Header></Header>
        <ParallaxEffect :backgroundImage="parallaxImage" :text="textForWrapper" />
        <BreadCrumbs />

        <div class="info-block" v-if="safeContent.length > 0">
            <div class="content" v-html="safeContent"></div>
        </div>
        <div v-else>
            Нет данных для отображения.
        </div>
        <Footer></Footer>
    </section>
</template>

<script>
import axios from 'axios';
import DOMPurify from 'dompurify';
import Header from '../components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import ParallaxEffect from '@/components/common/ParallaxEffect.vue';
import parallaxImage from '@/assets/images/parallax.jpg';

export default {
    components: { Header, Footer, BreadCrumbs, ParallaxEffect },
    name: 'SciencePage',

    data() {
        return {
            scienceData: [],
            parallaxImage,
            textForWrapper: "Организация научных исследований на кафедре",
        }
    },
    methods: {
        async fetchScience() {
            try {
                const response = await axios.get('http://localhost:3000/science');
                this.scienceData = response.data;

            } catch (error) {

                console.error('Error fetching scienceInfo', error);
            }
        },
        createStyleForIncomeContent() {
            const contentContainer = this.$el.querySelector('.content');

            const wrapElement = (element, wrapper, className) => {
                wrapper.classList.add(className); // Добавляем класс к <div>
                element.parentNode.insertBefore(wrapper, element);
                wrapper.appendChild(element);
            };

            if (contentContainer) {
                // Находим все <p>
                const paragraphs = contentContainer.querySelectorAll('p');

                paragraphs.forEach((p) => {
                    // Создаем обертку <div>
                    const wrapperDiv = document.createElement('div');
                    let nextElement = p.nextElementSibling;
                    if (nextElement && (nextElement.tagName === 'UL')) {
                        wrapperDiv.classList.add('group-wrapper-first');
                        let nextElement = p.nextElementSibling;
                        p.parentNode.insertBefore(wrapperDiv, p);
                        wrapperDiv.appendChild(p);
                        wrapperDiv.appendChild(nextElement);
                        const wrapperAdd = document.createElement('div');
                        wrapperAdd.classList.add('text-part');
                        p.parentNode.insertBefore(wrapperAdd, p);
                        wrapperAdd.appendChild(p);
                        wrapperAdd.appendChild(nextElement);
                    }
                    else {
                        wrapperDiv.classList.add('group-wrapper');
                        p.parentNode.insertBefore(wrapperDiv, p);
                        wrapperDiv.appendChild(p);
                        const wrapperAdd = document.createElement('div');
                        wrapperAdd.classList.add('text-part');
                        p.parentNode.insertBefore(wrapperAdd, p);
                        wrapperAdd.appendChild(p);
                    }
                    const imagePart = document.createElement('div');
                    imagePart.classList.add('image-part');
                    wrapperDiv.appendChild(imagePart);

                });
                const listItems = contentContainer.querySelectorAll('li');  
                listItems.forEach((li) => {
                    li.style.listStyleType = 'disc';

                });
                const groupWrappers = contentContainer.querySelectorAll('.group-wrapper');
                groupWrappers.forEach((wrapper, index) => {
                    if (index % 2 === 0) {
                        wrapper.classList.add('odd');
                    } else {
                        wrapper.classList.add('even');
                    }
                })
                const divWrappers = contentContainer.querySelectorAll('.group-wrapper-first');

                divWrappers.forEach(divWrapper => {
                    const paragraphsToWrap = divWrapper.querySelectorAll('p');
                    const lists = divWrapper.querySelectorAll('ul');

                    paragraphsToWrap.forEach(p => {
                        const div = document.createElement('div');
                        wrapElement(p, div, 'paragraph-container');
                    });

                    lists.forEach(ul => {
                        const div = document.createElement('div');
                        wrapElement(ul, div, 'list-container');
                    });
                });

            }
        },
    },

    created() {
        this.fetchScience();
    },

    computed: {
        safeContent() {
            return DOMPurify.sanitize(this.scienceData.content);
        },

    },
    watch: {
        safeContent(newContent) {
            if (newContent) {
                this.$nextTick(() => {
                    this.createStyleForIncomeContent();
                });
            }
        }
    },
}
</script>

<style scoped>
.info-block {
    padding: 20px 0px;
}



::v-deep .content ul,
ol {

    padding-left: 40px;
    line-height: 1.1;
}

::v-deep .content ul {
    padding-top: 10px;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

::v-deep .content .group-wrapper-first {
   
    p {
        padding: 10px 10px;
        font-size: 30px;
        text-align: left;
        font-weight: 500;

    }

    li {
        padding: 3px 0px;
        font-size: 16px;
        text-align: left;
    }

}

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

::v-deep .content .group-wrapper:nth-child(odd) .text-part {
    order: 2;
    left: -30px;
    right: auto;
}

::v-deep .content .group-wrapper:nth-child(odd) .image-part {
    order: 1;
    left: 30px;
    right: auto;
}

::v-deep .content .group-wrapper:nth-child(even) .text-part {
    order: 1;
    left: 30px;
    right: auto;
}

::v-deep .group-wrapper-first{
    margin: 10px 0px;
    padding: 10px 0px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.137);
    
}

::v-deep .group-wrapper-first .text-part{
    display: flex;
    flex-direction: row;
    padding: 10px 40px;
    align-items: center;

    .paragraph-container{
        flex: 2;
    }
    .list-container {
        flex: 3;
    }
}

::v-deep .content .group-wrapper:nth-child(even) .image-part {
    order: 2;
    left: -30px;
    right: auto;
}
</style>