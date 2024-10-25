import Chart from "chart.js/auto";

function enableCharts() {
Chart.defaults.font.family = "Alegreya Sans 200n";
document.querySelector("#vertical-chart").style.display = "block";
document.querySelector("#horizontal-chart").style.display = "block";

// Get Vertical bar chart canvas element
const bar_ctx_v = document.querySelector("#vertical-chart").getContext("2d");

// Vertical gradient one
const gradientColorV = bar_ctx_v.createLinearGradient(0, 0, 0, 700);
gradientColorV.addColorStop(0, "#68BAE5");
gradientColorV.addColorStop(1, "#014F90");
// console.log(gradientColorV); // Check if gradient object is valid.

// Vertical gradient two
const gradientHoverV = bar_ctx_v.createLinearGradient(0, 0, 0, 700);
gradientHoverV.addColorStop(0, "#014F90");
gradientHoverV.addColorStop(1, "#68BAE5");

// Vertical bar chart options
document.addEventListener("DOMContentLoaded", () => {
  const bar_chart_v = new Chart(bar_ctx_v, {
    type: "bar",
    data: {
      labels: [
        "HTML 5",
        "CSS 3",
        "JAVASCRIPT",
        "ASTRO JS",
        "REACT JS",
        "TYPESCRIPT",
        "TAILWIND CSS",
        "SCSS",
        "SQL",
        "COLLABORATION",
      ],
      datasets: [
        {
          label: " SKILL SCORE",
          data: [96, 96, 67, 92, 67, 25, 89, 98, 25, 98],
          backgroundColor: gradientColorV,
          hoverBackgroundColor: gradientHoverV,
          hoverBorderWidth: 0.5,
          hoverBorderColor: "#ffffff",
        },
      ],
    },
    options: {
      responsive: true,
      indexAxis: "x",
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      legend: {
        display: false,
      },
      animation: {
        tension: {
          duration: 4000,
          easing: "easeInExpo",
          from: 0,
          to: 1,
          loop: false,
        },
      },
      scales: {
        y: {
          grid: {
            lineWidth: 0.5,
            color: "hsl(210 14% 85%)",
          },
          ticks: {
            min: 25,
            max: 100,
            stepSize: 25,
            font: {
              family: "Alegreya Sans 200n",
              size: 13,
              color: "hsl(210 14% 55%)",
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              family: "Alegreya Sans 200n",
              size: 13,
              color: "hsl(210 10.8% 65%)",
            },
            padding: 10,
          },
          barPercentage: 1,
        },
      },
      tooltip: {
        backgroundColor: "#495057",
        titleFontFamily: "Alegreya Sans 200n",
        titleFontColor: "#68BAE5",
        titleFontSize: 13,
        titleMarginBottom: 8,
        bodyFontFamily: "Alegreya Sans 200n",
        bodyFontSize: 13,
        bodyFontColor: "#ffffff",
        multiKeyBackground: "#014F90",
        borderColor: "#68BAE5",
        borderWidth: 2,
        caretSize: 5,
        cornerRadius: 5,
        padding: 15,
      },
    },
  });
});

// Get Horizontal bar chart canvas element
const bar_ctx_h = document.querySelector("#horizontal-chart").getContext("2d");

// Horizontal gradient one
var gradientColorH = bar_ctx_h.createLinearGradient(300, 0, 0, 0);
gradientColorH.addColorStop(0, "#68BAE5");
gradientColorH.addColorStop(1, "#014F90");

// Vertical grtadient two
var gradientHoverH = bar_ctx_h.createLinearGradient(300, 0, 0, 0);
gradientHoverH.addColorStop(0, "#014F90");
gradientHoverH.addColorStop(1, "#68BAE5");

// Vertical bar chart options
document.addEventListener("DOMContentLoaded", () => {
  const bar_chart_h = new Chart(bar_ctx_h, {
    type: "bar",
    data: {
      labels: [
        "H T M L 5",
        "C S S 3",
        "J A V A S C R I P T",
        "A S T R O  J S",
        "R E A C T  J S",
        "T Y P E S C R I P T",
        "T A I L W I N D  C S S",
        "S C S S",
        "S Q L",
        "C O L L A B O R A T I O N",
      ],
      datasets: [
        {
          label: "  SKILL SCORE",
          data: [96, 96, 67, 92, 67, 25, 85, 98, 25, 98],
          backgroundColor: gradientColorH,
          hoverBackgroundColor: gradientHoverH,
          hoverBorderWidth: 1,
          hoverBorderColor: "#ffffff",
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      legend: {
        display: false,
      },
      animation: {
        tension: {
          duration: 4000,
          easing: "easeInExpo",
          from: 0,
          to: 1,
          loop: false,
        },
      },
      scales: {
        y: {
          grid: {
            display: false,
          },
          ticks: {
            fontSize: 13,
            fontColor: "hsl(210 14% 55%)",
            family: "Alegreya Sans 200n",
          },
          barPercentage: 1,
        },
        x: {
          grid: {
            lineWidth: 0.5,
            color: "hsl(210 10.8% 65%)",
          },
          ticks: {
            min: 25,
            max: 100,
            stepSize: 25,
            font: {
              family: "Alegreya Sans 200n",
              size: 13,
              color: "hsl(210 10.8% 65%)",
            },
          },
        },
      },
      tooltips: {
        backgroundColor: "#495057",
        titleFontFamily: "Alegreya Sans 200n",
        titleFontColor: "#68BAE5",
        titleFontSize: 13,
        titleMarginBottom: 8,
        bodyFontFamily: "Alegreya Sans 200n",
        bodyFontSize: 13,
        bodyFontColor: "#ffffff",
        multiKeyBackground: "#014F90",
        borderColor: "#68BAE5",
        borderWidth: 2,
        caretSize: 5,
        cornerRadius: 5,
        padding: 15,
      },
    },
  });
});
// function end
}

enableCharts();