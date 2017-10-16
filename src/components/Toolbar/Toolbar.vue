<template lang="pug">
  div(:class="wrapperClassList")
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
    wrapperClassList() {
      return [
        'su-toolbar__wrapper',
        `su-toolbar__wrapper--${this.size}`,
        this.primary && 'su-toolbar__wrapper--primary',
        this.gradient && 'su-toolbar__wrapper--gradient',
        this.sticky && 'su-toolbar__wrapper--sticky',
        this.border && 'su-toolbar__wrapper--border',
      ]
    },
    classList() {
      return [
        'su-toolbar',
        `su-toolbar--${this.size}`,
        this.fixed && 'su-toolbar--fixed',
      ]
    }
  },

  // mounted() {
  //   const toolbarsFixed = document.querySelectorAll('.su-toolbar--fixed')
  //   console.dir(toolbarsFixed)
  // },

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
