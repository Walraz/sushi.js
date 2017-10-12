<template lang="pug">
  button(:class="classList" :type="type" :disabled="disabled" v-ripple="ripple && !loading" @click="onClick")
    transition(name="su-anim--scaleIn")
      spinner(:size="size" v-if="loading")
    transition(name="su-anim--fadeDown")
      div.su-button__content(:class="[`su-button__content--${align}`]")
        span.su-button__icon-left(:class="{'pl-0' : !isIconLeft}")
          slot(name="icon-left")
        span.su-button__label
          slot {{ value }}
        span.su-button__icon-right(:class="{'pr-0' : !isIconRight}")
          slot(name="icon-right") 
</template>

<script>
import Spinner from '../Spinner/Spinner.vue'
import { size } from '../../core/common/props'
/**
 * The `<v-button>` uses standard the HTML button element API. Can be altered with diffrent themes and sizes.
 */
export default {
  name: 'button',

  components: {
    Spinner,
  },

  data() {
    return {
      isIconLeft: Boolean(this.$slots['icon-left']),
      isIconRight: Boolean(this.$slots['icon-right']),
    }
  },

  methods: {
    /**
     * @private
     */
    onClick(e) {
      if (this.to) {
        this.$router.push(this.to)
        return
      }

      if (this.type === 'submit' || this.type === 'reset') return;
      /**
       * Fired on click or when focused on Key press Enter/Space
       */
      this.$emit('click', e)
    }
  },

  computed: {
    classList() {
      return [
        'su-button',
        this.primary && 'su-button--primary',
        this.contrast && 'su-button--contrast',
        `su-button--${this.size}`,
        `su-button--${this.theme}`,
        this.icon && 'su-button--icon',
        this.rounded && 'su-button--rounded',
        this.squared && 'su-button--squared',
        this.block && 'su-button--block',
        this.loading && 'su-button--loading',
        !this.isLabel && 'px-0',
      ]
    },
    isLabel() {
      return this.value.legnth || this.$slots.default
    },
  },

  props: {
    /**
     * Makes button full width
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * Conditional set button in loading state
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * Makes button contrast on dark background
     */
    contrast: {
      type: Boolean,
      default: false,
    },
    /**
     * Makes button a primary by setting color/background depending on theme
     */
    primary: {
      type: Boolean,
      default: false,
    },
    /**
     * Removes border-radius
     */
    squared: {
      type: Boolean,
      default: false,
    },
    /**
     * Make rounded borders
     */
    rounded: {
      type: Boolean,
      default: false,
    },
    /**
     * Conditional set button in disabled state
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Removes all padding
     */
    icon: {
      type: Boolean,
      default: false,
    },
    /**
     * Set size of button ['xsmall', 'small', 'medium', 'large', 'xlarge']
     */
    size: {
      type: String,
      default: 'medium',
      validator: size(),
    },
    /**
     * Set the type of the button ['submit', 'button', 'reset']
     */
    type: {
      type: String,
      default: 'button',
      validator: type => {
        return ['submit', 'button', 'reset'].includes(type)
      }
    },
    /**
     * Set the theme of the button ['raised', 'flat', 'outlined', 'alert']
     */
    theme: {
      type: String,
      default: 'flat',
      validator: type => {
        return ['raised', 'flat', 'outlined', 'alert'].includes(type)
      }
    },
    /**
     * Align button content left, right or center
     */
    align: {
      type: String,
      default: 'center',
      validator(type) {
        return ['left', 'center', 'right'].includes(type)
      }
    },
    /**
     * Uses Vue-router push method to programmatically set destiation (Disables click event)
     */
    to: {
      type: Object,
    },
    /**
     * Set the label (default slot will overwrite this string)
     * @model
     */
    value: {
      type: String,
      default: '',
    },
  }
}
</script>
