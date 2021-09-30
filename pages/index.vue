<template>
  <div id="container">
    <elect-navbar
      title-text="Constitutional Court"
      dark="false"
      class="fixed lg:absolute z-[99] w-screen overflow-x-hidden"
    >
      <div class="flex items-center space-x-5 text-white B_05">
        <div @click="ScrollToTimeLine" class="cursor-pointer">Timeline</div>
        <div @click="ScrollToSummary" class="cursor-pointer">Summary</div>
        <NuxtLink to="/about"> About </NuxtLink>
      </div>
    </elect-navbar>
    <div id="body" class="relative">
      <div id="wrapper" class="relative">
        <Intro />
        <Timeline />
        <div
          class="
            absolute
            w-1/2
            h-[98%]
            border-r
            lg:border-r-2
            border-dashed border-r-black
            z-30
            inset-0
            md:top-[50.6%]
            top-[350px]
            pointer-events-none
            md:translate-y-[-50%]
          "
        >
          <img
            :src="
              $mq === 'mobile'
                ? require(`assets/images/down_mb.png`)
                : require(`assets/images/down.png`)
            "
            class="
              absolute
              bottom-[-10px]
              md:bottom-[-30px]
              right-[0]
              translate-x-[50%]
            "
          />
        </div>
      </div>
      <TablePerson />
      <Summary />
      <img
        :src="require(`assets/images/button_up.svg`)"
        alt="button_up"
        class="
          w-[40px]
          h-[40px]
          md:w-[60px] md:h-[60px]
          absolute
          bottom-[-100px]
          right-0
          translate-x-[-50%]
          cursor-pointer
        "
        @click="ScrollToTop"
      />
    </div>
    <elect-footer />
  </div>
</template>
<style lang="scss">
html {
  scroll-behavior: smooth;
}
.box-shadow-style {
  box-shadow: 0px 16px 5px 1px rgba(0, 0, 0, 0.44);
  -webkit-box-shadow: 0px 16px 5px 1px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 0px 16px 5px 1px rgba(0, 0, 0, 0.44);
}
</style>

<script>
export default {
  methods: {
    ScrollToTimeLine() {
      document.querySelector('#timeline').scrollIntoView({ behavior: 'smooth' })
    },
    ScrollToSummary() {
      document.querySelector('#summary').scrollIntoView({ behavior: 'smooth' })
    },
    ScrollToTop() {
      document
        .querySelector('#container')
        .scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
