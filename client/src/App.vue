<template>
  <div>
    <!-- Nav bar -->
    <div v-if="loggedIn">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/home">
            <img
              src="./assets/logo.png"
              alt=""
              width="40"
              height="40"
              class="d-inline-block align-center"
            />
            เตียงพร้อม
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse text-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/home"
                  ><i class="fas fa-home"></i> หน้าแรก</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/grace"
                  ><i class="fas fa-procedures"></i> ค้นหาเตียง</a
                >
              </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown dropstart">
                <a
                  class="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-user-circle fa-lg mx-1"></i> {{ fname }}
                  {{ lname }}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item">ข้อมูลส่วนตัว</a>
                  </li>
                  <li>
                    <div class="dropdown-divider"></div>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/addbedsforsell"
                      >ฉันต้องการลงเตียง</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="/logout"
                      ><span class="text-danger">ออกจากระบบ</span></a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <div v-else>
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
            <li class="nav-item" v-if="$route.name == 'login'">
              <a class="nav-link" href="/register">ลงทะเบียนเข้าใช้งาน</a>
            </li>
            <li
              class="nav-item"
              v-if="$route.name == 'index' || $route.name == 'register'"
            >
              <a class="nav-link" href="/login">ลงชื่อเข้าใช้งาน</a>
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
      fname: "อคิราภ์",
      lname: "สีแสนยง",
    };
  },
};
</script>
