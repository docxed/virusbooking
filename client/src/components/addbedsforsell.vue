<template>
  <div>
    <br /><br />
    <h3>เพิ่มสถานที่</h3>

    <p class="my-3 m-auto col-lg-8 h5">จำนวนเตียง</p>
    <div class="m-auto col-lg-6">
      <div class="row text-center">
        <div class="col-4 col-lg-5 my-auto text-end">
          <button class="btn btn-primary" @click="decreaseBeds()">-</button>
        </div>
        <div class="col-4 col-lg-2">
          <input
            type="text"
            class="m-auto customBeds form-control mb-3 bg-white"
            v-model="beds"
            min="1"
            max="9999"
            readonly
          />
        </div>
        <div class="col-4 col-lg-5 my-auto text-start">
          <button class="btn btn-primary" @click="increaseBeds()">+</button>
        </div>
      </div>
    </div>

    <p class="my-3 m-auto col-lg-8 h5">ที่อยู่</p>
    <div class="m-auto col-lg-6">
      <label class="form-label">เลขที่</label>
      <input type="text" class="form-control mb-3" placeholder="เลขที่" />
      <label class="form-label">หมู่ที่</label>
      <input type="text" class="form-control mb-3" placeholder="หมู่ที่" />
      <label class="form-label">ตำบล/แขวง</label>
      <input type="text" class="form-control mb-3" placeholder="ตำบล/แขวง" />
      <label class="form-label">อำเภอ/เขต</label>
      <input type="text" class="form-control mb-3" placeholder="อำเภอ/เขต" />
      <label class="form-label">จังหวัด</label>
      <select class="form-select" v-model="province">
        <option
          v-for="(province, index) in allProvinceTH"
          :key="index"
          :value="province"
        >
          {{ province }}
        </option>
      </select>
    </div>

    <p class="my-3 m-auto col-lg-8 h5">ข้อมูลผู้ใช้</p>
    <div class="m-auto col-lg-6">
      <div class="row g-2">
        <div class="col-lg-6">
          <label class="form-label">ชื่อ</label>
          <input
            type="text"
            class="form-control mb-3"
            placeholder="ชื่อ"
            v-model="fname"
            readonly
          />
        </div>
        <div class="col-lg-6">
          <label class="form-label">นามสกุล</label>
          <input
            type="text"
            class="form-control mb-3"
            placeholder="นามสกุล"
            v-model="lname"
            readonly
          />
        </div>
      </div>
      <label class="form-label">เบอร์ติดต่อ</label>
      <input
        type="text"
        class="form-control mb-3"
        placeholder="เบอร์ติดต่อ"
        v-model="phone"
        readonly
      />
      <p class="text-center">
            <button class="btn btn-primary" @click="addbeds()">เพิ่มเตียง</button>
        </p>
    </div>
  </div>
</template>

<script>
import { provinceTH } from "../assets/js/province.js";
export default {
  data() {
    return {
      province: provinceTH[0],
      allProvinceTH: provinceTH,
      fname: "อคิราภ์",
      lname: "สีแสนยง",
      phone: "0882923741",
      beds: 0,
    };
  },
  methods: {
    increaseBeds() {
      this.beds++;
      if (this.beds > 9999) this.beds = 9999;
    },
    decreaseBeds() {
      this.beds--;
      if (this.beds < 0) this.beds = 0;
    },
    addbeds() {
      console.log('do addbeds')
      this.$router.push('/')
    },
  },
};
</script>

<style scoped>
.customBeds {
  width: 90px;
  height: 70px;
  text-align: center;
  font-size: 30px;
}
</style>
