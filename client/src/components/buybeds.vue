<template>
  <br /><br /><br />
  <div v-if="bed != null">
    <!-- Deatil Section -->
    <h3><i class="fas fa-map-marker-alt fa-lg"></i> รายละเอียดเลือกจอง</h3>
    <br />
    <div class="content m-auto col-lg-8">
      <p class="text-end">
        <button
          class="btn"
          @click="
            gmaps(
              `${bed.hno} หมู่ที่ ${bed.no} ซอย ${bed.lane} ตำบล/แขวง ${bed.district} อำเภอ/เขต ${bed.area}, จังหวัด${bed.province}, ${bed.zipcode}`
            )
          "
        >
          Google Maps
        </button>
      </p>
      <p class="h5">อคิราภ์ สีแสนยง</p>
      <p class="h6 text-secondary">ติดต่อ 0882923741</p>
      <p class="h6 text-secondary">LINE ID ajayzz</p>
      <p class="h6 text-secondary">
        {{
          `ที่อยู่ ${bed.hno} หมู่ที่ ${bed.no} ซอย ${bed.lane} ตำบล/แขวง ${bed.district} อำเภอ/เขต ${bed.area}, จังหวัด${bed.province}, ${bed.zipcode} `
        }}
      </p>
      <p class="text-center">
        <button type="button" class="btn btn-success mt-3">
          พร้อมจอง <span class="badge bg-white text-dark">0</span> เตียง
        </button>
      </p>
    </div>

    <!-- BuyForm Section -->
    <hr class="col-lg-8 m-auto my-5" />
    <p class="text-center h5">วันที่จะเข้าพักอาศัย</p>
    <div class="m-auto d-flex my-3 justify-content-center">
      <div class="row">
        <div class="col">
          <input type="date" class="form-control" />
        </div>
        <div class="col">
          <button
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalRent"
          >
            จอง
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Section -->
    <div
      class="modal fade"
      id="modalRent"
      tabindex="-1"
      aria-labelledby="modalRentLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalRentLabel">คุณต้องการจองใช่ไหม</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              ยกเลิก
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="rent()"
            >
              ยืนยันจอง
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { SERVER_IP, PORT } from "../assets/server/serverIP";
export default {
  data() {
    return {
      bed: null,
    };
  },
  methods: {
    gmaps(url) {
      window.open("https://www.google.co.th/maps?q=" + url, "_blank");
    },
    getBed() {
      axios
        .get(`http://${SERVER_IP}:${PORT}/beds/${this.$route.params.id}`)
        .then((res) => {
          const data = res.data;
          this.bed = data.info[0];
        })
        .catch((err) => {
          console.error(err);
        });
    },
    rent() {
      console.log("do rent...");
    },
    authentication() {
      let info = JSON.parse(localStorage.getItem("info"));
      if (info != null) {
        this.$root.info = info;
        this.$root.loggedIn = true;
      } else {
        this.loggedIn = false;
        alert("โปรดลงชื่อเข้าใช้งาน");
        this.$router.push("/login");
      }
    },
  },
  created() {
    this.authentication();
    this.getBed();
  },
};
</script>

<style scoped></style>
