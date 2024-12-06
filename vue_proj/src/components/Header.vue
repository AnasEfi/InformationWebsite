<template>
    <header class="header">
        <nav class="low-wrapper">
            <button class="menu-toggle" @click="toggleMenu">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </button>
            <ul class="main-nav" :class="{ 'show-menu': isMenuOpen }">
                  
                <li v-for="item in menu" :key="item.id" class="nav-item" :class="{ 'dropdown': item.subItems }">
                    <router-link :to="item.path">
                        {{ item.name }}
                    </router-link>
                    <span v-if="item.subItems" class="low-wrapper-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z">
                            </path>
                        </svg>
                    </span>
                    <ul v-if="item.subItems" class="dropdown-content">
                        <li v-for="subItem in item.subItems" :key="subItem.id" class="nav-item"
                            :class="{ 'dropdown': subItem.subItems }">
                            <router-link :to="subItem.path">
                                {{ subItem.name }}
                            </router-link>
                            <span v-if="subItem.subItems" class="low-wrapper-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path
                                        d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z">
                                    </path>
                                </svg>
                            </span>
                            <ul v-if="subItem.subItems" class="dropdown-content">
                                <li v-for="subSubItem in subItem.subItems" :key="subSubItem.id">
                                    <router-link :to="subSubItem.path">
                                        {{ subSubItem.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AppHeader',
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

            // Создаем карту элементов меню
            menuItems.forEach(item => {
                menuMap[item.id] = { ...item, subItems: [] };
            });

            // Связываем элементы с их родителями
            menuItems.forEach(item => {
                if (item.parentId !== 1) {
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

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: inherit;
}

:root {
    --main-bg-color: #f5f5f5;
    --font-color-dark-primary: #454444;
    --font-color-secondary: #696969;
    --secondary-bg-color: #4271a4;
    --menu-bg-color: #C8D7E4;
}

.header {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    z-index: 1000;
    background-color: rgb(74, 72, 101);
    transition: .5s ease-out;
    font-family: "Ubuntu";
}

.header>.logoItem {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.header>.logoItem p {
    font-family: Helvetica, sans-serif;
    font-size: 30px;
    color: white;
}

nav.low-wrapper {
    flex: 4;
    top: 0;
    height: 75px;
    align-content: center;
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-style: normal;
    color: var(--main-bg-color);
}

.main-nav {
    display: flex;
    flex-wrap: nowrap;
    padding: 0px 50px 0px 0px;
    position: relative;
    gap: 20px;
    justify-content: right;
    height: 100%;
    align-items: center;
    text-align: center;
}

span.low-wrapper-arrow {
    margin: 0 0 0 2px;
    padding: 0;
    fill: white;
}

span.low-wrapper-arrow svg {
    height: 12px;
}

span.low-wrapper-arrow-sub {
    margin: 0 0 0 2px;
    padding: 0;
    fill: rgb(0, 0, 0);
}

span.low-wrapper-arrow-sub svg {
    height: 12px;
}

.nav-item {
    column-gap: 3px;
    position: relative;
    align-self: center;
    height: 100%;
}

.nav-item a {
    display: inline-block;
    height: 100%;
    text-align: center;
    align-content: center;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropdown-content-sub {
    display: none;
    position: absolute;
    top: 0px;
    left: 100%;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    list-style: none;
    min-width: 200px;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    box-shadow: 0 0 0 0 rgb(0, 0 0, 0.1);
    display: block;
}

.dropdown-content-sub a {
    color: black;
    text-decoration: none;
    box-shadow: 0 0 0 0 rgb(0, 0 0, 0.1);
    display: block;
}

.text-arror {
    align-items: center;
}

.dropdown-content a:hover {
    background-color: #000000;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-content-sub a:hover {
    background-color: #000000;
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
    fill: white;
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
        width: 100%;

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
</style>