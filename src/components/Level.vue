<template>
  <div class="level">
    <div class="level_icon">👍</div>
    <div class="level_text">{{ level }}</div>
  </div>
</template>

<script>
export default {
  name: 'Level',
  props: {
    level: Number,
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
