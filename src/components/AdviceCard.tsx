import { AdviceType } from "./types/types";

type AdviceProps = {
  advice: AdviceType;
  fetchAdvice: () => void;
};

const AdviceCard = ({ advice, fetchAdvice }: AdviceProps) => {
  return (
    <div className="card-container">
      <div className="header">
        <h3>Advice #{advice.id}</h3>
      </div>
      <div className="advice">
        <h2>"{advice.advice}"</h2>
      </div>
      <img className="divider-img" alt="divider" />
      <button onClick={fetchAdvice}>
        <img src="icon-dice.svg" alt="dice icon" />
      </button>
    </div>
  );
};

export default AdviceCard;
