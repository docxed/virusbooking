<template>
  <div v-if="covidData != null">
    <br /><br />
    <h3>สถิติผู้ติดเชื้อโควิด-19 ในไทย</h3>
    <p>
      ข้อมูลอัปเดตล่าสุด: {{ convertToThaiDate(covidData.updated) }}
    </p>
    <p>

    </p>

    <div class="row">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="box bg-danger">
          <p class="fs-5">ติดเชื้อเพิ่มขึ้น</p>
          <p class="fs-1 text-center">
            +{{ covidData.todayCases.toLocaleString() }}
          </p>
          <p class="text-end fs-5">
            สะสม {{ covidData.cases.toLocaleString() }}
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="box bg-dark">
          <p class="fs-5">เสียชีวิตเพิ่มขึ้น</p>
          <p class="fs-1 text-center">+{{ covidData.todayDeaths }}</p>
          <p class="text-end fs-5">
            สะสม {{ covidData.deaths.toLocaleString() }}
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="box bg-info">
          <p class="fs-5">รักษาตัวอยู่ใน รพ.</p>
          <p class="fs-1 text-center">{{ covidData.active.toLocaleString() }}</p>
          <p class="text-end fs-5">สะสมทั้งหมด</p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="box bg-success">
          <p class="fs-5">หายแล้วเพิ่มขึ้น</p>
          <p class="fs-1 text-center">+{{ covidData.todayRecovered.toLocaleString() }}</p>
          <p class="text-end fs-5">
            สะสม {{ covidData.recovered.toLocaleString() }}
          </p>
        </div>
      </div>
    </div>
    <p class="text-end text-secondary">ข้อมูลโดย disease.sh</p>

    <h3><i class="fas fa-procedures"></i> ค้นหาเตียง</h3>
    <p>จำนวนเตียงว่างทั้งหมด 0 เตียง</p>
    <div class="content">
      <p class="text-center"> <a href="/findbeds"><button class="btn col-12 col-lg-4 btn-info text-white"><i class="fas fa-search-location fa-lg"></i> ค้นหาเตียง</button></a> </p>
      <p class="text-center"> <a href="/beds"><button class="btn col-12 col-lg-4 btn-success"><i class="fas fa-clipboard-list fa-lg"></i> การจองเตียง</button></a> </p>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      covidData: null,
    };
  },
  methods: {
    GetcovidData() {
      let apiCovid19Today =
        "https://corona.lmao.ninja/v2/countries/TH";
      axios
        .get(apiCovid19Today)
        .then((res) => {
          console.log(res.data);
          this.covidData = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    convertToThaiDate(rawDate) {
      let date = new Date(rawDate);
      let monthTH = [
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
      ];
      let year = date.getFullYear();
      let month = monthTH[date.getMonth()];
      let numOfDay = date.getDate();

      let hour = date.getHours().toString().padStart(2, "0");
      let minutes = date.getMinutes().toString().padStart(2, "0");
      // let second = date.getSeconds().toString().padStart(2, "0");
      return `${numOfDay} ${month} ${year} | ${hour}:${minutes} น.`;
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
  padding-top: 50px;
  padding-bottom: 50px;
  border-radius: 12px;
  margin-bottom: 10px;
  color: #ffffff;
}
.box p {
  margin: 10px;
}
</style>
