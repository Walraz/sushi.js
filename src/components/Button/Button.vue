<template lang="pug">
  button(:class="classList" :type="type" :disabled="disabled" v-ripple="ripple")
    slot {{ value }}
</template>

<script>
import { size } from '../../core/common/props'
export default {
  name: 'button',

  computed: {
    classList() {
      return [
        'su-button',
        `su-button--${this.size}`,
        this.rounded && 'su-button--rounded',
        this.round && 'su-button--round',
      ]
    }
  },

  props: {
    rounded: Boolean,
    round: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      default: () => 'button',
      validator: type => {
        return ['submit', 'button'].includes(type)
      }
    },
    size: size(),
    value: {
      type: [String, Number],
      default: () => 'Button'
    },
  }
}
</script>
