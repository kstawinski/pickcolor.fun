<template>
  <div class="timer">
    <div class="timer_row">
      <div class="timer_bar">
        <div class="timer_bar--line" :style="{'width': `${time * 10}%`}"></div>
      </div>
    </div>
    <div class="timer_row timer_text">{{ time }} s</div>
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
  position: absolute;
  top: 0;
  left: 0;
  padding: 30px;
  width: 100vw;

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
      transition: 0.3s all;

        &--line {
          background: linear-gradient(#f27121, #e94057);
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 50px;
          height: 10px;
        }
    }
}
</style>
