<template>
  <button class="color" :style="{ background: hex }" @click="emitClick">
    <span class="color_text">Pick this color</span>
  </button>
</template>

<script>
export default {
  name: 'Color',
  props: {
    hex: String,
    left: Boolean,
  },
  methods: {
    emitClick() {
      this.$emit('clicked', this.hex);
    },
  },
  mounted() {
    window.addEventListener('keyup', (event) => {
      // Left arrow click
      if (event.keyCode === 37 && this.left) {
        this.emitClick();
      }
      // Right arrow cick
      if (event.keyCode === 39 && this.left !== true) {
        this.emitClick();
      }
    });
  },
};
</script>

<style scoped lang="scss">
.color {
  width: 300px;
  height: 300px;
  border: 0;
  outline: 0;
  cursor: pointer;
  margin-right: 20px;
  border-radius: 50%;

    &_text {
      visibility: hidden;
    }
    &:hover {
      opacity: .85;
    }
}
@media (max-width: 768px) {
  .color {
    width: 80%;
    height: 200px;
    border-radius: 10px;
    margin: 0 auto;

      &:first-child {
        margin: 0 auto 10px auto;
      }
  }
}

// iPhone 5/SE
@media (max-width: 320px) {
  .color {
    height: 160px;
  }
}
</style>
