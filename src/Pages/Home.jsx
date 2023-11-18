import React, { Fragment, memo, useState } from "react";
import styles from "../styles/Home.module.scss";
import { Image } from "../components/common/Image";
import { data } from "../server/server";
import { Button } from "../components/common/Button";
import { Play } from "../assets/icons/Play";
import { Slider } from "../components/common/Slider";

export const Home = memo(() => {
  const [selectedItem, setSelectedItem] = useState(data.Featured);
  const [items] = useState(data.TendingNow);
  const [moveiH, setMoveiH] = useState(
    Math.floor(Number(selectedItem?.Duration) / 3600)
  );
  const [moveiM, setMoveiM] = useState(
    Math.floor((Number(selectedItem?.Duration) % 3600) / 60)
  );

  const onChangeSelectedItem = (selected) => {
    const newSelectedItem = items.find((item) => item.Id === selected.Id);
    setSelectedItem(newSelectedItem);
    setMoveiH(Math.floor(Number(newSelectedItem?.Duration) / 3600));
    setMoveiM(Math.floor((Number(newSelectedItem?.Duration) % 3600) / 60));
  };

  return (
    <div className={styles.container}>
      <div className={styles.selected_item_card}>
        {selectedItem ? (
          <Fragment>
            <h2>{selectedItem?.Category}</h2>
            <div className={styles.title_image}>
              <Image src={selectedItem?.TitleImage} alt={selectedItem?.Title} />
            </div>
            <p className={styles.movies_info}>
              <span>{selectedItem.ReleaseYear}</span>
              <span>{selectedItem.MpaRating}</span>
              <span>
                {moveiH ? moveiH + "h" : null} {moveiM ? moveiM + "m" : null}
              </span>
            </p>
            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className={styles.buttons}>
              <Button
                icon={<Play fill={"#040404"} size={24} />}
                label="Play"
                style={{ marginRight: "8px" }}
              />
              <Button
                label="More Info"
                variant="primary"
                style={{ marginLeft: "8px" }}
              />
            </div>
          </Fragment>
        ) : null}
      </div>
      <div>
        <Slider
          title={"Trending Now"}
          data={items}
          onChangeSelectedItem={(selected) => {
            onChangeSelectedItem(selected);
          }}
        />
      </div>
    </div>
  );
});
