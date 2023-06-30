import Container from "./Container";
import { PropTypes } from "prop-types";

const InformationList = ({ data, width }) => {
  return (
    <Container width={width}>
      <div className="w-full">
        {data.map((item) => (
          <div
            key={item.Name}
            className="grid grid-cols-2 items-center gap-5 border-b last:border-0 border-slate-400 pb-2 font-roboto text-xl text-slate-100 my-3 first:mt-0 last:mb-0 mx-2"
          >
            <h4 className="font-semibold">{item.Name}</h4>
            <p
              className={`text-right ${
                item.difference > 0 ? "text-green-500" : "text-red-500"
              }`}
            >{`${(item.difference * 100).toFixed(2)}%`}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

InformationList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InformationList;
