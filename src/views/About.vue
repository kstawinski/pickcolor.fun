<template>
  <!-- eslint-disable max-len -->
  <div class="container">
    <div class="about">
      <h1 class="about_title">Introduction</h1>
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
  text-transform: uppercase;

    &_row {
      display: flex;
      justify-content: center;
    }
    &_task {
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
      margin: 0 0 18px 0;
      font-size: 2.2em;
      position: relative;
      display: inline-block;

        &:before {
          content: '';
          width: 100%;
          height: 10px;
          position: absolute;
          background: linear-gradient(#f27121, #e94057);
          left: 0;
          bottom: -3px;
          opacity: .8;
          z-index: -1;
        }
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
        }
    }
    &_button {
      display: block;
      padding: 20px 0;
      text-align: center;
      border-radius: 50px;
      background: linear-gradient(#f27121, #e94057);
      color: #fff;
      font-weight: 500;
      text-decoration: none;
      transition: 0.3s all;
      text-transform: uppercase;
      letter-spacing: 2px;

        &:hover {
          opacity: 0.8;
        }
    }
}
.container {
  width: 90vh;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .container {
    padding: 0 30px;
    width: unset;
    margin: unset;
  }
  .about {
    margin: 50px 0;
    font-size: 1em;

      &_title {
        font-size: 1.5em;
        text-align: center;
      }
  }
  .example {
    padding: 30px 0;

      &_task {
        font-size: 1.4em;
      }
      &_circle {
        width: 120px;
        height: 120px;
        line-height: 120px;
      }
  }
}
</style>
