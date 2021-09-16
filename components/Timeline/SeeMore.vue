<template>
  <div
    class="absolute w-full h-full duration-150 border-t  bg-lightGrey border-t-black"
    :id="`card_${index}`"
    style="top: calc(100% - 42px)"
    value="off"
  >
    <div
      :id="`header_${index}`"
      class="
        h-[42px]
        bg-white
        px-5
        flex
        items-center
        justify-between
        cursor-pointer
      "
      @click="openCard"
    >
      <p class="B_05">คำอธิบายเพิ่มเติม</p>
      <img
        :src="require('assets/images/open_card.png')"
        :id="`open_card_${index}`"
      />
    </div>
    <div
      id="content-body"
      v-html="data.description"
      class="p-5 overflow-y-auto B_05"
      style="height: calc(100% - 42px)"
    />
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
    data: {
      type: Object,
      required: false,
      default: {},
    },
  },
  methods: {
    openCard() {
      const elem = document.getElementById(`card_${this.index}`)
      const header = document.getElementById(`header_${this.index}`)
      const open = document.getElementById(`open_card_${this.index}`)

      if (elem.getAttribute('value') === 'off') {
        if (elem) elem.style.top = '0'
        header.style.borderTop = '0px'
        header.style.borderBottom = '1px solid #000000'
        open.style.transform = ' rotate(180deg)'
        elem.setAttribute('value', 'on')
      } else {
        if (elem) elem.style.top = 'calc(100% - 42px)'
        open.style.transform = ' rotate(0)'
        elem.setAttribute('value', 'off')
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
