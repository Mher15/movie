import React, { memo, useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import styles from "../../styles/Slider.module.scss";

export const SliderItem = memo(({ item, onChangeSelectedItem }) => {
  const [videoIsPlayed, setVideoIsPlayed] = useState(false);
  const [queue, setQueue] = useState([]);
  const ref = useRef(null);

  const onPlay = () => {
    onChangeSelectedItem(item);
    videoPlayereToggle();
    Cookies.set(
      "queue",
      JSON.stringify([item.Id, ...queue.filter((itm) => itm !== item.Id)]),
      { expires: 7 }
    );
    setTimeout(() => {
      ref?.current?.play();
    }, 2000);
  };

  const videoPlayereToggle = () => {
    setVideoIsPlayed(!videoIsPlayed);
  };

  useEffect(() => {
    const queue = Cookies.get("queue");
    if (queue) {
      setQueue(JSON.parse(queue));
    }
  }, []);

  return (
    <div
      className={styles.slider_item_img}
      style={{ backgroundImage: `url(${item.CoverImage})` }}
      onClick={onPlay}
    >
      {videoIsPlayed ? (
        <video src={item.VideoUrl} ref={ref} onEnded={videoPlayereToggle} />
      ) : null}
    </div>
  );
});
