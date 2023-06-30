export const getLabels = (data) => {
  const periods = [...new Set(data.map((item) => item.Period))];
  return periods;
};

export const getDatasets = (data) => {
  const dataset = [];
  const labels = [...new Set(data.map((item) => item.Name))];
  labels.forEach((label) => {
    const color = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},0.8)`; // random color
    const labelData = data.filter((item) => item.Name === label);
    const labelDataset = {
      label: label,
      data: labelData.map((item) => (item.difference * 100).toFixed(2)),
      backgroundColor: color,
      borderColor: color,
      borderWidth: 1,
    };
    dataset.push(labelDataset);
  });
  return dataset;
};
