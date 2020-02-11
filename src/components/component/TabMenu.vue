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
      background: white;

      .nav-tab-menu {

        list-style: none;
        color: #4e4d4a;
        font-weight: 600;

        button {
          border: none;
          outline: none;
          text-decoration: none;
          background: white;
          padding: 10px 20px;
          cursor: pointer;
        }

        button:hover {
          background: $bgColor1;
        }

        &-active {
          button {
            background: $bgColor1;
            font-weight: 700;
          }
        }

      }

    }

  }

  @include responsive(mobile) {

  }

</style>
