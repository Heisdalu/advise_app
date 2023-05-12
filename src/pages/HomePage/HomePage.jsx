import style from "./HomePage.module.css";
import lol from "../../assets/pattern-divider-mobile.svg";

const HomePage = () => {
  console.log(style);
  return (
    <section className={style.adviseContainer}>
      <h1 className={style.headerTitle}>
        ADVICE <span>#117</span>
      </h1>
      <p
        className={style.message}
      >{`"${"it is easy to sit up and take notice, what's difficult is getting up and taking action"}"`}</p>
      <img src={lol} alt="" className={style.imgDivider} />

      <button className={style.adviceBtn}></button>
    </section>
  );
};

export default HomePage;
