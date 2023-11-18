import React, { memo, useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useDrag } from "../../hooks/useDrag";
import { useSortByOrder } from "../../hooks/useSortByOrder";
import "react-horizontal-scrolling-menu/dist/styles.css";
import styles from "../../styles/Slider.module.scss";
import { SliderItem } from "./SliderItem";

export const Slider = memo(({ title, data, onChangeSelectedItem }) => {
  const [moveiData] = useState(
    useSortByOrder(data.sort((a, b) => a.Date.getTime() - b.Date.getTime()))
  );
  const { dragStart, dragStop, dragMove } = useDrag();

  const handleDrag = ({ scrollContainer }) => {
    return (event) => {
      return dragMove(event, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });
    };
  };

  const onWheel = (apiObj, event) => {
    const isThouchpad =
      Math.abs(event.deltaX) !== 0 || Math.abs(event.deltaY) < 15;
    if (isThouchpad) {
      event.stopPropagation();
      return;
    }
    if (event.deltaY < 0) {
      apiObj.scrollNext();
    } else if (event.deltaY > 0) {
      apiObj.scrollPrevent();
    }
  };

  return (
    <div className={styles.slider_section}>
      <h2 className={styles.title}>
        {moveiData.length && title ? title : null}
      </h2>
      <ScrollMenu
        onWheel={onWheel}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
      >
        {moveiData.length
          ? moveiData?.map((item, index) => (
              <div key={index} className={styles.slider_item}>
                <SliderItem
                  item={item}
                  onChangeSelectedItem={(selected) => {
                    onChangeSelectedItem(selected);
                  }}
                />
              </div>
            ))
          : null}
      </ScrollMenu>
    </div>
  );
});
