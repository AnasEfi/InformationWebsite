<template>
    <header class="header">
        <div class="first-header-part">
            <div class="main-title">
                <a href="/">
                    <p>АСУ</p>
                </a>
            </div>
            <div class="main-subtitle">
                <p>Кафедра автоматизированных
                    <br>систем управления
                </p>
            </div>
            <div class="first-header-part-sections">
                <div class="item-first-header-part">
                    <p>Положение о кафедре</p>
                </div>
                <div class="slash"></div>
                <div class="item-first-header-part">
                    <p>Документы СМК</p>
                </div>
            </div>
        </div>

        <div class="second-header-title">
            <nav class="low-wrapper">
                <button class="menu-toggle" @click="toggleMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </button>
                <ul class="main-nav" :class="{ 'show-menu': isMenuOpen }">

                    <li v-for="item in menu" :key="item.id" class="nav-item"
                        :class="{ 'dropdown': item.subItems.length, 'low-wrapper-arrow': item.subItems.length }">
                        <router-link :to="item.path">
                            {{ item.title }}
                        </router-link>
                        <svg v-if="item.subItems.length" class="low-wrapper-arrow" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path
                                d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z">
                            </path>
                        </svg>
                        <ul v-if="item.subItems" class="dropdown-content">
                            <div class="line"></div>
                            <li v-for="subItem in item.subItems" :key="subItem.id"
                                :class="{ 'dropdown-sub': subItem.subItems, 'low-wrapper-arrow-sub': subItem.subItems }">
                                <router-link :to="subItem.path">
                                    {{ subItem.title }}
                                    <svg v-if="subItem.subItems.length" class="arrow-icon"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path
                                        d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z">
                                    </path>
                                </svg>
                                </router-link>
                                
                                <ul v-if="subItem.subItems.length > 0" class="dropdown-content-sub">
                                 <div class="line"></div>
                                    <li v-for="subSubItem in subItem.subItems" :key="subSubItem.id">
                                        <router-link :to="subSubItem.path">
                                          
                                            {{ subSubItem.title }}
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AppHeader',
    title: 'Кафедра Автоматизированных систем управления',
    data() {
        return {
            menu: [],
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        async fetchMenu() {
            try {
                const response = await axios.get('http://localhost:3000/menu');
                this.menu = this.processMenu(response.data);
                console.log(this.menu);
            } catch (error) {
                console.error('Ошибка при получении меню:', error);
            }
        },
        processMenu(menuItems) {
            const menuMap = {};
            const rootItems = [];

            menuItems.forEach(item => {
                menuMap[item.id] = { ...item, subItems: [] };
            });

            menuItems.forEach(item => {
                if (item.parentId !== 0 && item.parentId !== 1) {
                    if (menuMap[item.parentId]) {
                        menuMap[item.parentId].subItems.push(menuMap[item.id]);
                    }
                } else {
                    rootItems.push(menuMap[item.id]);
                }
            });
            return rootItems;
        }
    },
    created() {
        this.fetchMenu();
    }
}
</script>

<style scoped>
.header>.first-header-part {
    display: flex;
    height: 100px;
    background-color: rgb(74, 72, 101);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.61);
}

.header>.first-header-part>.main-title {
    font-size: 100px;
    font-weight: 1000;
    padding: 10px 10px 0 30px;
    color: white;
}

.main-title a {
    text-decoration: none;
    color: inherit;
}

.main-title a p {
    transition: color 0.3s ease;
}

.main-title a:hover p {
    color: #f4cf78d4;
}

.header>.first-header-part>.main-subtitle {
    display: flex;
    align-items: center;
    padding-left: 20px;
}

.header>.first-header-part>.main-subtitle p {
    font-size: 30px;
    color: white;
    font-weight: 100;
}

.header>.first-header-part>.first-header-part-sections {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 30px;
}

.header>.first-header-part>.first-header-part-sections p {
    color: white;
    font-size: 15px;
    font-weight: 1000;
}

.item-first-header-part {
    position: relative;
    padding-right: 10px;
}

.item-first-header-part:not(:last-child)::after {
    content: '/';
    position: absolute;
    top: -10px;
    right: -10px;
    color: rgba(255, 255, 255, 0.61);
    font-size: 30px;
}


.header>.second-header-title p {
    font-size: 50px;
    color: rgb(74, 72, 101);
    padding-left: 55px;
    height: 100%;
    margin: 0;
}

