<template>
    <section class="current-deal-block">
        <Header></Header>
       <SectionTitle :title="this.informs.title"/>
        <BreadCrumbs></BreadCrumbs>
        <div class="wrapper">
            <div class="info-block" v-if="safeContent.length > 0">
                <div class="content" v-html="safeContent"></div>
            </div>
            <div v-else>
                Нет данных для отображения.
            </div>

        </div>
        <Footer></Footer>
    </section>

</template>

<script>
import Header from '../components/common/Header.vue'
import Footer from '../components/common/Footer.vue'
import axios from 'axios';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import DOMPurify from 'dompurify';
import SectionTitle from '@/components/common/SectionTitle.vue';

export default {
    name: 'CurrentDealPageHTML',
    components: { Header, Footer, BreadCrumbs, SectionTitle },

    data() {
        return {
            informs: []
        };
    },

    methods: {
        async fetchInforms() {
            try {
                const response = await axios.get("http://localhost:3000/currentDeal");
                this.informs = response.data;
            }
            catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },
        moveElementsToSameLevel() {
            const contentContainer = this.$el.querySelector('.content');
            if (contentContainer) {
                const paragraphs = contentContainer.getElementsByTagName('p');
                Array.from(paragraphs).forEach((p) => {
                    const boldElements = p.getElementsByTagName('b');
                    Array.from(boldElements).forEach((b) => {
                        p.insertAdjacentElement('beforebegin', b.cloneNode(true));
                        b.remove();
                    });
                });
            }

            const boldElements = contentContainer.querySelectorAll('b');
                
            boldElements.forEach((b) => {
                // Создаем новый блок <div>
                const wrapperDiv = document.createElement('div');
                wrapperDiv.classList.add('info-section');       
                wrapperDiv.appendChild(b.cloneNode(true));
                let nextElement = b.nextElementSibling;
               
                let append = function(wrapper, next) {
                    if (next && (next.tagName === 'P' || next.tagName === 'H3' || next.tagName === 'UL')) {
                        wrapper.appendChild(next.cloneNode(true));
                        append(wrapper, next.nextElementSibling);
                        b.parentNode.removeChild(next);
                    }
                }   
                append(wrapperDiv, nextElement);
                b.parentNode.insertBefore(wrapperDiv,b);
                b.parentNode.removeChild(b);
            });

            contentContainer.querySelectorAll('p').forEach(p => {
                p.classList.add('flex-pair-end');
            });
            contentContainer.querySelectorAll('b').forEach(p => {
                p.classList.add('flex-pair-start');
            });
            contentContainer.querySelectorAll('li').forEach(li => {
                li.classList.add('element-of-list');
            });


        }
    },
    created() {
        this.fetchInforms();
    },
    watch: {
        safeContent(newContent) {
            if (newContent) {
                this.$nextTick(() => {
                    this.moveElementsToSameLevel();
                });
            }
        }
    },
    computed: {
        safeContent() {
            const rawContent = this.informs.content;
            const sanitizedContent = DOMPurify.sanitize(rawContent);
            return sanitizedContent;
        }
    }
}
</script>
<style scoped>


.main-img {
    display: flex;
    background-color: rgb(74, 72, 101);
    height: 120px;
    width: 100%;
}

.head-part-current-deal {
    display: flex;
    gap: 30px;
}

.head-img {
    fill: white;
    position: relative;
    padding: 20px 10px;
}

.main-title {
    font-size: 40px;
    color: white;
    font-weight: 600;
    align-self: center;
}

.resource-title {
    font-size: 40px;
}

.flex-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
}

.flex-item {
    display: flex;
    flex: 1 1 45%;
    padding: 10px;
    border: 1px solid #070606;
    background-color: #975757;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.flex-pair-start,
.flex-pair-end {
    flex: 1 1 50%;
    gap: 10px;
}

.flex-pair-start {
    b {
        font-size: 80px;
    }
}

::v-deep .info-section{
    background-color:  rgb(74, 72, 101);
    font-size:20px;
    padding: 40px;
    p {
        padding:10px;
        color: white;
    }
    b {
        align-self: center;
        font-size:30px;
        color:  #e8e3d3;

    }
}

::v-deep .element-of-list{
    flex: 1;
    padding: 10px;
    text-transform:initial;
    background-color: aliceblue;
    border: 1px solid black;
}
::v-deep ul{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
}

::v-deep.group-wrapper-first {
    display: flex;
    flex-direction: row;

}
</style>