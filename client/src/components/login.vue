<template>
  <br /><br /><br />
  <div>
    <!-- Login Section -->
    <h3>ลงชื่อเข้าใช้งาน</h3>
    <br />
    <div class="content m-auto col-lg-8">
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
      <p class="text-center">
        <button class="btn btn-primary" @click="loginValidate()">
          ลงชื่อเข้าใช้
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
<<<<<<< Updated upstream
import { SERVER_IP, PORT } from "../assets/server/serverIP";

=======
import { PROTOCOl, SERVER_IP, PORT } from "../assets/server/serverIP";
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
>>>>>>> Stashed changes
export default {
  data() {
    return {
      email: "",
      pass: "",
    };
  },
<<<<<<< Updated upstream
=======

  validations() {
    return {
      email: { required },
      pass: { required, minLength: minLength(6) },
    };
  },
>>>>>>> Stashed changes
  methods: {
    login() {
      let formData = {
        email: this.email,
        pass: this.pass,
      };
      axios
<<<<<<< Updated upstream
        .post(`http://${SERVER_IP}:${PORT}/login`, formData)
=======
        .post(`${PROTOCOl}://${SERVER_IP}:${PORT}/login`, formData)
>>>>>>> Stashed changes
        .then((res) => {
          const data = res.data;
          if (data.status) {
            this.$root.login(data);
            this.$router.push("/");
          } else {
            this.pass = "";
            alert(data.message);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    loginValidate() {
<<<<<<< Updated upstream
      this.login();
=======
      this.v$.$validate(); // checks all inputs
      if (!this.v$.$error) {
        // if ANY fail validation
        this.login();
      } else {
        alert("โปรดกรอกข้อมูลให้ถูกต้อง");
      }
>>>>>>> Stashed changes
    },
    authentication() {
      let info = JSON.parse(localStorage.getItem("info"));
      if (info != null) {
        this.$root.info = info;
        this.$root.loggedIn = true;
        this.$router.push("/");
      } else {
        this.loggedIn = false;
      }
    },
  },
  created() {
    this.authentication();
  },
};
</script>

<style scoped></style>
