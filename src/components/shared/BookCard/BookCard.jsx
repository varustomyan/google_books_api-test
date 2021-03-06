import React from "react";
import style from "./BookCard.module.css";

import { useNavigate } from "react-router-dom";

function BookCard({ item }) {
  const router = useNavigate();

  return (
    <div
      className={style.component}
      onClick={() => router(`/detail/${item.id}`)}
    >
      <div className={style.imageWrapper}>
        {!item.volumeInfo.imageLinks ? (
          <p>cover missing</p>
        ) : (
          <img
            className={style.image}
            src={item.volumeInfo.imageLinks.thumbnail}
            alt={`Cover of ${item.volumeInfo.title}`}
          />
        )}
      </div>

      <a className={style.category}>
        {item.volumeInfo.categories ? item.volumeInfo.categories[0] : ""}
      </a>
      <p className={style.title}>{item.volumeInfo.title}</p>
      <p className={style.authors}>
        {item.volumeInfo.authors ? item.volumeInfo.authors[0] : ""}
      </p>
    </div>
  );
}

export { BookCard };
