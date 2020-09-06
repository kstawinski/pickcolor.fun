<template>
  <div class="container">
    <div class="about">
      <h1 class="about_title">About</h1>

      <div class="about_content">
        <div v-for="(article, index) in articles" :key="index">
          <p class="about_p about_p--title">{{ article.title }}</p>
          <p class="about_p" v-html="article.content"></p>
        </div>
      </div>

      <div class="about_button">
        <router-link to="/game" class="button button_full button_animated">Start game</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',

  data: () => ({
    articles: [
      {
        title: 'Game rules 🗒️',
        content: `
          You have only one task: must select color whose NAME is displayed
          on your screen. I have one surprise. Sometimes color name will has
          got a color that you can't pick, because you lose.<br /> <br />

          Your time is limited. If your level value is smaller than 20, you have 2 seconds per round. If greather than 20 but smaller than 40 - 1.7 second and so on.
        `,
      },
      {
        title: 'About author 👋',
        content: `
          I'm 18 years old developer from Poland. I created this game,
          because somewhere I saw something similar. First line of code was
          written 2 April 2020.
          This game isn't special, I know, but I created it to learn
          more about game programming.
        `,
      },
      {
        title: 'For devs 💻',
        content: `
          Code is open-source. If you want to contribute, go to my repository
          on GitHub (<a href="https://github.com/kstawinski/pickcolor.fun" target="_blank" rel="noopener" style="font-weight: 500;color: #fff;">@kstawinski/pickcolor.fun</a>).
        `,
      },
      {
        title: 'Cookies 🍪',
        content: `
          We use cookies to ensure you get the best experience on our website (<a href="https://www.cookiesandyou.com/" target="_blank" rel="noopener" style="font-weight: 500;color: #fff;">learn more</a>).
        `,
      },
    ],
  }),

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
.about {
  color: #fff;
  font-size: 20px;

    &_title {
      margin: 0 0 40px 0;
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
      line-height: 1.5;
      margin-bottom: 120px;
    }
    &_p {
      color: #a9a9a9;

        &:nth-child(even) {
          margin-bottom: 25px;
        }
        &--title {
          color: #fff;
          font-weight: 500;
          font-size: 1.2em;
          margin-bottom: 8px;
        }
    }
    &_button {
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 20px 40px;
      width: 100vw;
      background: linear-gradient(transparent, #17171f);
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
}
</style>
