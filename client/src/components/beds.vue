<template>
  <br /><br /><br />
  <h3 class="my-3"><i class="fas fa-clipboard-list fa-lg"></i> การจองเตียง</h3>
  <div class="content">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <td><b>วันที่จะเข้าพักอาศัย</b></td>
          <td><b>สถานที่</b></td>
          <td><b>สถานะ</b></td>
          <td><b>วันที่จอง</b></td>
          <td><b></b></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>First</td>
          <td>First</td>
          <td>Last</td>
          <td>Handle</td>
          <td><a href="/bedsdetail/1"><button class="btn btn-outline-primary btn-sm">ดูข้อมูล</button></a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  methods: {
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
    this.authentication(false)
  }
};
</script>

<style scoped>
.table td {
   text-align: center;   
}
</style>

