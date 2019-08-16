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
        name: "Footer"
    }
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  .footer-wrap {
    background-color: $bgColorGray;
    color: $fontColorWhite;
    font-size: $fontSize12;
    font-weight: 600;

    .footer-content {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      padding: 20px;

      p {
        margin: 0;
        padding: 0;
      }

    }

  }

</style>
