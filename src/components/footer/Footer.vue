<template>
    <div class="footer-wrap">
      <div class="footer-content">
        <p>vue project - weather app v2</p>
        <p>made by zero86.</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  .footer-wrap {
    border-top : 2px solid $bgColorBlack-light;
    height: 60px;
    background-color: #ebebeb;
    color: $fontColorBlack;
    font-size: $fontSize13;
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
