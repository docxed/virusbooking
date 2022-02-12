<template>
  <br /><br /><br />
  <div>
    <h3><i class="fas fa-user-circle"></i> ข้อมูลผู้ใช้</h3>
    <br />
    <div class="content m-auto col-lg-8" v-if="showChangePass">
        <label class="form-label">รหัสผ่านเดิม</label>
        <input type="password" class="form-control mb-3" placeholder="รหัสผ่านเดิม" v-model="oldpass" />
        <label class="form-label">รหัสผ่านใหม่</label>
        <input type="password" class="form-control mb-3" placeholder="รหัสผ่านใหม่" v-model="pass" />
        <label class="form-label">ยืนยันรหัสผ่านใหม่</label>
        <input type="password" class="form-control mb-3" placeholder="ยืนยันรหัสผ่านใหม่" v-model="repass" />
        <p class="text-center">
            <button class="btn btn-warning" @click="changePass()">เปลี่ยนรหัสผ่าน</button>
        </p>
    </div>
    <div class="content m-auto col-lg-8" v-else>
        <div class="row mb-3 g-2">
            <div class="col">
                <label class="form-label">ชื่อ</label>
                <input type="text" class="form-control" placeholder="ชื่อ" v-model="fname" />
            </div>
            <div class="col">
                <label class="form-label">นามสกุล</label>
                <input type="text" class="form-control" placeholder="นามสกุล" v-model="lname" />
            </div>
        </div>
        <label class="form-label">รหัสบัตรประชาชน 13 หลัก</label>
        <input type="text" class="form-control" placeholder="รหัสบัตรประชาชน 13 หลัก" v-model="idcard" />
        <label class="form-label">เบอร์ติดต่อ</label>
        <input type="text" class="form-control" placeholder="เบอร์ติดต่อ" v-model="phone" />
        <label class="form-label">อีเมล</label>
        <input type="email" class="form-control mb-3" placeholder="อีเมล" v-model="email" />
        <label class="form-label">LINE ID</label>
        <input type="text" class="form-control mb-3" placeholder="LINE ID" v-model="lineid" />
        <p class="text-center">
            <button class="btn btn-info mx-1" @click="update()">บันทึก</button>
            <a class="mx-1 link-secondary" @click="showChangePass = true">เปลี่ยนรหัสผ่าน</a>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        email: '',
        oldpass: '',
        pass: '',
        repass: '',
        fname: '',
        lname: '',
        idcard: '',
        phone: '',
        lineid: '',
        showChangePass: false,
    };
  },
  methods: {
      update() {
          console.log('do update')
          this.$router.push('/')
      },
      changePass() {
          console.log('do changePass')
          this.$router.push('/')
      },
  },
};
</script>

<style scoped></style>
