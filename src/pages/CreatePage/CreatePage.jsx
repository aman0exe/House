import React from "react";
import css from "./CreatePage.module.css";
import Title from "../../components/Title/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [isSending, setSending] = useState(false);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    const data = {
      title: name,
      description: discription,
      img: img,
      price: price,
    };
    try {
      const res = await fetch(
        "https://64c257b2eb7fd5d6ebcfa969.mockapi.io/houses",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 201) {
        alert("asdfghjk");
        navigate("/Dashboard");
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("fghuyghgbh");
      setSending(false);
    }
  };

  return (
    <form onSubmit={submit} className={css.wrapper}>
      <Title title="Создать объявления" />
      <div className={css.inputName}>
        <p>Название</p>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={css.img}>
        <p>Фото</p>
        <input
          type="url"
          required
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
      </div>
      <div className={css.discription}>
        <p>Описание</p>
        <input
          type="text"
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
        />
      </div>
      <div className={css.price}>
        <p>Цена</p>
        <input
          required
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <div className={css.buttons}>
          <button>Close</button>
          <button disabled={isSending}>Save</button>
        </div>
      </div>
    </form>
  );
}

export default CreatePage;
