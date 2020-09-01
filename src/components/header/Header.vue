<template>
    <header class="header-wrap">
      <section class="header-body">
        <nav class="header-nav-wrap">
          <ol class="header-nav-body">
            <template v-for="(item, index) in navItems">
              <li @click="moveLocation(item.path)" :key="index" :class="[$route.path == item.path ? 'nav-active' : '']">
                {{item.title}}
              </li>
            </template>
          </ol>
        </nav>
        <aside class="header-time-wrap">
          <div class="header-time-body">
            <p>
              {{todayDate}}
            </p>
          </div>
        </aside>
      </section>
    </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      navItems: [
        {
          title: 'MAIN',
          path: '/'
        }
      ],
      todayDate: '',
      dataInterval: null
    };
  },

  mounted() {
    this.todayDate = this.$moment.tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
    this.dateInterval = setInterval(() => {
      this.todayDate = this.$moment.tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
    }, 1000);
  },

  beforeDestroy() {
    clearInterval(this.dataInterval);
  },

  methods: {

    moveLocation(targetPath) {
      if (targetPath) {
        if (this.$route.path === targetPath) {
          location.reload();
        } else {
          this.$router.push(targetPath);
        }
      }
    }
  }

};
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  .header-wrap {

    @include transitionAnimate();

    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 5px rgba(0,0,0,.1);

    background-color: $bgHeaderColor;
    color: $fontColorWhite;
    font-weight: 600;
    font-size: $fontSize15;
    letter-spacing: -0.5px;
    width: 100%;

    .header-body {

      padding : 12px;
      display: flex;

      .header-nav-wrap {
        width: 100%;

        .header-nav-body {
          display: flex;
          flex-wrap: nowrap;
          flex-direction: row;
          flex-grow: 0;
          flex-shrink: 1;
          flex-basis: auto;

          align-items: center;
          justify-content: center;
          white-space: nowrap;
          min-width: 100%;

          > li {
            cursor: pointer;
            padding : 0 8px;
            font-family: 'Roboto', sans-serif;
          }

          > div:hover {
            color: $fontColorWhite;
          }

          .nav-active {
            border-bottom: 2px solid #333333;
          }

        }

      }

      .header-time-wrap {
        .header-time-body {
          > p {
            font-size: $fontSize12;
            font-weight: 500;
            white-space: nowrap;
          }
        }

      }

    }

  }

</style>
