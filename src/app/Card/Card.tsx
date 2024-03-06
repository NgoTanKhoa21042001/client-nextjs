"use client";
import React, { useState } from "react";
import "./card.css";
import styles from "./custom.module.css";
import clsx from "clsx";
const Card = () => {
  const [expand, setExpand] = useState(false);
  return (
    //   khi expand là true thì có clan styles.card
    <div
      className={clsx("card", {
        [styles.card]: expand,
      })}
    >
      Card
    </div>
  );
};

export default Card;
