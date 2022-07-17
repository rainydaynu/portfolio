// Import global styles
import '~/assets/style/index.css'

// Add global components
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
