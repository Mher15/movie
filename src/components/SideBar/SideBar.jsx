import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { Menu } from "./Menu";
import { Image } from "../common/Image";
import styles from "../../styles/SideBar.module.scss";
import searchIcon from "../../assets/icons/searchIcon.png";
import homeIcon from "../../assets/icons/homeIcon.png";
import tvShowsIcon from "../../assets/icons/tvShowsIcon.png";
import moviesIcon from "../../assets/icons/moviesIcon.png";
import genersIcon from "../../assets/icons/genersIcon.png";
import watchLaterIcon from "../../assets/icons/watchLaterIcon.png";
import userPhoto from "../../assets/images/userPhoto.jpeg";

export const SideBar = memo(() => {
  const navItems = useMemo(() => {
    return [
      {
        id: Math.floor(Math.random() * Date.now()),
        url: searchIcon,
        alt: "searchIcon",
        label: "Search",
        to: "/",
        active: false,
      },
      {
        id: Math.floor(Math.random() * Date.now()),
        url: homeIcon,
        alt: "homeIcon",
        label: "Home",
        to: "/",
        active: true,
      },
      {
        id: Math.floor(Math.random() * Date.now()),
        url: tvShowsIcon,
        alt: "tvShows",
        label: "TV Shows",
        to: "/",
        active: false,
      },
      {
        id: Math.floor(Math.random() * Date.now()),
        url: moviesIcon,
        alt: "moviesIcon",
        label: "Movies",
        to: "/",
        active: false,
      },
      {
        id: Math.floor(Math.random() * Date.now()),
        url: genersIcon,
        alt: "genersIcon",
        label: "Geners",
        to: "/",
        active: false,
      },
      {
        id: Math.floor(Math.random() * Date.now()),
        url: watchLaterIcon,
        alt: "watchLaterIcon",
        label: "Watch Later",
        to: "/",
        active: false,
      },
    ];
  }, []);

  const navFooterItems = useMemo(() => {
    return [
      {
        id: Math.floor(Math.random() * Date.now()),
        label: "Language",
      },
      {
        id: Math.floor(Math.random() * Date.now()),
        label: "Get Help",
      },
      {
        id: Math.floor(Math.random() * Date.now()),
        label: "Exit",
      },
    ];
  }, []);

  return (
    <div className={styles.side_bar}>
      <div>
        <div className={styles.user_info}>
          <div className={styles.img_block}>
            <Image src={userPhoto} alt="userPhoto" />
          </div>
          <span>Daniel</span>
        </div>
        <Menu navItems={navItems} />
      </div>
      <div className={styles.side_bar_footer}>
        <ul>
          {navFooterItems
            ? navFooterItems.map((item) => (
                <li key={item.id}>
                  <Link>{item.label}</Link>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
});
