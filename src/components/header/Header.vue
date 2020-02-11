<template>
    <div class="header-wrap">
      <nav class="header-nav">
        <div class="header-nav-content">
          <template v-for="(item, index) in navItems">
            <div @click="movePath(item.path)" :key="index" :class="[$route.path == item.path ? 'nav-active' : '']">
              {{item.title}}
            </div>
          </template>
        </div>
      </nav>
    </div>
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
        },
        {
          title: 'INTRO',
          path: '/intro'
        }
      ]
    };
  },

  methods: {

    movePath(targetPath) {
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
    z-index: 2;
    height: 60px;
    box-shadow: 0 2px 5px rgba(0,0,0,.1);

    background-color: $wrapHeaderBackgroundColor;
    color: $fontColorBlackLight;
    font-weight: 600;
    font-size: $fontSize16;
    letter-spacing: -0.5px;

    .header-nav {

      @include overflow-x();

      .header-nav-content {
        display: inline-flex;
        flex-wrap: nowrap;
        flex-direction: row;
        flex-grow: 1;
        flex-basis: auto;
        flex-shrink: 0;

        align-items: center;
        justify-content: center;
        white-space: nowrap;
        min-width: 100%;

        > div {
          padding: 20px;
          margin: 0 10px;
          cursor: pointer;
        }

        > div:hover {
          color: $fontColorWhite;
        }

        .nav-active {
          border-bottom: 2px solid #333333;
        }

      }

    }

  }

  @include responsive(mobile) {
    .header-wrap {
      font-size: $fontSize14;

      .header-nav {

        .header-nav-content {

          > div {
            cursor: pointer;
          }

          > div:hover {
            color: $fontColorWhite;
          }

        }

      }

    }
  }

</style>
