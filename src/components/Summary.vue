<template>
  <div class="summary">
    <div class="summary_container">
      <div class="summary_result">👌 <span class="summary_score">{{ getLastScore() }}</span></div>
      <p class="summary_text">
        Maybe you'll try one more time?
        <span class="summary_hint">Press <code>enter</code> to start game faster.</span>
      </p>
      <button class="button button_animated" @click="redirectToGame">Try again</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  methods: {
    getLastScore() {
      return sessionStorage.score;
    },
    redirectToGame() {
      this.$emit('close');
    },
  },
  mounted() {
    window.addEventListener('keyup', (event) => {
      // On enter click
      if (event.key === 'Enter') {
        // Emit button click
        this.redirectToGame();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.summary {
  background-color: rgba(#17171f, 0.95);
  display: flex;
  align-items: center;
  justify-content: spacebetween;
  width: 100vw;
  height: 100vh;
  font-size: 1.2em;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;

    &_hint {
      display: none;
    }
    &_container {
      text-align: center;
      padding: 0 20px;
      margin: 0 auto;
      z-index: 2;
    }
    &_result {
      font-size: 3em;
    }
    &_text {
      color: #a9a9a9;
      margin: 20px 0 30px 0;
      padding: 0 15px;
      line-height: 1.3;
    }
}
// Desktop UI
@media (min-width: 769px) {
  .summary {
    &_hint {
      display: block;

        code {
          padding: 2px 7px;
          border-radius: 4px;
          color: rgba(#c5c5c5, 0.6);
          border: 1px solid rgba(#ffffff, 0.15);
          font-size: 16px;
        }
    }
  }
}
</style>
