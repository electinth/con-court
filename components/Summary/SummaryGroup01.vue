<template>
  <div id="summary-group1-wrapper" class="w-10/12 mx-auto md:max-w-[450px]">
    <div
      id="wrapper"
      class="px-5 py-5 text-center border border-black B_04 bg-tableHead"
    >
      <div class="font-bold">
        1. กลุ่มตุลาการรัฐธรรมนูญ <br />"โหวตดีต่อรัฐบาลสายทักษิณ ชินวัตร 100%"
      </div>
      <div>
        โดยลงมติเป็นผลบวกกับฝั่งการเมือง สายทักษิณ ชินวัตร ที่มีอำนาจในช่วงนั้น
      </div>
    </div>
    <div id="group-img" class="flex flex-wrap justify-center mt-7">
      <div v-for="(item, index) in data" :key="index" class="m-1 md:m-2">
        <el-popover
          placement="bottom"
          :width="$mq === 'mobile' ? 150 :240"
          trigger="click"
        >
          <PopOver
            :person="FilterJudgeByName(item.name)"
            :case_list_formated="PersonCase(item)"
          />
          <img
            slot="reference"
            :src="
              require(`assets/images/ภาพตุลาการ/${ReplaceString(
                item.name
              )}.png`)
            "
            class="
              w-[52px]
              h-[52px]
              md:w-[77px] md:h-[77px]
              rounded-full
              border border-black
              mx-auto
              cursor-pointer
            "
          />
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
import PopOver from '../Timeline/PopOver.vue'
import FormatPersonCase from '../util/FormatPersonCase'
import Judge from 'static/contents/ตุลาการ.json'
export default {
  components: {
    PopOver,
  },
  data() {
    return {
      data: [
        { name: 'นายกระมล ทองธรรมชาติ' },
        { name: 'นายมานิต วิทยาเต็ม' },
        { name: 'นายสุธี สุทธิสมบูรณ์' },
        {
          name: 'พลตำรวจเอกสุวรรณ สุวรรณเวโช',
        },
        { name: 'นายผัน จันทรปาน' },
        { name: 'นายศักดิ์ เตชาชาญ' },
      ],
    }
  },
  methods: {
    ReplaceString(name) {
      return name.replaceAll(' ', '_')
    },
    FilterJudgeByName(name) {
      let filter = Judge.filter((p) => p.name_surname_person === name)
      return filter[0]
    },

    PersonCase(list) {
      const case_list = FormatPersonCase(this.FilterJudgeByName(list.name))
      return this.SortPersonCaseNumber(case_list)
    },
    SortPersonCaseNumber(list) {
      return list.map((l) => ({
        name: l.name,
        list_case: l.list_case.sort((a, b) => b - a),
      }))
    },
  },
}
</script>

<style lang="scss" scoped></style>
