export default {

  data() {
    return {
      toggle: false
    };
  },

  methods: {
    toggleDropdown() {
      this.toggle = !this.toggle;
    },

    closeToggleDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.toggle = false;
      }
    }

  }

}
