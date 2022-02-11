<template>
  <br /><br /><br />
  <div>
    <h3>ลงชื่อเข้าใช้งาน</h3>
    <br />
    <div class="content m-auto col-lg-8">
        <label class="form-label">อีเมล</label>
        <input type="email" class="form-control mb-3" placeholder="อีเมล" v-model="email" />
        <label class="form-label">รหัสผ่าน</label>
        <input type="password" class="form-control mb-3" placeholder="รหัสผ่าน" v-model="pass" />
        <p class="text-center">
            <button class="btn btn-primary" @click="login()">ลงชื่อเข้าใช้</button>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        email: '',
        pass: ''
    };
  },
  methods: {
      login() {
          console.log('do login')
          this.$router.push('/')
      },
  },
};
</script>

<style scoped></style>
