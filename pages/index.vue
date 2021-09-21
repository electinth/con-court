<template>
  <div id="container">
    <elect-navbar
      title-text="Constitutional Court"
      dark="false"
      class="absolute z-[99] w-full"
    >
      <div class="flex items-center space-x-5 text-white B_06">
        <a href="#timeline">Timeline</a>
        <a href="#summary">Summary</a>
        <NuxtLink to="/about"> About </NuxtLink>
      </div>
    </elect-navbar>
    <Intro />
    <Timeline />
    <TablePerson />
    <Summary />
    <elect-footer />
  </div>
</template>

<script>
export default {}
</script>
