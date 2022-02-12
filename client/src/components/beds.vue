<template>
  <br /><br /><br />
  <div>
    <CovidChart />
  </div>
</template>

<script>
import CovidChart from "./Charts/covidChart.vue";

export default {
  components: {
    CovidChart,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>