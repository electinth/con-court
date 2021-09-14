<template>
  <div
    class="absolute w-full h-full duration-150 border-t cursor-pointer  bg-red border-t-black"
    :id="`card_${index}`"
    style="top: calc(100% - 42px)"
    value="off"
    @click="openCard"
  >
    <div
      id="header"
      class="h-[42px] bg-white px-5 flex items-center justify-between"
    >
      <p class="B_05">คำอธิบายเพิ่มเติม</p>
      <div id="open-card">test</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  methods: {
    openCard() {
      const elem = document.getElementById(`card_${this.index}`)
      if (elem.getAttribute('value') === 'off') {
        if (elem) elem.style.top = '0'
        elem.setAttribute('value', 'on')
      } else {
        if (elem) elem.style.top = 'calc(100% - 42px)'
        elem.setAttribute('value', 'off')
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
