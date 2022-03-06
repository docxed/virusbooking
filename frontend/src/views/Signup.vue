<template>
  <div>
    <h2>ลงทะเบียนเข้าใช้งาน</h2>
    <hr />
    <br />
    <div class="col-lg-7 mx-auto mb-5 content">
      <form @submit.prevent="validateSignup()">
        <div class="row g-2 mb-3">
          <div class="col">
            <label class="form-label">ชื่อ</label>
            <input
              type="text"
              v-model="signup.fname"
              class="form-control"
              placeholder="ชื่อ"
              maxlength="50"
              required
              name="fname"
              aria-describedby="fname"
            />
            <div v-if="v$.signup.fname.$error" class="my-2 text-danger">
              โปรดป้อนชื่อให้ถูกต้อง
            </div>
          </div>
          <div class="col">
            <label class="form-label">นามสกุล</label>
            <input
              type="text"
              v-model="signup.lname"
              class="form-control"
              placeholder="นามสกุล"
              maxlength="50"
              required
              name="lname"
              aria-describedby="lname"
            />
            <div v-if="v$.signup.lname.$error" class="my-2 text-danger">
              โปรดป้อนนามสกุลให้ถูกต้อง
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="idcard">รหัสบัตรประชาชน</label>
          <input
            type="text"
            v-model="signup.idcard"
            class="form-control"
            placeholder="รหัสบัตรประชาชน"
            maxlength="13"
            required
            name="idcard"
            aria-describedby="idcard"
          />
          <div v-if="v$.signup.idcard.$error" class="my-2 text-danger">
            โปรดป้อนรหัสบัตรประชาชนให้ถูกต้อง
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="phone">เบอร์ติดต่อ</label>
          <input
            type="text"
            v-model="signup.phone"
            class="form-control"
            placeholder="เบอร์ติดต่อ"
            maxlength="10"
            required
            name="phone"
            aria-describedby="phone"
          />
          <div v-if="v$.signup.phone.$error" class="my-2 text-danger">
            โปรดป้อนเบอร์ติดต่อให้ถูกต้อง
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="email">อีเมล</label>
          <input
            type="email"
            v-model="signup.email"
            class="form-control"
            placeholder="อีเมล"
            maxlength="50"
            required
            name="email"
            aria-describedby="email"
          />
          <div v-if="v$.signup.email.$error" class="my-2 text-danger">
            โปรดป้อนอีเมลให้ถูกต้อง
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="password">รหัสผ่าน</label>
          <input
            type="password"
            v-model="signup.password"
            class="form-control"
            placeholder="รหัสผ่าน"
            maxlength="18"
            required
            name="password"
          />
          <div v-if="v$.signup.password.$error" class="my-2 text-danger">
            โปรดป้อนรหัสผ่านให้ถูกต้อง (5 - 18 ตัวอักษร)
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="c_password">ยืนยันรหัสผ่าน</label>
          <input
            type="password"
            v-model="signup.c_password"
            class="form-control"
            placeholder="ยืนยันรหัสผ่าน"
            maxlength="18"
            required
            name="c_password"
          />
          <div v-if="v$.signup.c_password.$error" class="my-2 text-danger">
            โปรดป้อนรหัสผ่านให้ถูกต้อง (เหมือนกับรหัสผ่าน)
          </div>
        </div>
        <div class="mb-3 text-center">
          <button type="submit" class="btn btn-success">
            ลงทะเบียนเข้าใช้งาน
          </button>
        </div>
        <div class="mb-3 text-center">
          เป็นสมาชิกแล้วใช่ไหม คลิกที่นี่เพื่อ
          <router-link to="/signin">เข้าสู่ระบบ</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  numeric,
  sameAs,
} from "@vuelidate/validators";

export default {
  data() {
    return {
      v$: useVuelidate(),
      signup: {
        fname: "",
        lname: "",
        idcard: "",
        phone: "",
        email: "",
        password: "",
        c_password: "",
      },
    };
  },
  validations() {
    return {
      signup: {
        fname: { required, maxLength: maxLength(50) },
        lname: { required, maxLength: maxLength(50) },
        idcard: {
          required,
          minLength: minLength(13),
          maxLength: maxLength(13),
          numeric,
        },
        phone: {
          required,
          minLength: minLength(10),
          maxLength: maxLength(10),
          numeric,
        },
        email: { required, maxLength: maxLength(50), email },
        password: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(18),
        },
        c_password: {
          required,
          sameAs: sameAs(this.signup.password),
        },
      },
    };
  },
  methods: {
    submitSignup() {
      console.log("Congratularion");
    },
    validateSignup() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.submitSignup();
      }
    },
  },
};
</script>
