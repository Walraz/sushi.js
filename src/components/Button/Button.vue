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
        `su-button--${this.theme}`,

        this.primary && (this.theme === 'flat' || this.theme === 'outlined') && 'primary--text',
        this.primary && this.theme === 'raised' && 'primary',
        this.icon && 'su-button--icon',
        this.rounded && 'su-button--rounded',

        this.theme === 'outlined' && 'su-button--flat',
      ]
    }
  },

  props: {
    primary: Boolean,
    rounded: Boolean,
    disabled: Boolean,
    icon: Boolean,
    flat: Boolean,
    size: size(),
    type: {
      type: String,
      default: () => 'button',
      validator: type => {
        return ['submit', 'button'].includes(type)
      }
    },
    theme: {
      type: String,
      default: () => 'flat',
      validator: type => {
        return ['raised', 'flat', 'outlined'].includes(type)
      }
    },
    value: {
      type: [String, Number],
      default: () => 'Button'
    },
  }
}
</script>
