<template>
  <div class="dropdown-wrap">
    <div class="dropdown-select" @click="toggleDropdown = !toggleDropdown">
      <p>{{dropdownTitle}}</p>
      <font-awesome-icon icon="angle-up" class="dropdown-arrow-up" v-if="toggleDropdown"/>
      <font-awesome-icon icon="angle-down" class="dropdown-arrow-down" v-else/>
    </div>
    <div class="dropdown-content" v-if="toggleDropdown">
      <ul>
        <template v-if="dropdownData.length > 0" v-for="data in dropdownData">
          <li @click="selectContent($event, data)" :class="[selectedData.name == data.name ? 'selected-item' : '']">{{data.name}}</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: {
    dropdownData: { type: Array, default: [], required: true },
    dropdownTitle: { type: String, default: '' }
  },

  data () {
    return {
      toggleDropdown: false,
      selectedData: { name: '' }
    }
  },

  mounted () {
    document.body.addEventListener('click', this.closeDropdown)
  },

  destroyed () {
    document.body.removeEventListener('click', this.closeDropdown)
  },

  methods: {
    selectContent (event, selectedData) {
      this.selectedData = selectedData
      this.$emit('select', this.selectedData)
      this.toggleDropdown = false
    },

    closeDropdown (event) {
      // console.log(this.$el.contains(event.target));
      // this.toggleDropdown = false;
      if (!this.$el.contains(event.target)) {
        this.toggleDropdown = false
      }
    }
  }

}
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
      border: solid 1px #e7e7e7;
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
