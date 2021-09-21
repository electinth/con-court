<template>
  <div id="container">
    <elect-navbar
      title-text="Constitutional Court"
      dark="false"
      class="fixed lg:absolute z-[99] w-full"
    >
      <div class="flex items-center space-x-5 text-white B_06">
        <a href="#timeline">Timeline</a>
        <a href="#summary">Summary</a>
        <NuxtLink to="/about"> About </NuxtLink>
      </div>
    </elect-navbar>
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
          pointer-events-none
        "
        style="top: 50.6%; transform: translateY(-50%)"
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
