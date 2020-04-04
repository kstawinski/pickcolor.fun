<template>
  <transition name="bounce">
    <div class="summary">
      <div class="summary_container">
        <div class="summary_result">👌 <span class="summary_score">{{ getLastScore() }}</span></div>
        <p class="summary_text">Maybe you'll try one more time?</p>
        <button class="summary_button" @click="redirectToGame">Try again</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Summary',
  methods: {
    getLastScore() {
      return sessionStorage.score;
    },
    redirectToGame() {
      this.$router.push('game');
    },
  },
};
</script>

<style lang="scss" scoped>
.summary {
  display: flex;
  align-items: center;
  justify-content: spacebetween;
  width: 100vw;
  height: 100vh;
  font-size: 1.2em;
  color: #fff;

    &_container {
      text-align: center;
      padding: 0 20px;
      margin: 0 auto;
    }
    &_result {
      font-size: 3em;
    }
    &_text {
      color: #a9a9a9;
      margin: 20px 0 30px 0;
    }
    &_button {
      background: linear-gradient(#f27121, #e94057);
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
    }
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
