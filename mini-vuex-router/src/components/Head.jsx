
import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  setup(props, { slots }) {
    const tag = 'h' + props.level
    return () => <tag>{slots.default()}</tag>
  }
})
