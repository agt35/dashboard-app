import { PropTypes } from "prop-types";

const Container = ({ width, height, children }) => {
  return (
    <div
      className={`bg-blue-950 py-2 px-3 m-2 rounded-md shadow-md shadow-slate-950 flex flex-col items-center justify-center ${width} ${height}`}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
};
export default Container;
