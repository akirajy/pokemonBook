<template>
  <div class="head">
    <img src="./img/back.gif" alt="">
    <h1>Pokemon</h1>
  </div>
</template>

<style scoped lang='less'>
  @font-face {
    font-family: Biko;
    src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/biko-black.woff");
  }
  .head {
    position: relative;
    height: 100%;
    width: 100%;
    img,
    h1 {
      width: 100%;
      position: absolute;
      left: 0;
      height: 100%;
      margin: 0;
    }
    img {
      object-fit: cover;
    }
    h1 {
      font-size: 10vw;
      font-family: Biko, sans-serif;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
      background: white;
      opacity: 0.7;
      mix-blend-mode: screen;
    }
  }
  
</style>