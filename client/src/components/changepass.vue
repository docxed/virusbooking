<template>
  <br /><br /><br />
  <div>
    <h3><i class="fas fa-key"></i> เปลี่ยนรหัสผ่าน</h3>
    <br />

    <!-- ChangePass Section -->
    <div class="content m-auto col-lg-8">
      <label class="form-label">รหัสผ่านเดิม</label>
      <input
        type="password"
        class="form-control mb-3"
        placeholder="รหัสผ่านเดิม"
        v-model="oldpass"
      />
      <span v-if="v$.oldpass.$error" style="color: red">
        <p>
          โปรดกรอก รหัสผ่าน ให้ถูกต้อง (ประกอบไปด้วย ตัวพิมพ์ใหญ่ ตัวพิมพ์เล็ก
          ตัวเลข และมีความยาวตั้งแต่ 6-18 ตัว)
        </p>
      </span>
      <label class="form-label">รหัสผ่านใหม่</label>
      <input
        type="password"
        class="form-control mb-3"
        placeholder="รหัสผ่านใหม่"
        v-model="pass"
      />
      <span v-if="v$.pass.$error" style="color: red">
        <p>
          โปรดกรอก รหัสผ่าน ให้ถูกต้อง (ประกอบไปด้วย ตัวพิมพ์ใหญ่ ตัวพิมพ์เล็ก
          ตัวเลข และมีความยาวตั้งแต่ 6-18 ตัว)
        </p>
      </span>
      <label class="form-label">ยืนยันรหัสผ่านใหม่</label>
      <input
        type="password"
        class="form-control mb-3"
        placeholder="ยืนยันรหัสผ่านใหม่"
        v-model="repass"
      />
      <span v-if="v$.repass.$error" style="color: red">
        <p>โปรดยืนยันรหัสผ่านให้ตรงกัน</p>
      </span>
      <p class="text-center">
        <button class="btn btn-warning" @click="changePassValidate()">
          เปลี่ยนรหัสผ่าน
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { PROTOCOl, SERVER_IP, PORT } from "../assets/server/serverIP";
import useValidate from "@vuelidate/core";
import { required, minLength, maxLength, sameAs } from "@vuelidate/validators";

export default {
  data() {
    return {
      v$: useValidate(),
      oldpass: "",
      pass: "",
      repass: "",
      olddatauser: null,
    };
  },
  validations() {
    return {
      oldpass: { required, minLength: minLength(6), maxLength: maxLength(18) },
      pass: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(18),
        containsUppercase: function (value) {
          return /[A-Z]/.test(value);
        },
        containsLowercase: function (value) {
          return /[a-z]/.test(value);
        },
        containsNumber: function (value) {
          return /[0-9]/.test(value);
        },
      },
      repass: { required, sameAs: sameAs(this.pass) },
    };
  },
  methods: {
    changePass() {
      let formData = {
        oldpass: this.oldpass,
        pass: this.pass,
      };
      axios
        .put(
          `${PROTOCOl}://${SERVER_IP}:${PORT}/user/changepass/${this.olddatauser._id}`,
          formData
        )
        .then((res) => {
          const data = res.data;
          if (data.status) {
            alert(data.message);
            this.$root.logout();
          } else {
            alert(data.message);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    changePassValidate() {
      this.v$.$validate();
      if (!this.v$.$error) {
        // if ANY fail validation
        this.changePass();
      } else {
        alert("โปรดกรอกข้อมูลให้ถูกต้อง");
      }
    },
    getUser() {
      axios
        .get(`${PROTOCOl}://${SERVER_IP}:${PORT}/users/${this.olddatauser._id}`)
        .then((res) => {
          const data = res.data;
          if (data.status) {
            this.oldpass = data.password;
          } else {
            alert(data.message);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    authentication() {
      let info = JSON.parse(localStorage.getItem("info"));
      if (info != null) {
        this.$root.info = info;
        this.$root.loggedIn = true;
        this.olddatauser = info;
      } else {
        this.loggedIn = false;
        alert("โปรดลงชื่อเข้าใช้งาน");
        this.$router.push("/login");
      }
    },
  },
  created() {
    this.authentication();
    this.getUser();
  },
};
</script>

<style scoped></style>
