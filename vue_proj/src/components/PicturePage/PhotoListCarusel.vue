<template>
  <div class="slider-wrapper"> 
    <ul class="slider">
      <li>
        <input type="radio" id="slide1" name="slide" checked>
        <label for="slide1"></label>
        <img src="https://asugubkin.ru/about/history/picture/.keep/.p1.jpg" alt="Panel 1">
      </li>
      <li>
        <input type="radio" id="slide2" name="slide">
        <label for="slide2"></label>
        <img src="https://asugubkin.ru/about/history/picture/.keep/.p2.jpg" alt="Panel 2">
      </li>
      <li>
        <input type="radio" id="slide3" name="slide">
        <label for="slide3"></label>
        <img src="https://asugubkin.ru/about/history/picture/.keep/.p3.jpg" alt="Panel 3">
      </li>
      <li>
          <input type="radio" id="slide4" name="slide">
          <label for="slide4"></label>
          <img src="https://asugubkin.ru/about/history/picture/.keep/.p4.jpg" alt="Panel 4">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PhotoCarousel',
  data() {
    return {
      photos: [
        { url: "https://asugubkin.ru/about/history/picture/.keep/.p1.jpg" },
        { url: "https://asugubkin.ru/about/history/picture/.keep/.p2.jpg" },
        { url: "https://asugubkin.ru/about/history/picture/.keep/.p3.jpg" },
        { url: "https://asugubkin.ru/about/history/picture/.keep/.p4.jpg" },
      ],
    };
  },
};
</script>

<style scoped>

.slider-wrapper{
  display: flex;
  margin: 150px 0px 100px 0px;
  justify-content: center;
}
.slider {
  background-color: #fff;
  box-shadow: inset 0 0 2px hsla(0, 0%, 0%, .2),
    0 3px 1px hsla(0, 0%, 100%, .75),
    0 -1px 1px 2px hsla(0, 0%, 0%, .1);
  height: 30.75em;
  margin: 0 auto; 
  padding: .5em;
  width: 40em;
  position: relative;
}


.slider:before {
  background-color: #7045a7;
  bottom: -2.5em;
  box-shadow: inset 0 1px 1px 1px hsla(0, 0%, 100%, .2),
    inset 0 -2px 1px hsla(0, 0%, 0%, .4),
    0 5px 50px hsla(0, 0%, 0%, .25),
    0 20px 20px -15px hsla(0, 0%, 0%, .2),
    0 30px 20px -15px hsla(0, 0%, 0%, .15),
    0 40px 20px -15px hsla(0, 0%, 0%, .1);
  content: '';
  left: -2.5em;
  position: absolute;
  right: -2.5em;
  top: -2.5em;
  z-index: -1;
}
.slider:after {
  background-color: #fff5e5;
  bottom: -1.5em;
  box-shadow: 0 2px 1px hsla(0, 0%, 100%, .2),
    0 -1px 1px 1px hsla(0, 0%, 0%, .4),
    inset 0 2px 3px 1px hsla(0, 0%, 0%, .2),
    inset 0 4px 3px 1px hsla(0, 0%, 0%, .2),
    inset 0 6px 3px 1px hsla(0, 0%, 0%, .1);
  content: '';
  left: -1.5em;
  position: absolute;
  right: -1.5em;
  top: -1.5em;
  z-index: -1;
}

.slider li {
  box-shadow: 0 -1px 0 2px hsla(0, 0%, 0%, .03);
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
}

.slider input {
  display: none;
}

.slider label {
  background-color: #111;
  background-image: linear-gradient(transparent, hsla(0, 0%, 0%, .25));
  border: .2em solid transparent;
  bottom: .5em;
  border-radius: 100%;
  cursor: pointer;
  display: block;
  height: .5em;
  left: 24em;
  opacity: 0;
  position: absolute;
  transition: .25s;
  width: .5em;
  visibility: hidden;
  z-index: 10;
}

.slider label:after {
  border-radius: 100%;
  bottom: -.2em;
  box-shadow: inset 0 0 0 .2em #111,
    inset 0 2px 2px #000,
    0 1px 1px hsla(0, 0%, 100%, .25);
  content: '';
  left: -.2em;
  position: absolute;
  right: -.2em;
  top: -.2em;
}

.slider:hover label {
  opacity: 1;
  visibility: visible;
}

.slider input:checked+label {
  background-color: #f3f1f1;
}

.slider:hover li:nth-child(1) label {
  left: .5em;
}

.slider:hover li:nth-child(2) label {
  left: 2em;
}

.slider:hover li:nth-child(3) label {
  left: 3.5em;
}

.slider:hover li:nth-child(4) label {
  left: 5em;
}

.slider img {
  height: 100%;
  opacity: 0;
  transition: .25s;
  width: 100%;
  vertical-align: top;
  visibility: hidden;
  object-fit: cover;

}

.slider li input:checked~img {
  opacity: 1;
  visibility: visible;
  z-index: 10;

}

</style>