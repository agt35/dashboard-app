import axios from "axios";

const getData = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/data_entries/Boston/Line Efficiency"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

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
      label: `${metric} Actual`,
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

export const getDatasetsSite = (data) => {
  const metricGroups = [...new Set(data.map((item) => item.metric_group))];
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

  const datasets = [];
  metricGroups.forEach((group) => {
    const groupData = data.filter((item) => item.metric_group === group);
    const groupDataset = [];
    const metrics = [...new Set(groupData.map((item) => item.metric_name))];
    metrics.forEach((metric) => {
      const metricData = groupData.filter(
        (item) => item.metric_name === metric
      );
      const randomPositionOne = Math.floor(Math.random() * colors.length);
      const randomPositionTwo = Math.floor(Math.random() * colors.length);
      const firstColor = colors.splice(randomPositionOne, 1);
      const secondColor = colors.splice(randomPositionTwo, 1);
      const valueDataset = {
        label: `${metric} Actual`,
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

      groupDataset.push(valueDataset);
      groupDataset.push(targetDataset);
    });
    datasets.push({
      label: group,
      datasets: groupDataset,
    });
  });
  return {
    periods: getLabels(data),
    datasets: datasets,
  };
};

export const getDatasetsCompare = (data) => {
  const actualColor = "#e5e5e5";
  const targetColor = "#99f6e4";
  const datasets = [];
  const metric = data[0].metric_name;
  const actualsDataset = {
    label: `${metric} Actual`,
    data: data.map((item) => (item.value * 100).toFixed(2)),
    backgroundColor: actualColor,
    borderColor: actualColor,
    pointStyle: "rectRounded",
    segment: {
      borderColor: actualColor,
      borderWidth: 2.5,
    },
    pointRadius: 5,
    borderWidth: 1,
  };
  const targetsDataset = {
    label: `${metric} Target`,
    data: data.map((item) => (item.target * 100).toFixed(2)),
    backgroundColor: targetColor,
    borderColor: targetColor,
    pointStyle: "rectRounded",
    segment: {
      borderColor: targetColor,
      borderWidth: 2.5,
    },
    pointRadius: 5,
    borderWidth: 1,
  };
  datasets.push(actualsDataset);
  datasets.push(targetsDataset);
  const periods = getLabels(data);
  return {
    labels: periods,
    datasets: datasets,
  };
};

const data = await getData();
const datasets = getDatasetsCompare(data);
console.log(datasets);
