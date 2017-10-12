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
      div#su-description.component-details(v-html="buttonMD")

      div#su-examples
        div.card.elevation-1
          div.card__title Flat
          div.card__content
            p
              v-button Normal
              v-button(rounded) Rounded
              v-button(squared) Squared
              v-button(disabled) Disabled
            p
              v-button(primary) Primary
              v-button(rounded primary) Rounded
              v-button(squared primary) Squared
              v-button(disabled primary) Disabled
          div.card__content.card__content--dark
            p
              v-button(contrast) Normal
              v-button(rounded contrast) Rounded
              v-button(squared contrast) Squared
              v-button(disabled contrast) Disabled
            p
              v-button(primary contrast) Primary
              v-button(rounded primary contrast) Rounded
              v-button(squared primary contrast) Squared
              v-button(disabled primary contrast) Disabled

        div.card.elevation-1
          div.card__title Raised
          div.card__content
            p
              v-button(theme="raised") Normal
              v-button(rounded theme="raised") Rounded
              v-button(squared theme="raised") Squared
              v-button(disabled theme="raised") Disabled
            p
              v-button(primary theme="raised") Primary
              v-button(rounded primary theme="raised") Rounded
              v-button(squared primary theme="raised") Squared
              v-button(disabled primary theme="raised") Disabled
          div.card__content.card__content--dark
            p
              v-button(primary theme="raised" contrast) Primary
              v-button(rounded primary theme="raised" contrast) Rounded
              v-button(squared primary theme="raised" contrast) Squared
              v-button(disabled primary theme="raised" contrast) Disabled

        div.card.elevation-1
          div.card__title Outlined
          div.card__content
            p
              v-button(theme="outlined") Normal
              v-button(rounded theme="outlined") Rounded
              v-button(squared theme="outlined") Squared
              v-button(disabled theme="outlined") Disabled
            p
              v-button(primary theme="outlined") Primary
              v-button(rounded primary theme="outlined") Rounded
              v-button(squared primary theme="outlined") Squared
              v-button(disabled primary theme="outlined") Disabled
          div.card__content.card__content--dark
            p
              v-button(theme="outlined" contrast) Normal
              v-button(rounded theme="outlined" contrast) Rounded
              v-button(squared theme="outlined" contrast) Squared
              v-button(disabled theme="outlined" contrast) Disabled
            p
              v-button(primary theme="outlined" contrast) Primary
              v-button(rounded primary theme="outlined" contrast) Rounded
              v-button(squared primary theme="outlined" contrast) Squared
              v-button(disabled primary theme="outlined" contrast) Disabled
              
        div.card.elevation-1
          div.card__title Icon/Alert/Loading
          div.card__content
            p
              v-button(theme="raised" primary :loading="loading")
                v-icon(slot="icon-left" size="medium") bookmark
                | Icon left
              v-button(theme="alert" :loading="loading")
                v-icon(slot="icon-right" size="small") warning
                | Icon Right
              v-button(theme="outlined" :loading="loading")
                  v-icon star
              v-button(theme="raised" primary icon :loading="loading")
                  v-icon star
              v-button(theme="alert" icon rounded :loading="loading")
                  v-icon whatshot
            p
              v-button(theme="flat" primary :loading="loading")
                v-icon(slot="icon-left" size="medium") access_time
                | Loading
              v-button(theme="raised" rounded @click="toggleLoading")
                v-icon(slot="icon-left" size="medium") arrow_back
                | Toggle Loading
                v-icon(slot="icon-right" size="medium") arrow_forward
              v-button(theme="alert" :loading="loading")
                v-icon(slot="icon-left" size="medium") access_time
                | Loading
              v-button(icon primary rounded theme="outlined" loading)

        div.card.elevation-1
          div.card__title Sizing
          div.card__content
            p
              v-button(theme="raised" primary size="xsmall") xsmall
              v-button(rounded theme="raised" primary size="small") small
              v-button(squared theme="raised" primary size="medium") medium
              v-button(theme="raised" primary size="large") large
              v-button(theme="raised" primary size="xlarge") xlarge
            p
              v-button(theme="raised" rounded primary size="xlarge" icon)
                v-icon bookmark
              v-button(theme="raised" rounded primary size="large" icon)
                v-icon(size="medium") bookmark
              v-button(theme="raised" rounded primary size="medium" icon)
                v-icon(size="small") bookmark
              v-button(theme="alert" rounded primary size="small" icon)
                v-icon(size="small") bookmark
              v-button(theme="outlined" rounded primary size="xsmall" icon)
                v-icon(size="xsmall") bookmark
</template>

<script>
import ButtonMD from '../assets/md/Button.md'
export default {
  name: 'docs-button',

  data() {
    return {
      buttonMD: ButtonMD,
      loading: false,
    }
  },

  methods: {
    toAnchor(id) {
      const anchorElTop = this.$el.querySelector(`#${id}`).offsetTop
      window.scrollTo(0, anchorElTop - 136)
    },
    toggleLoading() {
      this.loading = !this.loading
    }
  }
}
</script>
