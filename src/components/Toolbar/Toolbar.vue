<template lang="pug">
  div(:class="['su-toolbar__wrapper', `su-toolbar__wrapper--${size}`, sticky && `su-toolbar__wrapper--sticky`]")
    div(:class="classList")
      div.su-toolbar__left
        slot(name="left")
      div.su-toolbar__right
        slot(name="right")
</template>

<script>
export default {
  name: 'toolbar',

  computed: {
    classList() {
      return [
        'su-toolbar',
        `su-toolbar--${this.size}`,
        this.primary && 'su-toolbar--primary',
        this.gradient && 'su-toolbar--gradient',
        this.fixed && 'su-toolbar--fixed',
        this.sticky && 'su-toolbar--sticky',
        this.border && 'su-toolbar--border',
      ]
    }
  },

  mounted() {
    const toolbarsFixed = document.querySelectorAll('.su-toolbar--fixed')
    console.dir(toolbarsFixed)
  },

  props: {
    sticky: Boolean,
    border: Boolean,
    fixed: Boolean,
    primary: Boolean,
    gradient: Boolean,
    size: {
      type: String,
      default: () => 'large',
      validator(type) {
        return ['small', 'medium', 'large'].includes(type)
      }
    }
  }
}
</script>
