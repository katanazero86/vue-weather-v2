<template>
    <div class="footer-wrap">
      <div class="footer-content">
        <p>vue project - weather app</p>
        <p>made by 배님.</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  .footer-wrap {
    height: 60px;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    color: $fontColorBlack;
    font-size: $fontSize12;
    font-weight: 600;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;

    .footer-content {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      flex-grow: 1;
      padding: 0 15px;

      p {
        margin: 0;
        padding: 0;
      }

    }

  }

</style>
