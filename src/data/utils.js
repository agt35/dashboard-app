export const getLabels = (data) => {
  const periods = [...new Set(data.map((item) => item.period))];
  return periods;
};

export const getDatasets = (data) => {
  const dataset = [];
  const labels = [...new Set(data.map((item) => item.name))];
  labels.forEach((label) => {
    const color = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},0.8)`; // random color
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
