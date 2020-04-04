<template>
  <div class="level">
    <div class="level_icon">{{ emoji() }}</div>
    <div class="level_text">{{ level }}</div>
  </div>
</template>

<script>
export default {
  name: 'Level',
  props: {
    level: Number,
  },
  data() {
    return {
      levels: [
        {
          minimum: 0,
          emoji: '🙄',
        },
        {
          minimum: 10,
          emoji: '😐',
        },
        {
          minimum: 20,
          emoji: '🤨',
        },
        {
          minimum: 30,
          emoji: '😀',
        },
        {
          minimum: 40,
          emoji: '😳',
        },
        {
          minimum: 50,
          emoji: '😱',
        },
      ],
    };
  },
  methods: {
    emoji() {
      let emoji = '';
      this.levels.forEach((element) => {
        if (this.level >= element.minimum) {
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
  display: flex;

    &_text {
      padding-left: 5px;
      font-weight: 500;
      color: #fad478;
      text-shadow: 0 0 15px #fad478;
    }
}
</style>
