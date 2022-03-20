<template>
  <div>
    <h2>สถิติผู้ติดเชื้อโควิด-19 ในไทย</h2>
    <div class="container board">
      <div class="row">
        <div class="col">
          <div class="upper_tile">updated: 17 มี.ค.</div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-6 tile">
          <div class="inner_tile">
            <div class="inner_tile_title">
              <div class="inner_title">
                <i
                  id="virus_icon"
                  class="fas fa-virus-covid"
                  style="color: red; height: 20px"
                ></i>
                <span style="position: relative; top: -10px">
                  | จำนวนผู้ติดเชื้อรายใหม่:
                </span>
              </div>
            </div>
            <div class="inner_tile_content">
              <div class="inner_content">27,071</div>
            </div>
            <div class="inner_tile_desc">
              <div class="inner_desc">จำนวนผู้ติดเชื้อสะสม: 3,303,169</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 tile">
          <div class="inner_tile">
            <div class="inner_tile_title">
              <div class="inner_title">
                <img
                  src="https://raw.githubusercontent.com/it62070112/virusbooking/6973bc0e64e87463fbfb2694ada2ffb61c2d5108/frontend/public/svg/bouquet.svg"
                  height="20"
                />
                | จำนวนการตายใหม่:
              </div>
            </div>
            <div class="inner_tile_content">
              <div class="inner_content">80</div>
            </div>
            <div class="inner_tile_desc">
              <div class="inner_desc">จำนวนการตายสะสม: 24078</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 tile">
          <div class="inner_tile">
            <div class="inner_tile_title">
              <div class="inner_title">
                <i
                  id="virus_icon"
                  class="fas fa-pills"
                  style="color: #1996d7; height: 20px"
                ></i>
                <span style="position: relative; top: -10px">
                  | ผู้หายป่วยรายใหม่:
                </span>
              </div>
            </div>
            <div class="inner_tile_content">
              <div class="inner_content">21,522</div>
            </div>
            <div class="inner_tile_desc">
              <div class="inner_desc">จำนวนผู้หายป่วยสะสม: 3,048,491</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 tile">
          <div class="inner_tile">
            <div class="inner_tile_title">
              <div class="inner_title">
                <i
                  id="virus_icon"
                  class="fas fa-hospital"
                  style="color: #4abba4; height: 20px"
                ></i>
                <span style="position: relative; top: -10px">
                  | จำนวนผู้รักษาตัวอยู่:
                </span>
              </div>
            </div>
            <div class="inner_tile_content" style="border: none">
              <div class="inner_content">230,600</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  props: {
    user: { type: Object },
  },
  data() {
    return {}
  },
  methods: {},
  created() {},
}
</script>
<style scoped>
.board {
  background: #e0e0e0;
  border: solid #e0e0e0 20px;
  border-radius: 10px;
  width: 50%;
}
.upper_tile {
  background-color: white;
  border-bottom: solid #e0e0e0 20px;
  width: 20%;
  position: relative;
  left: 80%;
  text-align: center;
  font-size: 50%;
}
.tile {
  background-color: #e0e0e0;
  height: 200px;
  border-radius: 10px;
}
.inner_tile {
  background-color: white;
  height: 90%;
  width: 100%;
  border-radius: 20px;
}
.inner_tile_title {
  height: 10%;
}
.inner_title {
  position: relative;
  top: 10px;
  left: 20px;
  font-size: 50%;
}
.inner_tile_content {
  border-bottom: solid black 1px;
  height: 80%;
}
.inner_content {
  position: relative;
  top: 30px;
  text-align: center;
  font-size: 200%;
}
.inner_tile_desc {
  height: 10%;
  font-size: 50%;
}
.inner_desc {
  width: 90%;
  position: relative;
  left: 0%;
  text-align: right;
}
</style>
