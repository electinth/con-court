<template>
  <div
    class="
      absolute
      B_06
      w-[64px]
      h-[64px]
      bg-black
      rounded-full
      text-white
      flex
      items-center
      justify-center
      left-[105%]
      top-[50%]
      translate-y-[-50%]
      cursor-pointer
      text-center
      flex-col
    "
    @click="openModal"
  >
    <img :src="require('assets/images/plus.svg')" width="17px" />
    รายชื่อ<br />
    คดี
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      document.getElementById('hide-more-case-wrapper').style.display = 'flex'
      document.getElementById('table-judge-wrapper').style.overflowY = 'hidden'
      document.body.style.overflow = 'hidden'
    },
  },
}
</script>

<style lang="scss" scoped></style>
