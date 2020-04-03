<template>
  <!-- eslint-disable max-len -->
  <div class="container">
    <div class="about">
      <h1 class="about_title">How to play?</h1>
      <div class="about_content">
        <p class="about_paragraph">
          This game looks very simple, but...
        </p>
        <p class="about_paragraph">
          Your task is to <span class="about_paragraph--highlight">select the color whose name is displayed on your screen</span>. Be careful, it's the name of the color, not the color of the text. For example:
        </p>
        <div class="about_paragraph example">
          <div class="example_task">Purple</div>
          <div class="example_row">
            <div class="example_circle">Incorrect</div>
            <div class="example_circle">Correct</div>
          </div>
        </div>
        <p class="about_paragraph about_paragraph--info">
          Use arrow keyboard for faster picking the color. (<code>a</code> for first color, <code>b</code> for second).
        </p>
      </div>
      <router-link to="/game" class="about_button">Start game</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped>
.example {
  text-align: center;
  padding: 50px 0;

    &_row {
      display: flex;
      justify-content: center;
    }
    &_task {
      text-transform: uppercase;
      font-size: 38px;
      margin: 0 0 20px 0;
      color: #4287f5;
      font-weight: 400;
    }
    &_circle {
      width: 200px;
      height: 200px;
      line-height: 200px;
      text-align: center;
      border-radius: 50%;
      color: #fff;
      transform: rotate(-4deg);
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 2px;

        &:first-child {
          background: #4287f5;
          margin-right: 20px;
        }
        &:nth-child(2) {
          background: #6c12cc;
        }
    }
}
.about {
  color: #fff;
  font-size: 20px;

    &_title {
      margin: 0 0 30px 0;
      font-size: 2.2em;
    }
    &_content {
      line-height: 1.4;
      margin-bottom: 50px;
    }
    &_paragraph {
      color: #a9a9a9;

        &:not(:last-child) {
          margin-bottom: 10px;
        }
        &--highlight {
          color: #fff;
          font-weight: 500;
          position: relative;

            // &:before {
            //   content: '';
            //   width: 100%;
            //   height: 6px;
            //   position: absolute;
            //   left: 0;
            //   bottom: 1px;
            //   animation: rainbow-bg 10s linear;
            //   animation-iteration-count: infinite;
            //   opacity: .6;
            //   z-index: -1;
            // }
        }
    }
    &_button {
      display: block;
      padding: 20px 0;
      text-align: center;
      border: 2px solid #fff;
      border-radius: 50px;
      background: transparent !important;
      color: #fff;
      font-weight: 500;
      text-decoration: none;
      transition: 0.3s all;
      text-transform: uppercase;
      letter-spacing: 2px;

        &:hover {
          animation: rainbow-bg 25s linear;
          animation-iteration-count: infinite;
          border-color: #17171f;
          color: #17171f;
        }
    }
}
.container {
  width: 90vh;
  margin: 0 auto;
}
@keyframes rainbow-bg {
  100%, 0% {
    background-color: rgb(255,0,0);
  }
  8% {
    background-color: rgb(255,127,0);
  }
  16% {
    background-color: rgb(255,255,0);
  }
  25% {
    background-color: rgb(127,255,0);
  }
  33% {
    background-color: rgb(0,255,0);
  }
  41% {
    background-color: rgb(0,255,127);
  }
  50% {
    background-color: rgb(0,255,255);
  }
  58% {
    background-color: rgb(0,127,255);
  }
  66% {
    background-color: rgb(0,0,255);
  }
  75% {
    background-color: rgb(127,0,255);
  }
  83% {
    background-color: rgb(255,0,255);
  }
  91% {
    background-color: rgb(255,0,127);
  }
}
</style>
