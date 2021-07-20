<template>
  <apexchart type="donut" :options="chartOptions" :series="series"/>
</template>

<script>
export default {
  data() {
    return {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>