.header>.second-header-title {
    display: flex;
    width: 100%;
    justify-content: space-between;
    z-index: 1000;
    background-color: white;
    transition: .5s ease-out;
    font-family: "Ruda";
    box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
}

.header>.second-header-title p {
    font-family: "Ruda", sans-serif;
    font-size: 50px;
    color: rgb(74, 72, 101);
    align-content: center;
    padding: 0px 0px 0px 55px;
    height: 100%;

}

nav.low-wrapper {
    height: 90px;
    align-content: center;
    font-family: "Ruda", sans-serif;
    font-weight: 800;
    font-size: 20px;
}

.main-nav {
    display: flex;
    flex-wrap: nowrap;
    padding: 0px 50px 0px 30px;
    position: relative;
    gap: 25px;
    justify-content: right;
    height: 100%;
    align-items: center;
    text-align: center;
    color: rgb(74, 72, 101);

}

.low-wrapper-arrow {
    margin: 0 0 0 2px;
    padding: 0;
    fill: rgb(74, 72, 101);
}

.low-wrapper-arrow svg {
    height: 12px;

}



.nav-item {
    column-gap: 3px;
    position: relative;
    align-self: center;
    height: 100%;
}

.nav-item:not(:last-child)::after {
    content: '/';
    position: absolute;
    color: rgba(144, 144, 144, 0.411);
    top: 25px;
    right: -20px;
    font-size: 26px;
    font-weight: 100;
}

.nav-item a {
    display: inline-block;
    height: 100%;
    text-align: center;
    align-content: center;
}

.dropdown-content {
    display: flex;
    flex-wrap: nowrap;
    margin-top: -13px;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 200px;
    box-shadow: 1px 8px 16px 6px rgba(0, 0, 0, 0.2);

    .line {
        border-top: 5px solid rgb(74, 72, 101);
    }

    a {
        color: rgb(60, 53, 53);
        padding: 12px 16px;
        margin: 0 0 0 -2px;
        /*todo margin!*/
        text-decoration: none;
        box-shadow: 0 0 0 0 rgb(0, 0 0, 0.1);
        display: block;
        box-shadow: 0px 0px 1px 0px #69696952;
    }

    a:hover {
        background-color: #000000;
    }

}
.arrow-icon {
    width: 12px; 
    height: 12px;
    fill: rgb(74, 72, 101); /* Цвет стрелки */
  
}
.dropdown:hover svg.arrow-icon {
   
}

.dropdown-content-sub {
    display: none;
    position: absolute;
    top: 0px;
    left: 100%;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
   
    min-width: 200px;
    column-gap: 3px;


    a {
        color: black;
        text-decoration: none;
        display: block;
    }

    a:hover {
        background-color: #000000;
    }

}


.dropdown:hover .dropdown-content {
    display: block;
}


.dropdown-sub:hover .dropdown-content-sub {
    display: block;
}

.low-wrapper a {
    transition: .3s;
}

.low-wrapper a:hover {
    transition: .3s;
    color: #c8bebe;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    fill: rgb(31, 16, 16);
    padding: 10px;
}

.menu-toggle svg {
    height: 24px;
    width: 24px;
}

@media (max-width: 768px) {
    .main-nav {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 75px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(74, 72, 101);
        z-index: 1000;
        padding: 0px 0px;
        justify-content: flex-start;
        gap: 2px;

        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        /* Для IE и Edge */
    }

    .scrollable::-webkit-scrollbar {
        display: none;
        /* Для Chrome, Safari и Opera */
    }

    .main-nav.show-menu {
        display: flex;
        position: fixed;
        left: 0;
        background-color: rgb(74, 72, 101);

    }

    .nav-item {
        font-size: 20px;
        font-weight: 600;
        position: relative;
        align-self: center;

        &:hover {
            background-color: rgb(7, 6, 9);
        }

    }

    span.low-wrapper-arrow {
        margin: 0 0 0 9px;
        padding: 0;
        fill: white;
    }

    .dropdown-content {
        display: none;
        width: 100%;
        position: absolute;
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 10000;
    }

    .dropdown-content a {
        color: black;
        padding: 30px 16px;
        text-decoration: none;
        box-shadow: 0 0 0 0 rgb(0, 0 0, 0.1);
        display: block;
    }

    .menu-toggle {
        display: block;
    }
}

::v-deep .dropdown-sub:hover .arrow-icon {
    transform: rotate(-90deg);
    transition: transform 0.3s ease;
}


::v-deep .low-wrapper-arrow svg,
.arrow-icon {
    transition: transform 0.3s ease;
}
</style>