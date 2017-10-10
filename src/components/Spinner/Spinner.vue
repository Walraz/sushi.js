<template lang="pug">
  div(:class="classList")
    svg.su-spinner__svg(viewBox="25 25 50 50")
      circle.su-spinner__circle(cx="50" cy="50" r="20" stroke="#fff" stroke-width="4" fill="none" stroke-miterlimit="10")
</template>

<script>
import { size } from '../../core/common/props'

export default {
  name: 'spinner',

  computed: {
    classList() {
      return [
        'su-spinner',
        `su-spinner--${this.size}`,
      ]
    }
  },

  props: {
    size: size(),
  }
}
</script>

