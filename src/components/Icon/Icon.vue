<template lang="pug">
  i(:class="classList")
    slot
</template>

<script>
import { size } from '../../core/common/props'
/**
 * Icon `<v-icon>` utilize Google's Material Icons font library. For a list of all available icons, visit the official Material Icons page.
 */
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
    /**
     * Name of the icon
     */
    name: {
      type: String,
    },
    /**
    * Set size of the icon ['xsmall', 'small', 'medium', 'large', 'xlarge']
    */
    size: {
      type: String,
      default: 'large',
      validator: size(),
    },
  }
}
</script>

