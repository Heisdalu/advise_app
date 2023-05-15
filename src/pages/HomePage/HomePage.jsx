import style from "./HomePage.module.css";
import lol from "../../assets/pattern-divider-mobile.svg";
import useGenerateAdvice from "../../hooks/useGenerateAdvice";

const HomePage = () => {
  const { adviceText, error, generateNewAdvice } = useGenerateAdvice();

  const clickedBtn = () => {
    generateNewAdvice();
  };

  if (error) {
    return (
      <section className={`${style.adviseContainer} ${style.error}`}>
        something went wrong. Check your internet😥{" "}
      </section>
    );
  }

  return (
    <section className={style.adviseContainer}>
      <h1 className={style.headerTitle}>
        ADVICE #<span>{adviceText?.slip.id}</span>
      </h1>
      <p className={style.message}>{`"${adviceText.slip.advice}"`}</p>
      <img src={lol} alt="" className={style.imgDivider} />

      <button className={style.adviceBtn} onClick={clickedBtn}></button>
    </section>
  );
};

export default HomePage;
