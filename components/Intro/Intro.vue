<template>
  <div id="intro-wrapper">
    <IntroStep />
    <DivideGov />
  </div>
</template>

<script>
import IntroStep from './IntroStep.vue'
import DivideGov from './DivideGov.vue'
export default {
  components: {
    IntroStep,
    DivideGov,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
