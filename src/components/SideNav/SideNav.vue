<template lang="pug">
  aside(:class="classList" @click="closeSideNav")
    nav(@click="blockClick")
      header
        slot(name="header")
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
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },

    classList() {
      return [
        'su-side-nav',
        this.isVisible && 'su-side-nav--visible'
      ]
    }
  },

  methods: {
    blockClick(e) {
      e.stopPropagation();
    },
    closeSideNav() {
      this.isVisible = false
    }
  },

  props: {
    /**
     * Conditional set visible state
     * @model
     */
    value: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
