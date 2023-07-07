// import axios from "axios";

// const getData = async () => {
//   try {
//     const response = await axios.get("http://127.0.0.1:8000/data_region");
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

const sampleData = [
  {
    period: 1,
    group: "Financials",
    name: "Ingredients",
    value: 0.7776,
    target: 0.834,
  },
  {
    period: 1,
    group: "Financials",
    name: "Labor Efficiency",
    value: 0.7981,
    target: 0.836,
  },
  {
    period: 1,
    group: "Packaging",
    name: "Line Efficiency",
    value: 0.7314,
    target: 0.816,
  },
  {
    period: 1,
    group: "Packaging",
    name: "Small Bag Lbs Attainment",
    value: 0.7304,
    target: 0.814,
  },
  {
    period: 1,
    group: "Reliability",
    name: "Backlog %",
    value: 0.7531,
    target: 0.788,
  },
  {
    period: 1,
    group: "Reliability",
    name: "Unplanned Downtime",
    value: 0.8109,
    target: 0.856,
  },
  {
    period: 2,
    group: "Financials",
    name: "Ingredients",
    value: 0.7935,
    target: 0.834,
  },
  {
    period: 2,
    group: "Financials",
    name: "Labor Efficiency",
    value: 0.8478,
    target: 0.836,
  },
  {
    period: 2,
    group: "Packaging",
    name: "Line Efficiency",
    value: 0.8097,
    target: 0.816,
  },
  {
    period: 2,
    group: "Packaging",
    name: "Small Bag Lbs Attainment",
    value: 0.8279,
    target: 0.814,
  },
  {
    period: 2,
    group: "Reliability",
    name: "Backlog %",
    value: 0.773,
    target: 0.788,
  },
  {
    period: 2,
    group: "Reliability",
    name: "Unplanned Downtime",
    value: 0.7643,
    target: 0.856,
  },
  {
    period: 3,
    group: "Financials",
    name: "Ingredients",
    value: 0.7006,
    target: 0.834,
  },
  {
    period: 3,
    group: "Financials",
    name: "Labor Efficiency",
    value: 0.7847,
    target: 0.836,
  },
  {
    period: 3,
    group: "Packaging",
    name: "Line Efficiency",
    value: 0.7784,
    target: 0.816,
  },
  {
    period: 3,
    group: "Packaging",
    name: "Small Bag Lbs Attainment",
    value: 0.8528,
    target: 0.814,
  },
  {
    period: 3,
    group: "Reliability",
    name: "Backlog %",
    value: 0.8392,
    target: 0.788,
  },
  {
    period: 3,
    group: "Reliability",
    name: "Unplanned Downtime",
    value: 0.7915,
    target: 0.856,
  },
  {
    period: 4,
    group: "Financials",
    name: "Ingredients",
    value: 0.7528,
    target: 0.834,
  },
  {
    period: 4,
    group: "Financials",
    name: "Labor Efficiency",
    value: 0.82,
    target: 0.836,
  },
  {
    period: 4,
    group: "Packaging",
    name: "Line Efficiency",
    value: 0.7389,
    target: 0.816,
  },
  {
    period: 4,
    group: "Packaging",
    name: "Small Bag Lbs Attainment",
    value: 0.8087,
    target: 0.814,
  },
  {
    period: 4,
    group: "Reliability",
    name: "Backlog %",
    value: 0.8026,
    target: 0.788,
  },
  {
    period: 4,
    group: "Reliability",
    name: "Unplanned Downtime",
    value: 0.7369,
    target: 0.856,
  },
  {
    period: 5,
    group: "Financials",
    name: "Ingredients",
    value: 0.7981,
    target: 0.834,
  },
  {
    period: 5,
    group: "Financials",
    name: "Labor Efficiency",
    value: 0.778,
    target: 0.836,
  },
  {
    period: 5,
    group: "Packaging",
    name: "Line Efficiency",
    value: 0.6904,
    target: 0.816,
  },
  {
    period: 5,
    group: "Packaging",
    name: "Small Bag Lbs Attainment",
    value: 0.7863,
    target: 0.814,
  },
  {
    period: 5,
    group: "Reliability",
    name: "Backlog %",
    value: 0.8141,
    target: 0.788,
  },
  {
    period: 5,
    group: "Reliability",
    name: "Unplanned Downtime",
    value: 0.8457,
    target: 0.856,
  },
  {
    period: 6,
    group: "Financials",
    name: "Ingredients",
    value: 0.8125,
    target: 0.834,
  },
  {
    period: 6,
    group: "Financials",
    name: "Labor Efficiency",
    value: 0.7244,
    target: 0.836,
  },
  {
    period: 6,
    group: "Packaging",
    name: "Line Efficiency",
    value: 0.7272,
    target: 0.816,
  },
  {
    period: 6,
    group: "Packaging",
    name: "Small Bag Lbs Attainment",
    value: 0.8337,
    target: 0.814,
  },
  {
    period: 6,
    group: "Reliability",
    name: "Backlog %",
    value: 0.7286,
    target: 0.788,
  },
  {
    period: 6,
    group: "Reliability",
    name: "Unplanned Downtime",
    value: 0.7857,
    target: 0.856,
  },
  {
    period: 7,
    group: "Financials",
    name: "Ingredients",
    value: 0.817,
    target: 0.834,
  },
  {
    period: 7,
    group: "Financials",
    name: "Labor Efficiency",
    value: 0.8114,
    target: 0.836,
  },
  {
    period: 7,
    group: "Packaging",
    name: "Line Efficiency",
    value: 0.8034,
    target: 0.816,
  },
  {
    period: 7,
    group: "Packaging",
    name: "Small Bag Lbs Attainment",
    value: 0.737,
    target: 0.814,
  },
  {
    period: 7,
    group: "Reliability",
    name: "Backlog %",
    value: 0.7352,
    target: 0.788,
  },
  {
    period: 7,
    group: "Reliability",
    name: "Unplanned Downtime",
    value: 0.8279,
    target: 0.856,
  },
  {
    period: 8,
    group: "Financials",
    name: "Ingredients",
    value: 0.7164,
    target: 0.834,
  },
  {
    period: 8,
    group: "Financials",
    name: "Labor Efficiency",
    value: 0.7445,
    target: 0.836,
  },
  {
    period: 8,
    group: "Packaging",
    name: "Line Efficiency",
    value: 0.7973,
    target: 0.816,
  },
  {
    period: 8,
    group: "Packaging",
    name: "Small Bag Lbs Attainment",
    value: 0.7456,
    target: 0.814,
  },
  {
    period: 8,
    group: "Reliability",
    name: "Backlog %",
    value: 0.7813,
    target: 0.788,
  },
  {
    period: 8,
    group: "Reliability",
    name: "Unplanned Downtime",
    value: 0.8794,
    target: 0.856,
  },
  {
    period: 9,
    group: "Financials",
    name: "Ingredients",
    value: 0.8566,
    target: 0.834,
  },
  {
    period: 9,
    group: "Financials",
    name: "Labor Efficiency",
    value: 0.7857,
    target: 0.836,
  },
  {
    period: 9,
    group: "Packaging",
    name: "Line Efficiency",
    value: 0.8764,
    target: 0.816,
  },
  {
    period: 9,
    group: "Packaging",
    name: "Small Bag Lbs Attainment",
    value: 0.8157,
    target: 0.814,
  },
  {
    period: 9,
    group: "Reliability",
    name: "Backlog %",
    value: 0.8696,
    target: 0.788,
  },
  {
    period: 9,
    group: "Reliability",
    name: "Unplanned Downtime",
    value: 0.8901,
    target: 0.856,
  },
];

