<template>
  <br /><br /><br />
  <div>
    <h3><i class="fas fa-user-circle"></i> ข้อมูลผู้ใช้</h3>
    <br />

    <!-- ChangePass Section -->
    <div class="content m-auto col-lg-8" v-if="showChangePass">
      <label class="form-label">รหัสผ่านเดิม</label>
      <input
        type="password"
        class="form-control mb-3"
        placeholder="รหัสผ่านเดิม"
        v-model="oldpass"
      />
      <label class="form-label">รหัสผ่านใหม่</label>
      <input
        type="password"
        class="form-control mb-3"
        placeholder="รหัสผ่านใหม่"
        v-model="pass"
      />
      <label class="form-label">ยืนยันรหัสผ่านใหม่</label>
      <input
        type="password"
        class="form-control mb-3"
        placeholder="ยืนยันรหัสผ่านใหม่"
        v-model="repass"
      />
      <p class="text-center">
        <button class="btn btn-warning" @click="changePass()">
          เปลี่ยนรหัสผ่าน
        </button>
      </p>
    </div>

    <!-- ChangeInfo Section -->
    <div class="content m-auto col-lg-8" v-else>
      <div class="row mb-3 g-2">
        <div class="col">
          <label class="form-label">ชื่อ</label>
          <input
            type="text"
            class="form-control"
            placeholder="ชื่อ"
            v-model="user.fname"
          />
        </div>
        <div class="col">
          <label class="form-label">นามสกุล</label>
          <input
            type="text"
            class="form-control"
            placeholder="นามสกุล"
            v-model="user.lname"
          />
        </div>
      </div>
      <label class="form-label">รหัสบัตรประชาชน 13 หลัก</label>
      <input
        type="text"
        class="form-control"
        placeholder="รหัสบัตรประชาชน 13 หลัก"
        v-model="user.idcard"
        readonly
      />
      <label class="form-label">เบอร์ติดต่อ</label>
      <input
        type="text"
        class="form-control"
        placeholder="เบอร์ติดต่อ"
        v-model="user.phone"
      />
      <label class="form-label">อีเมล</label>
      <input
        type="email"
        class="form-control mb-3"
        placeholder="อีเมล"
        v-model="user.email"
        readonly
      />
      <label class="form-label">LINE ID</label>
      <input
        type="text"
        class="form-control mb-3"
        placeholder="LINE ID"
        v-model="user.lineid"
      />
      <p class="text-center">
        <button class="btn btn-info mx-1" @click="updateValidate()">บันทึก</button>
        <a class="mx-1 link-secondary" @click="changePassPage()"
          >เปลี่ยนรหัสผ่าน</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { SERVER_IP, PORT } from "../assets/server/serverIP";

export default {
  data() {
    return {
      oldpass: "",
      pass: "",
      repass: "",
      user: null,
      showChangePass: false,
    };
  },
  methods: {
    updateValidate() {
      this.update();
    },
    update() {
      let formData = {
        fname: this.user.fname,
        lname: this.user.lname,
        idcard: this.user.idcard,
        phone: this.user.phone,
        email: this.user.email,
        lineid: this.user.lineid,
      };
      axios
        .put(`http://${SERVER_IP}:${PORT}/users/${this.user._id}`, formData)
        .then((res) => {
          const data = res.data;
          if (data.status) {
            alert(data.message);
            this.$router.push("/profile");
          } else {
            alert(data.message);
          }
        })
        .catch((err) => {
          console.error(err);
        });
      
    },
    changePassPage() {
      alert('Demo')
      // this.showChangePass = true
    },
    changePass() {
      console.log("do changePass");
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
  },
};
</script>

<style scoped></style>
