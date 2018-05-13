<template>
  <div class="box-component">
      <p class="discount" v-show="discount"><i class="icon-promo"></i></p>
      <div class="dot" v-show="newpromo"></div>
      <img class="icon-box" v-bind:src="imagePath">
      <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ['icon', 'name', 'newpromo', 'discount'],
  computed:{
      imagePath() {
          return require('../assets/icon/' + this.icon);
      }
  }
}
</script>

<style scoped>
.box-component {
    width: 100%;
    height: 98px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}
.box-component .icon-box {
    height: 35px;
    margin-bottom: 10px;
}
.box-component p {
    color: #222;
    text-align: center;
    font-size: 14px;
}
.box-component .discount {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #7ed321;
    color: white;
    padding: 4px;
    font-size: 12px;
    border-top-left-radius: 7px;
    border-bottom-right-radius: 7px;
}
.box-component .icon-promo {
    display: block;
}
.box-component .dot {
    position: absolute;
    background-color: #ff001f;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    top: 5px;
    right: 5px;
}
</style>
