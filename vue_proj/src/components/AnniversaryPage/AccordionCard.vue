<template>
    <div class="accordion-wrapper">
        <ul>
            <li>
                <input type="checkbox" checked>
                <i></i>
                <h2>{{title}}</h2>
                <p v-html="safeContent"></p>
            </li>
            <li>
                <input type="checkbox" checked>
                <i></i>
                <h2>Поздравления и благодарности</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quasi, quia provident facere
                    recusandae itaque assumenda fuga veniam dicta earum dolorem architecto facilis nisi pariatur.</p>
            </li>
            <li>
                <input type="checkbox" checked>
                <i></i>
                <h2>Юбилейные издания</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas placeat assumenda mollitia magni
                    consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit,
                    magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium
                    deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos
                    similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse
                    nesciunt libero.</p>
            </li>
            <li>
                <input type="checkbox" checked>
                <i></i>
                <h2>Фото и видео</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas placeat assumenda mollitia magni
                    consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit,
                    magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium
                    deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos
                    similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse
                    nesciunt libero.</p>
            </li>
        </ul>
    </div>
</template>
<script>
import DOMPurify from 'dompurify';
export default {
    name: 'AccordionCard',
    props:{
        title: {
            type: String,
            default:'Программа юбилейных мероприятий'
        },
        content: {
            type: String,
            default: "<table><tr valign=top><td class=text>Сбор, регистрация участников круглого стола.</td></tr><tr valign=top><td class=text><nobr><b>10:00 - 12:00</b></nobr></td><td class=text><b>Заседание круглого стола</b> «Перспективы развития интегрированных АСУ процессами и объектами нефтегазового производства». <br>Цель: организация сотрудничества в учебной, научной, издательской и методической сфере (совместные учебники и учебно-методические разработки, взаимодействие по вопросам оппонирования диссертаций, обмен лекторами, организация взаимодействия в области научных публикаций, совместные научно-технические конференции и др.)</td></tr><tr valign=top><td class=text><nobr><b>12:00 - 13:00</b></nobr></td><td class=text>Обед для участников круглого стола.</td></tr><tr valign=top><td class=text><nobr><b>13:00 - 14:00</b></nobr></td><td class=text>Экскурсия по кафедре, факультету, музею Университета.</td></tr><tr valign=top><td class=text align=center><nobr><b>13:30</b></nobr></td><td class=text>Сбор, регистрация участников торжественного заседания, посвященного 40-летию кафедры «Автоматизированные системы управления» (АСУ) РГУ нефти и газа имени И.М. Губкина.</td></tr><tr valign=top><td class=text><nobr><b>14:00 - 16:30</b></nobr></td><td class=text><b>Торжественное заседание.</b><br>Вступительное слово ректора РГУ нефти и газа имени И.М. Губкина проф. В.Г. Мартынова.<br>Приветственное выступление декана факультета АиВТ доц. И.Ю. Храброва.<br>«Вчера, сегодня, завтра кафедры АСУ» — зав. кафедрой АСУ проф. Л.И. Григорьев.<br>Выступления гостей.<br>Вручение альбомов выпускникам кафедры.<br>Выступления выпускников кафедры разных лет.<br>Демонстрация фильма «Системный анализ в проектах управления для нефтегазового производства». </td></tr><tr valign=top><td class=text><nobr><b>16:30 - 18:00</b></nobr></td><td class=text>Концерт, фуршет.</td></tr><tr valign=top><td class=text><nobr><b>18:00 - 20:00</b></nobr></td><td class=text>Встреча выпускников: фуршет, выступления выпускников, фотографии на память, запись в книге «Добрые пожелания и яркие воспоминания».</td></tr><tr valign=top><td class=text align=center><nobr><b>20:00</b></nobr></td><td class=text>Окончание мероприятий.</td></tr></table>"
        }
    },
    computed: {
        safeContent() {
            return DOMPurify.sanitize(this.content);
        },
    }
}
</script>

<style scoped>
.accordion-wrapper {

    margin: 30px 50px;
    padding: 0 15px;
    text-align: center;
}

section.accordion-wrapper {
    padding-top: 2em;
    padding-bottom: 3em;
}

.accordion-wrapper ul {
    text-align: left;
}

.transition,
p,
ul li i:before,
ul li i:after {
    transition: all 0.3s;
}

.accordion-wrapper .no-select,
.accordion-wrapper h2 {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    user-select: none;
}

.accordion-wrapper h2 {
    color: #cc071e;
    font-size: 22px;
    line-height: 34px;
    text-align: left;
    padding: 15px 15px 0;
    text-transform: none;
    font-weight: 600;
    letter-spacing: 1px;
    display: block;
    margin: 0;
    cursor: pointer;
    transition: .2s;
}

.accordion-wrapper p {
    color: #333;
    text-align: left;
    font-size: 19px;
    line-height: 1.45;
    position: relative;
    overflow: auto;
    max-height: 500px;
    will-change: max-height;
    contain: layout;
    display: inline-block;
    opacity: 1;
    transform: translate(0, 0);
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 0 50px 0 15px;
    transition: .3s opacity, .6s max-height;
    hyphens: auto;
    z-index: 2;
}

.accordion-wrapper ul {
    list-style: none;
    perspective: 900;
    padding: 0;
    margin: 0;
}

.accordion-wrapper ul li {
    position: relative;
    overflow: hidden;
    padding: 0;
    margin: 0;
    /*padding-bottom: 4px;*/
    /*padding-top: 18px;*/
    background: #fff;
    box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.1);
    -webkit-tap-highlight-color: transparent;
}

.accordion-wrapper ul li+li {
    margin-top: 15px;
}

.accordion-wrapper ul li:last-of-type {
    padding-bottom: 0;
}

.accordion-wrapper ul li i {
    position: absolute;
    transform: translate(-6px, 0);
    margin-top: 28px;
    right: 15px;
}

.accordion-wrapper ul li i:before,
ul li i:after {
    content: "";
    position: absolute;
    background-color: #cc071e;
    width: 3px;
    height: 9px;
}

.accordion-wrapper ul li i:before {
    transform: translate(-2.1px, 0) rotate(45deg);
}

.accordion-wrapper ul li i:after {
    transform: translate(2.1px, 0) rotate(-45deg);
}

.accordion-wrapper ul li input[type=checkbox] {
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    touch-action: manipulation;
}

.accordion-wrapper ul li input[type=checkbox]:checked~h2 {
    color: #000;
}

.accordion-wrapper ul li input[type=checkbox]:checked~p {
    /*margin-top: 0;*/
    max-height: 0;
    transition: .3s;
    opacity: 0;
    /*transform: translate(0, 50%);*/
}

.accordion-wrapper ul li input[type=checkbox]:checked~i:before {
    transform: translate(2.3px, 0) rotate(45deg);
}

.accordion-wrapper ul li input[type=checkbox]:checked~i:after {
    transform: translate(-2.3px, 0) rotate(-45deg);
}











* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body {
    height: 100%;
}

a,
a:visited,
a:focus,
a:active,
a:link {
    text-decoration: none;
    outline: 0;
}

a {
    color: currentColor;
    transition: .2s ease-in-out;
}

h1,
h2,
h3,
h4 {
    margin: .3em 0;
}

ul {
    padding: 0;
    list-style: none;
}

img {
    vertical-align: middle;
    height: auto;
    width: 100%;
}
</style>