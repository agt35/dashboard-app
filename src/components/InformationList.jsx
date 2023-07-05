import Container from "./Container";
import { PropTypes } from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";

const InformationList = ({ data, width }) => {
  return (
    <Container width={width}>
      {data ? (
        <div className="w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 items-center gap-5 border-b last:border-0 border-slate-400 pb-2 font-roboto text-xl text-slate-100 my-3 first:mt-0 last:mb-0 mx-2"
            >
              <h4 className="font-semibold">{item.name}</h4>
              <p
                className={`text-right ${
                  item.value > 0 ? "text-green-500" : "text-red-500"
                }`}
              >{`${(item.value * 100).toFixed(2)}%`}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </Container>
  );
};

InformationList.propTypes = {
  data: PropTypes.array,
  width: PropTypes.string,
};

export default InformationList;
