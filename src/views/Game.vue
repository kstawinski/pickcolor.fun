<template>
  <div class="home_container">
    <div class="home">
      <div class="home_subtitle">Where is...</div>
      <div class="home_title" :style="{ color: game.randomColor }">
        {{ colors[game.goodColor].name }}
      </div>
      <div class="home_colors">
        <Color
          :hex="colors[game.firstColor].hex"
          @clicked="checkAnswer"
          :left="true"
        />
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
    <transition name="bounce">
      <Summary v-if="game.showSummary" />
    </transition>
  </div>
</template>

<script>
import Color from '@/components/Color.vue';
import Timer from '@/components/Timer.vue';
import Level from '@/components/Level.vue';
import Summary from '@/components/Summary.vue';

export default {
  name: 'Game',
  components: {
    Color,
    Timer,
    Level,
    Summary,
  },
  data() {
    return {
      game: {
        started: false,
        showSummary: false,
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
    initGame() {
      this.generateColors();
    },
    checkAnswer(color) {
      // Check is answer correct
      if (color === this.colors[this.game.goodColor].hex) {
        this.levelUp();
        // This if-line is for 1st level
        // Game is starting by clicking a button with correct answer, then timer starts
        if (!this.game.started) this.game.started = true;
      } else {
        this.endGame();
      }
    },
    levelUp() {
      // Add 1 point (level)
      this.game.stats.points += 1;
      // Generate new colors pair
      this.generateColors();
      // Stop timer
      clearInterval(window.roundInterval);
      // Run timer with new interval
      this.runTimer();
      // Play level-up notification
      this.playSound('level-up', 0.1);
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
    runTimer() {
      if (this.game.stats.points <= 20) {
        this.timer(2);
      } else if (this.game.stats.points > 20 && this.game.stats.points < 40) {
        this.timer(1.7);
      } else if (this.game.stats.points > 40 && this.game.stats.points < 60) {
        this.timer(1.5);
      } else {
        this.timer(1.3);
      }
    },
    generateColors() {
      // Get colors
      const colorsLength = this.colors.length - 1;
      this.game.firstColor = this.randomInt(0, colorsLength);
      this.game.secondColor = this.randomInt(0, colorsLength);
      // Check that generated colors are duplicated
      this.checkAnyDuplicates();
      // Pick correct and random color from selected
      this.game.goodColor = this.pickRandomColor();
      this.game.randomColor = this.colors[this.pickRandomColor()].hex;
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
    pickRandomColor() {
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
      // Play sound notification
      this.playSound('fail', 0.1);
      // eslint-disable-line no-alert
      // alert(`Koniec gry. Liczba twoich punktów to ${this.game.stats.points}`);
      sessionStorage.score = this.game.stats.points;
      this.game.showSummary = true;
      // Reset game data
      this.resetAllFields();
    },
    playSound(nameFromHTML, volume) {
      const audio = document.getElementById(nameFromHTML);
      audio.volume = volume;
      audio.play();
    },
    resetAllFields() {
      // Set round values to default
      this.game.started = false;
      this.game.stats.points = 0;
      // Generate new colors
      this.generateColors();
    },
  },
  beforeMount() {
    // Game init before mount
    this.initGame();
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
      width: 15%;
    }
}
.home {
    color: #fff;
    text-align: center;
    font-weight: 500;
    text-transform: uppercase;

      &_subtitle {
        margin-bottom: 2px;
      }
      &_title {
        font-size: 52px;
        margin-bottom: 50px;
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
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
