<template>
    <div class="header-wrap">
      <nav class="header-nav">
        <div class="header-nav-content">
          <template v-for="(item, index) in navItems">
            <div @click="movePath(item.path)" :key="index">
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

  data () {
    return {
      navItems: [
        {
          title: 'HOME',
          path: '/'
        },
        {
          title: 'INTRO',
          path: '/intro'
        },
        {
          title: 'SCROLL1',
          path: ''
        },
        {
          title: 'SCROLL2',
          path: ''
        },
        {
          title: 'SCROLL3',
          path: ''
        }
      ]
    }
  },

  methods: {
    movePath (targetPath) {
      if (targetPath) {
        if (this.$route.path === targetPath) {
          location.reload()
        } else {
          this.$router.push(targetPath)
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  .header-wrap {

    @include transitionAnimate();

    position: sticky;
    top: 0;
    left: 0;
    right: 0;

    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    color: $fontColorBlack;
    font-weight: 600;
    font-size: $fontSize16;
    letter-spacing: -0.5px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.35);

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
            color: $fontColorBlack;
          }

        }

      }

    }
  }

</style>
