<template>
  <br /><br /><br />
  <div>

    <!-- FindBeds Section -->
    <h3 class="my-3"><i class="fas fa-search"></i> ค้นหาเตียง</h3>
    <div class="row g-2">
      <div class="col">
      </div>
      <div class="col">
        <select class="form-select" v-model="province">
          <option
            v-for="(province, index) in allProvinceTH"
            :key="index"
            :value="province"
            selected
          >
            {{ province }}
          </option>
        </select>
      </div>
      <div class="col">
        <button class="btn btn-info" @click="find()">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>

    <br />

    <!-- Result Section -->
    <div>
      <p class="col-lg-8 m-auto my-3">
        ค้นพบ <span class="text-primary">{{ beds.length }}</span> เตียง
      </p>
      <div class="content col-lg-8 m-auto">
        <p>สถานที่ ...</p>
        <p>
          <button type="button" class="btn btn-success btn-sm">
            พร้อมจอง <span class="badge bg-white text-dark">0</span> เตียง
          </button>
        </p>
        <p class="text-end">โดย</p>
        <p class="text-center">
          <a href="/buybeds/1"
            ><button class="btn btn-primary btn-sm">ดูรายละเอียด</button></a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { provinceTH } from "../assets/js/province.js";

export default {
  data() {
    return {
      allProvinceTH: [],
      province: "",
      beds: [],
    };
  },
  methods: {
    find() {
      console.log("do find");
    },
    authentication() {
      let info = JSON.parse(localStorage.getItem("info"));
      if (info != null) {
        this.$root.info = info;
        this.$root.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    },
  },
  created() {
    this.authentication();
    this.allProvinceTH = ["ทุกจังหวัด", ...provinceTH];
    this.province = this.allProvinceTH[0];
  },
};
</script>

<style scoped></style>
