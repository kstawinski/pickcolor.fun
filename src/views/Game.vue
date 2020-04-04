<template>
  <div class="home_container">
    <div class="home">
      <div class="home_subtitle">Where is...</div>
      <div class="home_title" :style="{ color: game.randomColor }">
        {{ colors[game.goodColor].name }}
      </div>
      <div class="home_colors">
        <transition name="bounce">
          <Color
            :hex="colors[game.firstColor].hex"
            @clicked="checkAnswer"
            :left="true"
          />
        </transition>
        <Color
          :hex="colors[game.secondColor].hex"
          @clicked="checkAnswer"
          :left="false"
        />
      </div>
      <div class="top" v-if="game.started">
        <Timer class="top_timer" :time="game.time" />
        <Level class="top_level" :level="game.stats.points" />
      </div>
    </div>
    <audio id="level-up" crossorigin="anonymous" src="../assets/sounds/level-up.ogg"></audio>
    <audio id="fail" crossorigin="anonymous" src="../assets/sounds/fail.ogg"></audio>
  </div>
</template>

<script>
import Color from '@/components/Color.vue';
import Timer from '@/components/Timer.vue';
import Level from '@/components/Level.vue';

export default {
  name: 'Game',
  components: { Color, Timer, Level },
  data() {
    return {
      game: {
        started: false,
        firstColor: undefined,
        secondColor: undefined,
        goodColor: undefined,
        randomColor: undefined,
        stats: {
          points: 0,
        },
        time: undefined,
      },
      colors: [
        {
          name: 'Blue',
          hex: '#4287f5',
        },
        {
          name: 'Red',
          hex: '#c71a1a',
        },
        {
          name: 'Yellow',
          hex: '#eff22e',
        },
        {
          name: 'Green',
          hex: '#69db4d',
        },
        {
          name: 'White',
          hex: '#ffffff',
        },
        {
          name: 'Pink',
          hex: '#ed2dd3',
        },
        {
          name: 'Orange',
          hex: '#f5980c',
        },
        {
          name: 'Purple',
          hex: '#6c12cc',
        },
        {
          name: 'Gray',
          hex: '#585858',
        },
        {
          name: 'Brown',
          hex: '#502800',
        },
      ],
    };
  },
  methods: {
    // returnTimer() {
    //   return this.time;
    // },
    checkAnswer(color) {
      // Start game
      this.game.started = true;
      // Check is answer correct
      if (color === this.colors[this.game.goodColor].hex) {
        // Add point
        this.game.stats.points += 1;
        // Generate new colors pair
        this.generateColors();
        clearInterval(window.roundInterval);
        this.timer(2);
        this.playSound('level-up');
        // Set time to default value
        // this.game.time = '2';
      } else {
        // Answer is incorrect, end game
        this.endGame();
      }
    },
    playSound(nameFromHTML) {
      document.getElementById(nameFromHTML).play();
    },
    timer(secondsPerRound) {
      this.game.time = secondsPerRound;
      // this.$set(this, 'game.time', this.game.timer - 0.1);
      window.roundInterval = setInterval(() => {
        if (this.game.started) {
          this.game.time = Math.round((this.game.time - 0.1) * 100) / 100;
          // console.log(this.game.time - 1);
          // console.log(this.game.time);
          if (this.game.time === 0) {
            clearInterval(window.roundInterval);
            this.endGame();
            // console.log('koniec gry');
          }
        }
      }, 100);
    },
    generateColors() {
      // Get colors
      const colorsLength = this.colors.length - 1;
      this.game.firstColor = this.randomInt(0, colorsLength);
      this.game.secondColor = this.randomInt(0, colorsLength);
      // Check that generated colors are duplicated
      this.checkAnyDuplicates();
      // Pick good color from selected
      this.game.goodColor = this.generateGoodColor();
      this.game.randomColor = this.colors[this.generateGoodColor()].hex;
    },
    checkAnyDuplicates() {
      // Get colors from data
      const { firstColor, secondColor } = this.game;
      // If duplicated
      if (firstColor === secondColor) {
        // Generate new pair
        this.generateColors();
      }
    },
    generateGoodColor() {
      // Make array with colors
      const colors = [this.game.firstColor, this.game.secondColor];
      // Get and return randomized index
      const index = this.randomInt(0, 1);
      return colors[index];
    },
    // Modified code from MDN
    randomInt(min, max) {
      const minimum = Math.ceil(min);
      const maximum = Math.floor(max);
      return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    },
    endGame() {
      this.playSound('fail');
      // Show alert
      // eslint-disable-line no-alert
      alert(`Koniec gry. Liczba twoich punktów to ${this.game.stats.points}`);
      // Reset data and generate new colors pair
      this.game.stats.points = 0;
      this.game.started = false;
      // this.generateColors();
    },
  },
  beforeMount() {
    // Game init before mount
    this.generateColors();
  },
};
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 30px;
  width: 100vw;

    &_timer {
      width: 80%;
    }
    &_level {
      width: 10%;
    }
}
.home {
    &_subtitle {
      text-align: center;
      color: #fff;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    &_title {
      color: #fff;
      font-size: 52px;
      text-align: center;
      margin-bottom: 50px;
      text-transform: uppercase;
      font-weight: 500;
    }
}
@media (max-width: 768px) {
  .home {
    padding: 60px 0 30px 0;

      &_container {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &_title {
        font-size: 2.2em;
        font-weight: 300;
      }
      &_colors {
        text-align: center;
      }
  }
}
</style>
