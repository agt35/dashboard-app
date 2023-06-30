import { PropTypes } from "prop-types";
import Container from "./Container";

const InformationCard = ({ title, data, best }) => {
  return (
    <Container width="w-[290px]">
      <h3 className="text-3xl text-slate-300 font-bold">{title}</h3>
      <p className="text-xl text-slate-300">Difference to target:</p>
      <p
        className={`${
          best ? "text-green-500" : "text-red-500"
        } text-2xl font-bold`}
      >{`${(data.difference * 100).toFixed(2)}%`}</p>
      <p className="text-xl text-slate-300">{data.Name}</p>
    </Container>
  );
};

InformationCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  best: PropTypes.bool,
};

export default InformationCard;
