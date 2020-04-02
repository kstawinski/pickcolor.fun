<template>
  <div class="info">
    <!-- <div class="info_box">
      <div class="info_icon">⏲ TIME</div>
      <div class="info_text">2.25 sec</div>
    </div> -->
    <div class="info_box">
      <div class="info_icon">🔥 LEVEL</div>
      <div class="info_text">{{ level }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    level: Number,
  },
};
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  margin-top: 35px;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 400;
  font-size: 18px;

    &_box {
      padding: 10px 40px;
      text-align: center;

      &:not(:last-child) {
        border-right: 2px solid #ffffff0f;
      }
    }
    &_icon {
      margin: 0 0 10px 5px;
      font-weight: 500;
    }
    &_text {
      font-size: 22px;
    }
}
</style>
