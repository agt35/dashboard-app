import Container from "./Container";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const TableCard = ({ title, data, onSelectChartData }) => {
  const [period, setPeriod] = useState(1);
  const [selectedData, setSelectedData] = useState(
    data.filter((item) => item.period === period)
  );

  useEffect(() => {
    const filteredData = data.filter((item) => item.period === Number(period));
    setSelectedData(filteredData);
  }, [period, data]);

  const periods = [...new Set(data.map((item) => item.period))];

  return (
    <Container width="w-1/3">
      <div className="w-full h-[85%] overflow-y-scroll no-scrollbar">
        <div className="w-full border-b-2 mb-2 font-roboto flex justify-center">
          <h3 className="text-4xl text-slate-300 font-bold text-center pb-2">
            {title}
          </h3>
          <select
            name=""
            id=""
            className="text-slate-200 p-2 rounded-md hover:bg-blue-800/25 transition-all duration-200 active:bg-blue-950 text-lg ml-4 mb-2 bg-transparent border border-blue-500 focus:outline-none"
            onChange={(e) => setPeriod(e.target.value)}
          >
            {periods.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full font-roboto">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-2xl text-slate-300 font-semibold">
                <th className="text-start">Metric</th>
                <th className="text-center">Value</th>
                <th className="text-right">Target</th>
              </tr>
            </thead>
            <tbody>
              {selectedData.map((item) => {
                return (
                  <tr className="text-xl text-slate-400" key={item.id}>
                    <td className="text-slate-300">{item.name}</td>
                    <td className="text-center">{`${(item.value * 100).toFixed(
                      2
                    )}%`}</td>
                    <td className="text-right text-blue-600">{`${(
                      item.target * 100
                    ).toFixed(2)}%`}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <button
        className="text-slate-200 p-2 rounded-lg shadow-md bg-blue-600 hover:bg-blue-900/50 hover:border-blue-400 transition-all duration-200 active:bg-blue-950 text-lg ml-4 mb-2 bg-transparent border-2 border-blue-800 focus:outline-none"
        onClick={() => onSelectChartData(title)}
      >
        View in chart
      </button>
    </Container>
  );
};

TableCard.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  onSelectChartData: PropTypes.func,
};
export default TableCard;
