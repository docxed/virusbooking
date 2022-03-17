<template>
  <div class="container">
    <br />

    <h2>
      <i class="fas fa-search" style="margin-right: 10px; color: DodgerBlue"></i
      >ค้นหาเตียง
    </h2>

    <div style="margin: 20px">
      <div class="row g-1">
        <label for="province"
          >โปรดเลือกพื้นที่จังหวัดที่ต้องการค้นหาเตียง</label
        >
        <div class="col-sm-4 col-8">
          <select class="form-select" id="province" style="font-size: 16px">
            <option>กรุงเทพฯ</option>
            <option>สมุทรปราการ</option>
            <option>ชลบุรี</option>
            <option>พระนครศรีอยุธยา</option>
          </select>
        </div>
        <div class="col-sm-4 col-4">
          <button type="button" class="btn button2">
            <i class="fas fa-search"></i>
            ค้นหา
          </button>
        </div>
      </div>
    </div>

    <div style="margin: 20px">
      <h5 style="margin-bottom: 15px">
        ค้นพบ <span style="color: DodgerBlue">4</span> สถานที่
      </h5>

      <div class="row">
        <div
          class="col-lg-6 col-md-6 col-sm-12 mb-4"
          v-for="(item, index) in [1, 2, 3, 4]"
          :key="index"
        >
          <div class="py-3 border" style="border-radius: 20px">
            <div class="gap-3 mx-5">
              <button class="btn btn-primary">
                พร้อมจอง
                <span
                  class="badge"
                  style="background-color: white; color: black"
                  >40</span
                >
                เตียง
              </button>
            </div>

            <div class="row m-auto">
              <div class="col-3 m-auto py-3 text-center">
                <h1><i class="fa-solid fa-map-location-dot"></i></h1>
              </div>
              <div class="col-auto m-auto py-3">
                <h5>จังหวัด กรุงเทพฯ</h5>
                <h5>บ้านเลขที่ 62/205 ซอย ประชาอุทิศ 76</h5>
                <div class="mb-3">ตำบล/แขวง ทุ่งครุ อำเภอ/เขต ทุ่งครุ</div>
              </div>
            </div>

            <div class="text-center">
              <button type="button" class="btn button1">ดูรายละเอียด</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user: { type: Object },
  },
  data() {
    return {}
  },
  methods: {},
  created() {},
}
</script>
<style scoped>
.button1:hover {
  background-color: white;
  color: black;
  border: 1px solid #24884f;
}

.button1 {
  background-color: #24884f;
  color: white;
}

.button2:hover {
  background-color: white;
  color: black;
  border: 1px solid DodgerBlue;
}

.button2 {
  border-radius: 8px;
  background-color: DodgerBlue;
  text-align: center;
  cursor: pointer;
  color: white;
}
.icon:hover {
  color: black;
}
</style>
