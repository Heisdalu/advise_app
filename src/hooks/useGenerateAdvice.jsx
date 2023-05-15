import { useCallback, useState } from "react";

const intialState = {
  slip: {
    id: 117,
    advice:
      "it is easy to sit up and take notice, what's difficult is getting up and taking action",
  },
};

const useGenerateAdvice = () => {
  const [adviceText, setAdviceText] = useState(intialState);
  const [error, setError] = useState(false);

  const generateNewAdvice = useCallback(async () => {
    try {
      const adviceApi = await fetch("https://api.adviceslip.com/advice");
      const data = await adviceApi.json();
      setAdviceText(data);
      setError(false);
    } catch (e) {
      setError(true);
      setAdviceText("");
    }
  }, []);

  return { adviceText, error, generateNewAdvice };
};

export default useGenerateAdvice;
