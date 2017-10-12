<template lang="pug">
div
    v-toolbar(border size="small" sticky)
      v-button(squared size="medium" slot="left" @click="toAnchor('su-description')")
        v-icon(slot="icon-left" size="medium") description
        | Description
      v-button(squared size="medium" slot="left" @click="toAnchor('su-examples')")
        v-icon(size="medium" slot="icon-left") slideshow
        | Examples
    main#content
      div#su-description.component-details(v-html="IconMd")

      div#su-examples
        div.card.elevation-1
          div.card__title Sizing
          div.card__content
            p
              v-icon(size="xsmall") bookmark
              v-icon(size="small") bookmark
              v-icon(size="medium") bookmark
              v-icon(size="large") bookmark
              v-icon(size="xlarge") bookmark
</template>

<script>
import IconMd from '../assets/md/Icon.md'
export default {
  name: 'docs-icon',

  data() {
    return {
      IconMd
    }
  },

  methods: {
    toAnchor(id) {
      const anchorElTop = this.$el.querySelector(`#${id}`).offsetTop
      window.scrollTo(0, anchorElTop - 136)
    },
  }
}
</script>
