import React, { memo } from "react";
import styles from "../../styles/Button.module.scss";

export const Button = memo(({ onClick, icon, label, variant, style }) => {
  return (
    <button
      className={`${variant === "primary" ? styles.primary : styles.secondary}`}
      onClick={onClick}
      style={style}
    >
      {icon ? icon : null}
      <span>{label}</span>
    </button>
  );
});
