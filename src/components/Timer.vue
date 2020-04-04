<template>
  <div class="timer">
    <div class="timer_row">
      <div class="timer_bar">
        <div class="timer_bar--line" :style="{'width': `${time * 50}%`}"></div>
      </div>
    </div>
    <div class="timer_row timer_text"><span class="timer_text--highlight">{{ time }}</span> s</div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    time: Number,
  },
};
</script>

<style lang="scss" scoped>
.timer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: 400;
  font-size: 18px;

    &_row {
      &:first-child {
        width: 80%;
      }
    }
    &_bar {
      background: rgba(#ffffff, 0.2);
      border-radius: 50px;
      height: 10px;
      position: relative;
      width: 100%;

        &--line {
          background: linear-gradient(#f27121, #e94057);
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 50px;
          height: 10px;
          transition: 0.1s all;
        }
    }
    &_text {
      text-transform: none;

        &--highlight {
          font-weight: 500;
        }
    }
}
// iPhone 5/SE
@media (max-width: 320px) {
  .timer {
      &_bar {
        width: 95%;
      }
  }
}
</style>
