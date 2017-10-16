<template lang="pug">
  div(:class="classList")
    div.su-expansion-panel__trigger(@click.stop.prevent="toggleExpansion")
      slot(name="trigger")
    div.su-expansion-panel__content(:class="[!isExpanded && 'su-expansion-panel__content--hidden']")
      slot
</template>

<script>
export default {
  name: 'expansion-panel',

  data() {
    return {
      isExpanded: false,
    }
  },

  mounted() {
    const contentEl = this.$el.querySelector('.su-expansion-panel__content')
    const height = contentEl.scrollHeight
    contentEl.style.height = `${height}px`
  },

  computed: {
    classList() {
      return [
        'su-expansion-panel',
        this.isExpanded && 'su-expansion-panel--expanded'
      ]
    }
  },

  methods: {
    toggleExpansion() {
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>
