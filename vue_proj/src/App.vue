<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
    font-family: "Ruda";
}

:root {
    --main-bg-color: rgb(74, 72, 101);
    --secondary-bg-color:  #e8e3d3;
    --font-color-dark-primary: #454444;
    --font-color-secondary: #696969;
    --menu-bg-color:rgb(255, 255, 255);
}

</style>
