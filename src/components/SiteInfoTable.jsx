import { PropTypes } from "prop-types";
const SiteInfoTable = ({ labels, datasets }) => {
  return (
    <table className="w-full table-auto border-4 border-slate-400">
      <thead className="text-xl text-slate-300 font-bold text-start">
        <tr>
          <th className="border-r border-slate-400">Metric</th>
          {labels.map((label) => (
            <th key={label} className="border-r border-slate-400">
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-lg text-slate-200 text-start border-t-4 border-slate-400">
        {datasets &&
          datasets.map((data) => (
            <tr key={data.label}>
              <td className="font-bold border-r border-slate-400 pl-2">
                {data.label}
              </td>
              {data.data.map((value, index) => (
                <td
                  key={index}
                  className="px-2 border-r border-slate-400"
                >{`${value}%`}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

SiteInfoTable.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  datasets: PropTypes.arrayOf(PropTypes.object),
};
export default SiteInfoTable;
