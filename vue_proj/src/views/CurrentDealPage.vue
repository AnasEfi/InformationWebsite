<template>
    <section class="current-deal-block">
        <Header></Header>
        <div class="main-img">
            <div class="head-part-current-deal">
                <div class="head-img"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"
                        viewBox="0 0 24 24" width="100" height="100">
                        <path
                            d="M23.786,19.492L16.713,1.836c-.624-1.529-2.376-2.269-3.911-1.645l-.925,.378c-.249,.102-.472,.244-.68,.402-.548-.594-1.326-.972-2.196-.972H3C1.346,0,0,1.346,0,3V21c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3V8.895l5.304,13.242c.625,1.543,2.417,2.26,3.909,1.641l.926-.378c1.505-.574,2.286-2.434,1.647-3.907ZM13.574,7.446l2.778-1.132,4.171,10.412-2.778,1.132L13.574,7.446Zm-.942-5.025l.925-.378c.496-.206,1.097,.031,1.302,.543l.75,1.871-2.777,1.132-.747-1.866c-.208-.51,.038-1.095,.549-1.303ZM2,7h3v10H2V7Zm5,0h3v10h-3V7Zm3-4v2h-3V2h2c.551,0,1,.448,1,1ZM3,2h2v3H2V3c0-.552,.449-1,1-1Zm-1,19v-2h3v3H3c-.551,0-1-.448-1-1Zm7,1h-2v-3h3v2c0,.552-.449,1-1,1Zm12.929-.991c-.104,.247-.297,.438-.544,.539h0l-.926,.378c-.511,.206-1.095-.037-1.3-.54l-.669-1.671,2.778-1.132,.665,1.661c.102,.247,.101,.52-.003,.766Z" />
                    </svg>
                </div>
                <div class="main-title">
                    <p>{{ informs.title }}</p>
                </div>
            </div>
        </div>
        <div class="main-title">

        </div>
        <BreadCrumbs></BreadCrumbs>
        <div class="wrapper">
            <DocumentList></DocumentList>
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
import DocumentList from '../components/DocumentList.vue';
import axios from 'axios';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import DOMPurify from 'dompurify';

export default {
    name: 'CurrentDealPage',
    components: { Header, Footer, DocumentList, BreadCrumbs },

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
.wrapper {
    padding: 0px 0px;
}

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