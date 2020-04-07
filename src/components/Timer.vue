<template>
  <div class="timer">
    <div class="timer_row">
      <div class="timer_bar">
        <div class="timer_bar--line" :style="{'width': `${time * 50}%`}"></div>
      </div>
    </div>
    <div class="timer_row timer_text">
      <span class="timer_text--highlight">{{ time.toFixed(1) }}</span>
      s
    </div>
    <div class="timer_hint">Remaining time</div>
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
  color: #fff;
  font-weight: 400;
  font-size: 18px;

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
    &_hint {
      display: none;
    }
}
// Desktop UI
@media (min-width: 769px) {
  .timer {
    padding: 0 0 20px;
    border-bottom: 1px solid rgba(#ffffff, 0.1);
    text-align: left;

    &_text {
      font-weight: 300;
      margin-top: 15px;
      font-size: 1.5em;

        &--highlight {
          font-size: 2em;
          margin-top: 20px;
          font-weight: 400;
        }
    }
    &_hint {
      display: block;
      margin-top: 5px;
      color: rgba(#ffffff, 0.4);
    }
  }
}
// Mobile UI
@media (max-width: 768px) {
  .timer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;

      &_row {
        &:first-child {
          width: 80%;
        }
      }
      &_text {
        font-weight: 200;
        text-transform: none;

        &--highlight {
          font-weight: 500;
        }
      }
  }
}
// iPhone 5/SE
@media (max-width: 320px) {
  .timer {
      &_bar {
        width: 95%;
      }
      &_row {
        width: 70%;
      }
      &_text {
        width: 30%;
      }
  }
}
</style>
