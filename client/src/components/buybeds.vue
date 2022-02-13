<template>
  <br /><br /><br />
  <div>

    <!-- Deatil Section -->
    <h3>รายละเอียดเลือกจอง {{ $route.params.id }}</h3>
    <br />
    <div class="content m-auto col-lg-8">
      <p class="text-center">
        <button type="button" class="btn btn-success">
          พร้อมจอง <span class="badge bg-white text-dark">0</span> เตียง
        </button>
      </p>
      <h5>ที่อยู่</h5>
      <p>...</p>
      <h5>ข้อมูลติดต่อ</h5>
      <p>ชื่อ</p>
      <p>เบอร์ติดต่อ</p>
      <p>LINE ID</p>
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
export default {
  data() {
    return {};
  },
  methods: {
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
  },
};
</script>

<style scoped></style>
