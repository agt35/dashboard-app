// import axios from "axios";

// const getData = async () => {
//   try {
//     const response = await axios.get("http://127.0.0.1:8000/data_region");
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const getLabels = (data) => {
  const periods = [...new Set(data.map((item) => item.period))];
  return periods;
};

export const getDatasets = (data) => {
  const colors = [
    "#e5e5e5",
    "#fecaca",
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
  console.log(data);
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

// const data = await getData();
// console.log(getDatasets(data));
