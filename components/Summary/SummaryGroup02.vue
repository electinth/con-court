<template>
  <div id="summaey-wrapper" class="w-10/12 mx-auto md:max-w-[450px] mt-24">
    <div
      id="wrapper"
      class="px-5 py-5 text-center border border-black B_04 bg-tableHead"
    >
      <div class="font-bold">
        2. กลุ่ม "โหวตดีต่อรัฐบาลสายอำนาจเก่า และทหาร"
      </div>
      <div>
        ตั้งแต่ปี พ.ศ. 2549 - ปัจจุบัน สามารถแบ่งประเภท<span
          class="whitespace-nowrap"
          >การลงมติ</span
        >ของตุลาการ ได้ 3 ประเภท
      </div>
    </div>
    <div id="group-data">
      <div v-for="(d, index) in group_data" :key="index">
        <div class="mt-6 font-bold text-center B_04">{{ d.title }}</div>
        <div class="flex flex-wrap justify-center mt-7">
          <div v-for="(item, index) in d.data" :key="index" class="m-1 md:m-2">
            <el-popover
              placement="bottom"
              :width="$mq === 'mobile' ? 200 : 240"
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
      group_data: [
        {
          title:
            '2.1 มีตุลาการ 16 คน ลงมติทั้งหมดเป็นผลบวกต่อรัฐบาลสายอำนาจเก่า และทหาร ขณะมีอำนาจ',
          data: [
            { name: 'นายปัญญา ถนอมรอด' },
            { name: 'นายอักขราทร จุฬารัตน' },
            { name: 'หม่อมหลวงไกรฤกษ์ เกษมสันต์' },
            {
              name: 'นายสมชาย พงษธา',
            },
            { name: 'นายกิติศักดิ์ กิติคุณไพโรจน์' },
            { name: 'นายธานิศ เกศวพิทักษ์' },
            { name: 'นายจรัญ หัตถกรรม' },
            { name: 'นายวิชัย ชื่นชมพูนุท' },
            { name: 'นายวรวิทย์ กังศศิเทียม' },
            { name: 'นายนครินทร์ เมฆไตรรัตน์' },
            { name: 'นายปัญญา อุดชาชน' },
            { name: 'นายอุดม สิทธิวิรัชธรรม' },
            { name: 'นายวิรุฬห์ แสงเทียน' },
            { name: 'นายจิรนิติ หะวานนท์' },
            { name: 'นายนภดล เทพพิทักษ์' },
            { name: 'นายบรรจงศักดิ์ วงศ์ปราชญ์' },
          ],
        },
        {
          title:
            '2.2 มีตุลาการ 1 คน ลงมติทั้งหมดเป็นผลลบต่อรัฐบาลสายทักษิณ ชินวัตร ขณะมีอำนาจ',
          data: [{ name: 'นายวสันต์ สร้อยพิสุทธิ์' }],
        },
        {
          title:
            '2.3 มีตุลาการ 4 คน ลงมติทั้งหมดเป็นผลบวกต่อรัฐบาลสายอำนาจเก่า และทหาร ขณะมีอำนาจ และเป็นผลลบต่อรัฐบาลสายทักษิณ ชินวัตร ขณะมีอำนาจ',
          data: [
            { name: 'นายนุรักษ์ มาประณีต' },
            { name: 'นายจรัญ ภักดีธนากุล' },
            { name: 'นายสุพจน์ ไข่มุกด์' },
            { name: 'นายจรูญ อินทจาร' },
          ],
        },
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
