<template>
  <div>
    <!-- Nav bar -->
    <div v-if="loggedIn">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/main">
            <img
              src="./assets/logo.png"
              alt=""
              width="40"
              height="40"
              class="d-inline-block align-center"
            />
            เตียงพร้อม
          </a>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/register">ลงทะเบียนเข้าใช้งาน</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <!-- Body -->
    <div class="container my-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: true,
    };
  },
};
</script>