const filteredData = sampleData.filter((item) => item.group === "Financials");
const inputData = filteredData.map((item) => {
  return {
    period: item.period,
    name: item.name,
    value: item.value,
    target: item.target,
  };
});

export const getLabels = (data) => {
  const periods = [...new Set(data.map((item) => item.period))];
  return periods;
};

export const getDatasets = (data) => {
  const colors = [
    "#e5e5e5",
    "#b91c1c",
    "#fbbf24",
    "#a3e635",
    "#15803d",
    "#99f6e4",
    "#22d3ee",
    "#0369a1",
    "#7c3aed",
    "#d946ef",
    "#581c87",
    "#f9a8d4",
  ];
  const dataset = [];
  const labels = [...new Set(data.map((item) => item.name))];
  labels.forEach((label) => {
    const randomPosition = Math.floor(Math.random() * colors.length);
    const color = colors.splice(randomPosition, 1);
    const labelData = data.filter((item) => item.name === label);
    const labelDataset = {
      label: label,
      data: labelData.map((item) => (item.difference * 100).toFixed(2)),
      backgroundColor: color,
      borderColor: color,
      pointStyle: "rectRounded",
      segment: {
        borderColor: color,
        borderWidth: 2.5,
      },
      pointRadius: 5,
      borderWidth: 1,
    };
    dataset.push(labelDataset);
  });
  return dataset;
};

export const getDatasetsRegionOverview = (data) => {
  console.log(data);
  const metrics = [...new Set(data.map((item) => item.name))];
  const dataset = [];
  const colors = [
    "#e5e5e5",
    "#b91c1c",
    "#fbbf24",
    "#a3e635",
    "#15803d",
    "#99f6e4",
    "#22d3ee",
    "#0369a1",
    "#7c3aed",
    "#d946ef",
    "#581c87",
    "#f9a8d4",
  ];
  metrics.forEach((metric) => {
    const metricData = data.filter((item) => item.name === metric);
    const randomPositionOne = Math.floor(Math.random() * colors.length);
    const randomPositionTwo = Math.floor(Math.random() * colors.length);
    const firstColor = colors.splice(randomPositionOne, 1);
    const secondColor = colors.splice(randomPositionTwo, 1);
    const valueDataset = {
      label: `${metric} Value`,
      data: metricData.map((item) => (item.value * 100).toFixed(2)),
      backgroundColor: firstColor,
      borderColor: firstColor,
      pointStyle: "rectRounded",
      segment: {
        borderColor: firstColor,
        borderWidth: 2.5,
      },
      pointRadius: 5,
      borderWidth: 1,
    };
    const targetDataset = {
      label: `${metric} Target`,
      data: metricData.map((item) => (item.target * 100).toFixed(2)),
      backgroundColor: secondColor,
      borderColor: secondColor,
      pointStyle: "rectRounded",
      segment: {
        borderColor: secondColor,
        borderWidth: 2.5,
      },
      pointRadius: 5,
      borderWidth: 1,
    };
    dataset.push(valueDataset);
    dataset.push(targetDataset);
  });
  console.log(dataset);
  return dataset;
};

getDatasetsRegionOverview(inputData);
// const data = await getData();
// console.log(getDatasets(data));
