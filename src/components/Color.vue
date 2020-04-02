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
      if (event.keyCode === 37 && this.left) {
        this.emitClick();
        console.log('lewy klik');
      }
      if (event.keyCode === 39 && this.left !== true) {
        this.emitClick();
        console.log('prawy klik');
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
</style>
