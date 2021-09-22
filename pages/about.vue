<template>
  <div>
    <elect-navbar
      title-text="Constitutional Court"
      dark="false"
      class="absolute z-[99] w-full"
    >
      <div class="flex items-center space-x-5 text-white B_06">
        <NuxtLink to="/" @click.native="Timeline">Timeline</NuxtLink>
        <NuxtLink to="/" @click.native="Summary">Summary</NuxtLink>
        <NuxtLink to="/about"> About </NuxtLink>
      </div>
    </elect-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    Timeline() {
      setTimeout(() => {
        document
          .getElementById('timeline')
          .scrollIntoView({ behavior: 'smooth' })
      }, 300)
    },
    Summary() {
      setTimeout(() => {
        document
          .getElementById('summary')
          .scrollIntoView({ behavior: 'smooth' })
      }, 300)
    },
  },
}
</script>

<style lang="scss" scoped></style>
