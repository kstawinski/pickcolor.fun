<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://meyerweb.com/eric/tools/css/reset/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');

* {
  box-sizing: border-box;
}
body {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  width: 100vw;
  height: 100vh;
  background-color: #17171f;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
