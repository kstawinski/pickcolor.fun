<template>
  <!-- eslint-disable max-len -->
  <div class="container">
    <div class="about">
      <h1 class="about_title">Introduction</h1>
      <div class="about_content">
        <p class="about_paragraph">
          <span class="about_paragraph--highlight">Select the color whose name is displayed on your screen</span>. Be careful, I mean the name of color, not color of the text. For example:
        </p>
        <div class="about_paragraph example">
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
        <ArrowNav class="about_paragraph" />
      </div>
      <router-link to="/game" class="button button_full button_animated">Start game</router-link>
    </div>
  </div>
</template>

<script>
import ArrowNav from '@/components/ArrowNav.vue';

export default {
  name: 'About',
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
        // line-height: 120px;
      }
  }
}
// iPhone 5/SE
@media (max-width: 320px) {
  .about {
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
