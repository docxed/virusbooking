<template>
  <div>
    <h2>ลงชื่อเข้าเข้าใช้งาน</h2>
    <hr />
    <br />
    <div class="col-lg-7 mx-auto mb-5 content">
      <form @submit.prevent="validateSignin()">
        <div class="mb-3">
          <label class="form-label" for="email">อีเมล</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            placeholder="อีเมล"
            maxlength="50"
            name="email"
            aria-describedby="email"
          />
          <div v-if="v$.email.$error" class="my-1 text-danger">
            โปรดป้อนอีเมลให้ถูกต้อง!
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label" for="password">รหัสผ่าน</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            placeholder="รหัสผ่าน"
            maxlength="18"
            name="password"
          />
          <div v-if="v$.password.$error" class="my-1 text-danger">
            โปรดป้อนรหัสผ่านให้ถูกต้อง!
          </div>
        </div>
        <div class="mb-3 text-center">
          <button type="submit" class="btn btn-primary">
            ลงชื่อเข้าเข้าใช้งาน
          </button>
        </div>
        <div class="mb-3 text-center">
          ไม่ได้เป็นสมาชิกใช่ไหม คลิกที่นี่เพื่อ
          <router-link to="/signup">ลงทะเบียน</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  data() {
    return {
        v$: useValidate(),
      email: '',
      password: '',
    };
  },
  validations() {
    return {
      email: { required, email },
      password: { required },
    };
  },
  methods: {
    submitSignin() {
      console.log("Congratulations");
    },
    validateSignin() {
      this.v$.$validate();
      if (!this.$v.$error) {
        this.submitSignin();
      }
    },
  },
};
</script>
