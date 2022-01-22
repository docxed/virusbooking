<template>
  <div v-if="covidData != null">
    <br /><br />
    <h3>สถิติผู้ติดเชื้อโควิด-19 ในไทย</h3>
    <p>
      ข้อมูลอัปเดตล่าสุด:
      {{
        `${covidData.txn_date.getDate()}-${
          month_th[covidData.txn_date.getMonth()]
        }-${covidData.txn_date.getFullYear()}`
      }}
    </p>

    <div class="row">
      <div class="col-sm-12 col-lg-3">
        <div class="box bg-danger">
          <p class="fs-5">ติดเชื้อเพิ่มขึ้น</p>
          <p class="fs-1 text-center">+{{ covidData.new_case }}</p>
        </div>
      </div>
      <div class="col-sm-12 col-lg-3">
        <div class="box bg-dark">
            <p class="fs-5">เสียชีวิตเพิ่มขึ้น</p>
          <p class="fs-1 text-center">+{{ covidData.new_death }}</p>
        </div>
      </div>
      <div class="col-sm-12 col-lg-3">
        <div class="box bg-info">
          <p class="fs-1 text-center">+1000</p>
        </div>
      </div>
      <div class="col-sm-12 col-lg-3">
        <div class="box bg-success">
          <p class="fs-1 text-center">+1000</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      covidData: null,
      month_th: [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
      ],
    };
  },
  methods: {
    GetcovidData() {
      let apiCovid19Today =
        "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all";
      axios
        .get(apiCovid19Today)
        .then((res) => {
          console.log(res.data);
          this.covidData = res.data[0];
          this.covidData.txn_date = new Date(this.covidData.txn_date);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  created() {
    this.GetcovidData();
  },
};
</script>
<style scoped>
.box {
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  border-radius: 12px;
  margin: 10px;
  color: #ffffff;
}
.box p {
  margin: 10px;
}
</style>
