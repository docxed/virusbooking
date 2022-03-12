<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-light bg-light fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/"
          ><img
            src="./assets/images/logo.png"
            alt=""
            width="40"
            height="40"
            class="d-inline-block align-center"
          />
          Bestbeds
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              <img
                src="./assets/images/logo.png"
                alt=""
                width="40"
                height="40"
                class="d-inline-block align-center"
              />
              Bestbeds
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div class="row text-center">
              <router-link class="nav-link col me-auto" to="/signup">
                <span class="badge bg-success">ลงทะเบียนเข้าใช้งาน</span>
              </router-link>
              <router-link class="nav-link col ms-auto" to="/signin">
                ลงชื่อเข้าใช้งาน
              </router-link>
            </div>
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link class="nav-link" to="/"
                  ><span class="text-center">
                    <i class="fas fa-home" style="width: 5vh"></i>
                  </span>
                  หน้าแรก</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/">
                  <span class="text-center">
                    <i class="fas fa-procedures" style="width: 5vh"></i>
                  </span>
                  ค้นหาเตียง</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/"
                  ><span class="text-center">
                    <i class="fas fa-clipboard-list" style="width: 5vh"></i>
                  </span>

                  การจองเตียง</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- Router views -->
    <br /><br />
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
