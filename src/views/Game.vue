<template>
  <div class="home_container">
    <div class="home">
      <div class="home_subtitle">Where is...</div>
      <div class="home_title" :style="{ color: colors[this.generateGoodColor()].hex }">
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
      <Info v-if="game.started" :level="game.stats.points" />
    </div>
  </div>
</template>

<script>
import Color from '@/components/Color.vue';
import Info from '@/components/Info.vue';

export default {
  name: 'Game',
  components: { Color, Info },
  data() {
    return {
      game: {
        started: false,
        firstColor: undefined,
        secondColor: undefined,
        goodColor: undefined,
        stats: {
          points: 0,
        },
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
    checkAnswer(color) {
      // Start game
      this.game.started = true;
      // Check is answer correct
      if (color === this.colors[this.game.goodColor].hex) {
        // Add point
        this.game.stats.points += 1;
        // Generate new colors pair
        this.generateColors();
      } else {
        // Answer is incorrect, end game
        this.endGame();
      }
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
      // Show alert
      alert(`Koniec gry. Liczba twoich punktów to ${this.game.stats.points}`);
      // Reset data and generate new colors pair
      this.game.stats.points = 0;
      this.game.started = false;
      this.generateColors();
    },
  },
  beforeMount() {
    // Game init before mount
    this.generateColors();
  },
};
</script>

<style lang="scss" scoped>
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
    padding: 30px 0;

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
