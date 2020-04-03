<template>
  <div class="home">
    <div class="home_title" :style="{ color: colors[this.generateGoodColor()].hex }">
      {{ colors[game.goodColor].name }}
    </div>
    <div class="home_colors">
      <transition name="bounce">
        <Color
          :hex="colors[game.firstColor].hex"
          @clicked="checkAnswer"
          :left="true"
          @keyup.left="checkAnswer(colors[game.firstColor].hex)"
        />
      </transition>
      <Color
        :hex="colors[game.secondColor].hex"
        @clicked="checkAnswer"
        :left="false"
        @clickRightArrow="checkAnswer" />
    </div>
    <Info v-if="game.started" :level="game.stats.points" />
  </div>
</template>

<script>
import Color from '@/components/Color.vue';
import Info from '@/components/Info.vue';

export default {
  name: 'Home',
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
      this.game.started = true;
      // console.log(color);
      if (color === this.colors[this.game.goodColor].hex) {
        this.game.stats.points += 1;
        this.generateColors();
      } else {
        this.endGame();
      }
    },
    generateColors() {
      // get colors
      const colorsLength = this.colors.length - 1;
      this.game.firstColor = this.randomInt(0, colorsLength);
      this.game.secondColor = this.randomInt(0, colorsLength);
      this.checkAnyDuplicates();
      this.game.goodColor = this.generateGoodColor();
    },
    checkAnyDuplicates() {
      const { firstColor, secondColor } = this.game;
      if (firstColor === secondColor) {
        this.generateColors();
      }
    },
    generateGoodColor() {
      const array = [this.game.firstColor, this.game.secondColor];
      // console.log(array);
      // console.log('to jest tablica');
      // console.log(0, 1);
      const goodColorNumber = this.randomInt(0, 1);
      return array[goodColorNumber];
    },
    // modified code from MDN
    randomInt(min, max) {
      const minimum = Math.ceil(min);
      const maximum = Math.floor(max);
      return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    },
    endGame() {
      alert(`Koniec gry. Liczba twoich punktów to ${this.game.stats.points}`);
      this.game.stats.points = 0;
      this.game.started = false;
      this.generateColors();
    },
  },
  beforeMount() {
    this.generateColors();
  },
};
</script>

<style lang="scss" scoped>
.home {

    &_title {
      color: #fff;
      font-size: 52px;
      text-align: center;
      margin-bottom: 50px;
      text-transform: uppercase;
      font-weight: 500;
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
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
