<template>
  <!-- eslint-disable max-len -->
  <div class="container center">
    <div class="home">
      <router-link
        class="button button_text button_sm home_button"
        to="/about"
      >About game
      </router-link>
      <h1 class="home_title">How to play?</h1>
      <div class="home_content">
        <p class="home_paragraph">
          <span class="home_paragraph--highlight">Select the color whose name is displayed on your screen</span>. Be careful, I mean the name of color, not color of the text. For example:
        </p>
        <div class="home_paragraph example">
          <div class="example_task">Purple</div>
          <div class="example_row">
            <div class="example_circle">
              <img class="example_image" src="../assets/icons/close.svg" alt="Incorrect symbol">
            </div>
            <div class="example_circle">
              <img class="example_image" src="../assets/icons/checked.svg" alt="Correct symbol">
            </div>
          </div>
        </div>
        <ArrowNav class="home_paragraph" />
      </div>
      <router-link to="/game" class="button button_full button_animated">Start game</router-link>
    </div>
  </div>
</template>

<script>
import ArrowNav from '@/components/ArrowNav.vue';

export default {
  name: 'Home',
  components: { ArrowNav },
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
.example {
  text-align: center;
  padding: 30px 0;
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
      // line-height: 200px;
      text-align: center;
      border-radius: 50%;
      color: #fff;
      // transform: rotate(-4deg);
      font-weight: 500;
      letter-spacing: 2px;
      display: flex;
      align-items: center;
      justify-content: center;

        &:first-child {
          background: linear-gradient(#4287f5, rgba(#4287f5, 0.75));
          margin-right: 20px;
        }
        &:nth-child(2) {
          background: linear-gradient(#6c12cc, rgba(#6c12cc, 0.75));
        }
    }
    &_image {
      width: 30%;
    }
}
.home {
  color: #fff;
  font-size: 20px;

    &_title {
      margin: 0 0 25px 0;
      font-size: 2.2em;
      position: relative;
      display: block;
      text-align: center;
      background: linear-gradient(#f27121, #e94057);
      color: transparent;
      -webkit-background-clip: text;
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 1.5px;
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
      position: absolute;
      top: 0;
      right: 0;
      margin: 15px 15px 0 0;
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
  .home {
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
        // line-height: 120px;
      }
  }
}
// iPhone 5/SE
@media (max-width: 320px) {
  .home {
    margin: 20px 0;

      &_content {
        margin-bottom: 15px;
      }
      &_title {
        margin: 0 0 25px 0;
      }
  }
  .example {
    padding: 10px 0;

      &_circle {
        width: 100px;
        height: 100px;
      }
  }
}
</style>
