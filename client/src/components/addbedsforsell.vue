<template>
  <div>
    <br /><br />
    <!-- AddBeds Section -->
    <h3><i class="fas fa-plus-circle"></i> เพิ่มสถานที่</h3>

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
          />
        </div>
        <div class="col-4 col-lg-5 my-auto text-start">
          <button class="btn btn-primary" @click="increaseBeds()">+</button>
        </div>
      </div>
    </div>

    <p class="my-3 m-auto col-lg-8 h5">ที่อยู่</p>
    <div class="m-auto col-lg-6">
      <div class="row g-2">
        <div class="col">
          <label class="form-label">เลขที่</label>
          <input type="text" class="form-control mb-3" placeholder="เลขที่" v-model="hno" />
        </div>
        <div class="col">
          <label class="form-label">หมู่ที่</label>
          <input type="text" class="form-control mb-3" placeholder="หมู่ที่" v-model="no" />
        </div>
        <div class="col">
          <label class="form-label">ซอย</label>
          <input type="text" class="form-control mb-3" placeholder="ซอย" v-model="lane" />
        </div>
      </div>
      <label class="form-label">ตำบล/แขวง</label>
      <input type="text" class="form-control mb-3" placeholder="ตำบล/แขวง" v-model="district" />
      <label class="form-label">อำเภอ/เขต</label>
      <input type="text" class="form-control mb-3" placeholder="อำเภอ/เขต" v-model="area" />
      <label class="form-label">จังหวัด</label>
      <select class="form-select mb-3" v-model="province">
        <option
          v-for="(province, index) in allProvinceTH"
          :key="index"
          :value="province"
        >
          {{ province }}
        </option>
      </select>
      <label class="form-label">รหัสไปรษณีย์</label>
      <input type="text" class="form-control mb-3" placeholder="รหัสไปรษณีย์" v-model="zipcode" />
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
            v-model="user.fname"
            readonly
          />
        </div>
        <div class="col-lg-6">
          <label class="form-label">นามสกุล</label>
          <input
            type="text"
            class="form-control mb-3"
            placeholder="นามสกุล"
            v-model="user.lname"
            readonly
          />
        </div>
      </div>
      <label class="form-label">เบอร์ติดต่อ</label>
      <input
        type="text"
        class="form-control mb-3"
        placeholder="เบอร์ติดต่อ"
        v-model="user.phone"
        readonly
      />
      <p class="text-center">
        <button class="btn btn-primary" @click="addbeds()">เพิ่มสถานที่</button>
      </p>
    </div>

    <!-- History Section -->
    <h3 class="mt-5 mb-3">
      <i class="fas fa-history"></i> ประวัติการเพิ่มสถานที่
    </h3>
    <div class="content">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <td><b>วันที่สร้างข้อมูล</b></td>
            <td><b>สถานที่</b></td>
            <td><b>มีผู้จองแล้ว</b></td>
            <td><b></b></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First</td>
            <td>First</td>
            <td>Last</td>
            <td>
              <a href=""
                ><button class="btn btn-outline-primary btn-sm">
                  แก้ไขข้อมูล
                </button></a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { provinceTH } from "../assets/js/province.js";
export default {
  data() {
    return {
      allProvinceTH: [],
      user: "",
      beds: 0,
      hno: "",
      no: "",
      lane: "",
      district: "",
      area: "",
      province: "",
      zipcode: "",
      user_id: "",
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
      console.log("do addbeds");
      this.$router.push("/");
    },
    authentication() {
      let info = JSON.parse(localStorage.getItem("info"));
      if (info != null) {
        this.$root.info = info;
        this.$root.loggedIn = true;
        this.user = info;
      } else {
        this.loggedIn = false;
        alert("โปรดลงชื่อเข้าใช้งาน");
        this.$router.push("/login");
      }
    },
  },
  created() {
    this.authentication();
    this.allProvinceTH = provinceTH;
    this.province = this.allProvinceTH[0];
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
