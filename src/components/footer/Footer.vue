<template functional>
    <footer class="footer-wrap">
      <section class="footer-body">
        <div class="footer-content">
          <div>
            <p>Vue Project-weather app v2</p>
          </div>
        </div>
      </section>
    </footer>
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
    background-color: $bgFooterColor;
    color: $fontColorWhite;
    font-size: $fontSize15;

    .footer-body {

      padding: 12px;

      .footer-content {
        width: 100%;
        display: flex;
        align-items: center;

        p {
          padding: 0 8px;
          white-space: nowrap;
        }

      }
    }

  }

</style>
