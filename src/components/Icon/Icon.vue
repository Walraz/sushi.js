<template lang="pug">
  i(:class="classList")
    slot
</template>

<script>
import { size } from '../../core/common/props'
export default {
  name: 'icon',

  computed: {
    classList() {
      return [
        'material-icons',
        `su-icon--${this.size}`,
      ]
    }
  },

  props: {
    name: String,
    size: {
      type: String,
      default: 'large',
      validator: size(),
    },
  }
}
</script>

