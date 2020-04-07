<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('assets/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');

* {
  box-sizing: border-box;
}
body {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #17171f;
}
@media (min-width: 767px) {
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.button {
  background: linear-gradient(#f27121, #e94057);
  color: #17171f;
  text-decoration: none;
  box-shadow: 0 0 20px rgba(237, 78, 60, 0.4);
  padding: 20px 40px;
  border: 0;
  border-radius: 50px;
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
  font-weight: 500;
  outline: 0;
  cursor: pointer;
  transition: 0.3s all;

    &:hover {
      opacity: .8;
      box-shadow: 0 0 10px rgba(237, 78, 60, 0.6);
    }
    &_full {
      display: block;
      text-align: center;
    }
    &_animated {
      animation-name: pulse;
      animation-duration: 2s;
      animation-iteration-count: infinite;

        &:hover {
          animation-play-state: paused;
        }
    }
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
