<template>
    <div class="footer-wrap">
      <div class="footer-content flex-layout-wrap justify-content-between align-content-start row">
        <div class="col">
          <p><b>vue project</b>-weather app v2</p>
        </div>
        <div class="col">
          <p>made by zero86</p>
        </div>
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
      width: 100%;
      padding: 8px 0;

      p {
        margin: 0;
        padding: 15px;
        white-space: nowrap;
        font-family: 'Noto Sans KR', sans-serif !important;

        b {
          font-family: 'Noto Sans KR', sans-serif !important;
        }

      }

    }

  }

</style>
