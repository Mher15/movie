import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/SideBar.module.scss";
import { Image } from "../common/Image";

export const Menu = memo(({ navItems }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {navItems
          ? navItems.map((item) => {
              return (
                <li
                  className={`${styles.nav_item} ${
                    item.active ? styles.active : ""
                  }`}
                  key={item.id}
                >
                  <Link to={item.to}>
                    <div className={styles.img_block}>
                      <Image src={item.url} alt={item.alt} />
                    </div>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </nav>
  );
});
