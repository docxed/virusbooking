<template>
  <br /><br /><br />
  <div>
    <h3>ลงทะเบียนเข้าใช้งาน</h3>
    <br />
    <div class="content m-auto col-lg-8">
      <div class="row mb-3 g-2">
        <div class="col">
          <label class="form-label">ชื่อ</label>
          <input
            type="text"
            class="form-control"
            placeholder="ชื่อ"
            v-model="fname"
          />
        </div>
        <div class="col">
          <label class="form-label">นามสกุล</label>
          <input
            type="text"
            class="form-control"
            placeholder="นามสกุล"
            v-model="lname"
          />
        </div>
      </div>
      <label class="form-label">รหัสบัตรประชาชน</label>
      <input
        type="text"
        class="form-control"
        placeholder="รหัสบัตรประชาชน"
        v-model="idcard"
      />
      <label class="form-label">เบอร์ติดต่อ</label>
      <input
        type="text"
        class="form-control"
        placeholder="เบอร์ติดต่อ"
        v-model="phone"
      />
      <label class="form-label">อีเมล</label>
      <input
        type="email"
        class="form-control mb-3"
        placeholder="อีเมล"
        v-model="email"
      />
      <label class="form-label">รหัสผ่าน</label>
      <input
        type="password"
        class="form-control mb-3"
        placeholder="รหัสผ่าน"
        v-model="pass"
      />
      <label class="form-label">ยืนยันรหัสผ่าน</label>
      <input
        type="password"
        class="form-control mb-3"
        placeholder="ยืนยันรหัสผ่าน"
        v-model="repass"
      />
      <p class="text-center">
        <button class="btn btn-success" @click="register()">ลงทะเบียน</button>
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
      email: "",
      pass: "",
      repass: "",
      fname: "",
      lname: "",
      idcard: "",
      phone: "",
      lineid: "",
    };
  },
  methods: {
    register() {
      let formData = {
        email: this.email,
        pass: this.pass,
        fname: this.fname,
        lname: this.lname,
        idcard: this.idcard,
        phone: this.phone,
        lineid: this.lineid, // not required
      };
      axios
        .post(`${SERVER_IP}:${PORT}/`, formData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
      // this.$router.push('/login')
    },
  },
};
</script>

<style scoped></style>
