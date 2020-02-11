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
    height: 60px;
    box-shadow: 0 2px 5px rgba(0,0,0,.1);
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
