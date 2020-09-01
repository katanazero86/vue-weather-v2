<template>
  <nav class="nav-tab-menu-wrap" v-if="navTabMenuItems">
    <ul class="flex-layout-nowrap row align-item-center">
      <template v-for="item in navTabMenuItems">
        <li class="nav-tab-menu" :class="[item.index === activeTabIndex ? 'nav-tab-menu-active' : '']">
          <button type="button" @click="onClick(item)">{{item.name}}</button>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'TabMenu',
    props: {
      navTabMenuItems: {type: Array, default: null},
      activeTabIndex: {type: Number, default: 0}
    },

    methods: {
      onClick(targetItem) {
        if (targetItem.index !== this.activeTabIndex) {
          this.$emit('change', {...targetItem});
        }
      }
    }
  };
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  .nav-tab-menu-wrap {

    ul {

      margin: 0;
      padding: 0;
      background: #66a3ff;

      .nav-tab-menu {

        list-style: none;
        font-family: 'Roboto', sans-serif;

        button {
          border: none;
          outline: none;
          text-decoration: none;
          background: #66a3ff;
          color: $fontColorWhite;
          padding: 10px 20px;
          cursor: pointer;
        }

        button:hover {
          background: #3385ff;
        }

        &-active {
          button {
            background: #3385ff;
            font-weight: 600;
          }
        }

      }

    }

  }

  @include responsive(mobile) {

  }

</style>
