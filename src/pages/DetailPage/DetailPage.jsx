import React from "react";
import css from "./DetailPage.module.css";
import Title from "../../components/Title/Title";

function DetailPage() {
  return (
    <div className={css.wrapper}>
      <div className={css.slider}>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div className={css.desc}>
        <Title title="Продаю дом 5км в Нарыне" />
        <Title title="Цена: 55000 $" />
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
      <button>Позвонить</button>
    </div>
  );
}

export default DetailPage;