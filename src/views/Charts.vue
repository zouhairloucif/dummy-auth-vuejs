<template>
  <b-container>
    <h1>Bienvenue vers la page des Charts</h1>
    <b-row class="my-5">
      <b-col md="6" class="mb-4">
        <b-card class="card-container">
          <b-card-header header-bg-variant="transparent" header-border-variant="white">
            <h4>Spline chart</h4>
          </b-card-header>
          <b-card-body>
            <spline-chart />
          </b-card-body>
        </b-card>
      </b-col>
      <b-col md="6" class="mb-4">
        <b-card class="card-container">
          <b-card-header header-bg-variant="transparent" header-border-variant="white">
            <h4>Pie chart</h4>
          </b-card-header>
          <b-card-body>
            <pie-chart />
          </b-card-body>
        </b-card>
      </b-col>
      <b-col md="12" class="mb-4">
        <b-card class="card-container">
          <b-card-header header-bg-variant="transparent" header-border-variant="white">
            <h4>Candlestick chart</h4>
          </b-card-header>
          <b-card-body>
            <candlestick-chart />
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import splineChart from "../components/charts/splineChart";
import pieChart from "../components/charts/pieChart";
import candlestickChart from "../components/charts/candlestickChart";
export default {
  name: "Charts",
  components: {
    splineChart,
    pieChart,
    candlestickChart,
  },
};
</script>

<style scoped>
.card-container {
  height: 500px;
}
</style>