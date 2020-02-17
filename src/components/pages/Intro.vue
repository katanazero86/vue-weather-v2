<template>
  <div id="intro-wrap" class="flex-layout-wrap row justify-content-center">
    <div class="intro-card">
      <header class="intro-card-header">
        <h2>
          Project Introduce
        </h2>
      </header>
      <section class="intro-card-section">
        <p>
          - Vue app<br>
          - openweathermap API를 이용하여 날씨 웹앱 작성(https://openweathermap.org/)<br>
          - 예전에 만들어본적이 있으나 새로 v2로 작성<br>
          - heroku 를 이용하여 배포 및 서비스<br>
          - 부족한점 또는 코드 및 개선사항 있으면 언제든지 아래 저장소 방문하셔서 새로운 이슈 생성해 주시면 공부할 때 작업하겠습니다. 감사합니다!<br>
          - https://github.com/katanazero86/vue-weather-v2<br>
        </p>
      </section>
    </div>
    <!--<div class="intro-card">-->

    <!--</div>-->
  </div>
</template>

<script>
    export default {
        name: "Intro"
    }
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  #intro-wrap {
    min-height: 100%;
    padding: 25px 15px;
    background-color: $wrapBackgroundColor;
  }

  .intro-card {
    box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,0.03), 0 0.9375rem 1.40625rem rgba(4,9,20,0.03), 0 0.25rem 0.53125rem rgba(4,9,20,0.05), 0 0.125rem 0.1875rem rgba(4,9,20,0.03);
    background-color: #fff;
    width: 450px;
    height: 450px;
    margin: 0 8px;
    border-radius: 8px;

    .intro-card-header {
      padding: 10px;
      border-bottom: 1px solid rgba(26,54,126,0.125);

      h2 {
        font-family: 'Noto Sans KR', sans-serif !important;
        font-weight: 500;
      }

    }

    .intro-card-section {
      padding: 10px;
      p {
        font-size: 13px;
        word-break: keep-all;
        font-family: 'Noto Sans KR', sans-serif !important;
      }

    }

  }

  @include responsive(mobile) {
    .intro-card {
      width: 100%;
    }
  }

</style>
