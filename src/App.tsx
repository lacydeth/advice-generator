import { useEffect, useState } from "react";
import AdviceCard from "./components/AdviceCard";
import { AdviceType } from "./components/types/types";

function App() {
  const [advice, setAdvice] = useState<AdviceType | null>(null);

  const fetchAdvice = async () => {
    const resp = await fetch("https://api.adviceslip.com/advice");
    const data = await resp.json();
    setAdvice({ id: data.slip.id, advice: data.slip.advice });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="container">
      {advice ? (
        <AdviceCard advice={advice} fetchAdvice={fetchAdvice} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
