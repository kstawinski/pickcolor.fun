<template>
  <div class="arrowNav">
    <p class="arrowNav_text">
      Use arrow keyboard for faster navigation.
      Click <code class="arrowNav_key">↑</code> to select top color,
      <code class="arrowNav_key">↓</code> to select bottom color,
      <code class="arrowNav_key">enter</code> to start game.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ArrowNav',
  mounted() {
    window.addEventListener('keyup', (event) => {
      // On enter click
      if (event.key === 'Enter') {
        // Redirect to game
        this.$router.push('game');
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.arrowNav {
  &_key {
    margin: 0 5px;
    padding: 2px 7px;
    border-radius: 4px;
    color: #c5c5c5;
    border: 1px solid rgba(#ffffff, 0.4);
  }
}
// Dont show this component on devices with width < 900px
@media (max-width: 900px) {
  .arrowNav {
    display: none
  }
}
</style>
