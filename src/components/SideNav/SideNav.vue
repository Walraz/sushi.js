<template lang="pug">
  aside(:class="classList" @click="closeSideNav" tabindex="-1" @keyup.esc="closeSideNav")
    nav(@click="blockClick")
      header
        slot(name="header")
      transition(name="su-anim--fadeRightSlow")
        main(v-if="isVisible")
          slot
</template>

<script>
/**
 * Side navigatition...
 */
export default {
  name: 'side-nav',

  computed: {
    isVisible: {
      get() {
        this.setFocus(this.value)
        return this.value
      },
      set(value) {
        this.setFocus(value)
        this.$emit('input', value)
      },
    },

    classList() {
      return ['su-side-nav', this.isVisible && 'su-side-nav--visible']
    },
  },

  methods: {
    setFocus(value) {
      if (value) this.$el.focus()
    },
    blockClick(e) {
      e.stopPropagation()
    },
    closeSideNav() {
      this.isVisible = false
    },
  },

  props: {
    /**
     * Conditional set visible state
     * @model
     */
    value: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
