<template>
  <div class="dropdown-wrap">
    <div class="dropdown-select" @click="toggleDropdown">
      <p>{{dropdownTitle}}</p>
      <font-awesome-icon icon="angle-up" class="dropdown-arrow-up" v-if="toggle"/>
      <font-awesome-icon icon="angle-down" class="dropdown-arrow-down" v-else/>
    </div>
    <div class="dropdown-content" v-if="toggle">
      <ul v-if="dropdownData.length > 0">
        <template v-for="(data, index) in dropdownData">
          <li @click="selectCity(data)" :key="index" :class="[selectedCity ? (selectedCity.name == data.name ? 'selected-item' : '') : '']">{{data.name}}</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import toggleMixin from '../../mixins/toggleMixin';

export default {
  name: 'dropdown',
  props: {
    dropdownData: {type: Array,
                    required: true,
                    default() {
                      return [];
                    }
                  },
    dropdownTitle: {type: String, default: ''}
  },
  mixins: [toggleMixin],

  data() {
    return {
      selectedCity: null
    };
  },

  mounted() {
    this.$nextTick(() => {
      document.body.addEventListener('click', this.closeToggleDropdown);
    });
  },

  destroyed() {
    document.body.removeEventListener('click', this.closeToggleDropdown);
  },

  methods: {
    selectCity(targetCity) {
      this.selectedCity = targetCity;
      this.$emit('select', {...this.selectedCity});
      this.toggle = false;
    }
  }

};
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  .dropdown-wrap {

    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
    padding: 5px;

    .dropdown-select {

      cursor: pointer;
      border: solid 1px #e7e7e7;
      background-color: #ffffff;
      border: 1px solid #777;
      padding: 0 10px;
      height: 42px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      p {
        margin: 0;
      }

      .dropdown-arrow-down {

      }
      .dropdown-arrow-up {

      }
    }

    .dropdown-content {
      position: absolute;
      top: 48px;
      left: 5px;
      right: 5px;
      border: 1px solid #777;
      background-color: #ffffff;
      padding: 10px;
      margin: 0;
      max-height: 500px;
      overflow-y: auto;

      .selected-item {
        font-weight: 700;
        color: cornflowerblue;
      }

      ul {
        margin: 0;
        padding: 0;

        li {
          margin: 0;
          padding: 5px 0;
          list-style: none;
          cursor: pointer;
        }

        li:hover {
          background: #f8f8f8;
        }

      }

    }

  }

  @include responsive(mobile) {

  }

</style>
