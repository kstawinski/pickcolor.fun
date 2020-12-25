<template>
  <div class="level">
    <div class="level_icon">{{ getEmoji() }}</div>
    <div class="level_text">{{ level }}</div>
    <div class="level_hint">Level</div>
  </div>
</template>

<script>
export default {
  name: 'Level',

  props: {
    level: Number,
  },

  data: () => ({
    levels: [
      { requiredLevel: 0, emoji: '🙄' },
      { requiredLevel: 10, emoji: '😐' },
      { requiredLevel: 20, emoji: '🤨' },
      { requiredLevel: 30, emoji: '😀' },
      { requiredLevel: 40, emoji: '😳' },
      { requiredLevel: 50, emoji: '😱' },
    ],
  }),

  methods: {
    getEmoji() {
      let emoji = '';

      this.levels.forEach((element) => {
        if (this.level >= element.requiredLevel) {
          emoji = element.emoji;
        }
      });

      return emoji;
    },
  },
};
</script>

<style lang="scss" scoped>
.level {
  &_hint {
    display: none;
  }
}

// Desktop UI
@media (min-width: 769px) {
  .level {
    font-size: 2em;
    text-align: left;
    padding-top: 20px;

      &_icon {
        display: none;
        margin-right: 10px;
      }
      &_text {
        color: #fff;
        font-weight: 300;
        font-size: 58px;
      }
      &_hint {
        display: block;
        margin-top: 5px;
        color: rgba(#ffffff, 0.4);
        font-size: 18px;
        font-weight: 400;
      }
  }
}

// Mobile UI
@media (max-width: 768px) {
  .level {
    display: flex;

      &_text {
        color: #fad478;
        padding-left: 5px;
        font-weight: 500;
      }
  }
}
</style>
