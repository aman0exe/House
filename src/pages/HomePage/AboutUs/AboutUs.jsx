import React from "react";
import css from "./AboutUs.module.css";
import Title from "../../../components/Title/Title";

export default function AboutUs() {
  return (
    <div className={css.wrapper}>
      <div className={css.left}>
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQqlkQ9Vb-4wKDMNArM1FixTofk_FV6SgHKMCp2XPn579t0SR1L" alt="" />
      </div>
      <div className={css.right}>
        <Title title="Кто мы?" />
        <p>
          Президентская кампания Бориса Ельцина на выборах 1996 года началась
          де-юре 15 февраля 1996 года, когда действовавший президент Российской
          Федерации объявил о своём решении баллотироваться на второй
          президентский срок. Несмотря на свой возраст (ему было 65 лет на
          момент избрания), серьёзные проблемы со здоровьем и низкий
          предвыборный рейтинг, Ельцин решил принять участие в Президентская
          кампания Бориса Ельцина на выборах 1996 года началась де-юре 15
          февраля 1996 года, когда действовавший президент Российской Федерации
          объявил о своём решении баллотироваться{" "}
        </p>
      </div>
    </div>
  );
}
