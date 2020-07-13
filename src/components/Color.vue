<template>
  <button
    class="color"
    :style="{ background: generateGradient(hex) }"
    @click="emitClick($event.target)">

    <span class="color_text">Pick this color</span>
  </button>
</template>

<script>
export default {
  name: 'Color',
  props: {
    hex: String,
    top: Boolean,
  },
  methods: {
    emitClick(event) {
      this.$emit('clicked', this.hex);
      this.turnAnimation(event);
    },
    // Generate linear gradient for button background
    generateGradient(hex) {
      const lighten = this.hexToRGB(hex, 0.4);
      return `linear-gradient(to top, ${lighten}, ${hex})`;
    },
    // Modified code from Stackoverflow
    hexToRGB(hex, alpha) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);

      if (alpha) {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      }
      return `rgba(${r}, ${g}, ${b})`;
    },
    turnAnimation(target) {
      target.classList.add('color_animation');
      setTimeout(() => {
        target.classList.remove('color_animation');
      }, 200);
    },
  },
  mounted() {
    window.addEventListener('keyup', (event) => {
      // Top arrow click
      if (event.keyCode === 38 && this.top) {
        this.emitClick();
      }
      // Down arrow cick
      if (event.keyCode === 40 && this.top !== true) {
        this.emitClick();
      }
    });
  },
};
</script>

<style scoped lang="scss">
.color {
  width: 210px;
  height: 250px;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 10px;
  display: block;

    &:first-child {
      margin: 0 auto 30px auto;
    }
    &_text {
      visibility: hidden;
    }
    &:hover {
      opacity: .85;
    }
    &_animation {
      animation: click .2s;
    }
}
@media (max-width: 768px) {
  .color {
    width: 40%;
    height: 200px;
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

@keyframes click {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
