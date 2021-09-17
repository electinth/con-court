<template>
  <div id="hint-wrapper" class="flex">
    <div
      v-for="hint in hint_data"
      :key="hint.name"
      class="flex items-center B_05 mx-2.5"
    >
      <div
        class="
          md:w-[12px]
          w-[9px]
          h-[9px]
          md:h-[12px]
          rounded-full
          border border-black
        "
        :class="{
          'bg-positiveGreen': hint.name === 'ผลบวกต่อรัฐบาล',
          'bg-negativeRed': hint.name === 'ผลลบต่อรัฐบาล',
          'bg-absentGray': hint.name === 'เหตุการณ์',
          'border-absentGray': hint.name === 'เหตุการณ์',
        }"
      />
      <p class="ml-[5px]">{{ hint.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hint_data: [
        { name: 'ผลบวกต่อรัฐบาล' },
        { name: 'ผลลบต่อรัฐบาล' },
        { name: 'เหตุการณ์' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
