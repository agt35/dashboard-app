const Container = ({ width, children }) => {
  return (
    <div
      className={`bg-blue-950 p-3 m-2 rounded-md shadow-md shadow-slate-950 flex flex-col items-center ${width}`}
    >
      {children}
    </div>
  );
};
export default Container;
