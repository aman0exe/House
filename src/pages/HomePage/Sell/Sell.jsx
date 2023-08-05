import React from "react";
import css from "./Sell.module.css";
import { useNavigate } from "react-router-dom";

function Sell(props) {
  const navigate = useNavigate();
  const moreDetail = () => {navigate("/detail")};
  return (
    <div className={css.announce}>
      <div className="imgWrapper">
        <img src={props.img} alt="" />
      </div>
      <p>{props.title}</p>
      <p>{props.price}.000$</p>
      <button onClick={moreDetail}>Подробнее</button>
    </div>
  );
}
export default Sell;
