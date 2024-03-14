"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

const colorList = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"]; // Add more colors as needed

export default function Home() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleClick = () => {
    alert("Hello");
  };

  return (
      <div>
        <div className={styles.gallery}>
          {colorList.map((color, index) => (
              <div
                  key={index}
                  className={styles.colorContainer}
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    setSelectedColor(color);
                    handleClick();
                  }}
              />
          ))}
        </div>
      </div>
  );
}
