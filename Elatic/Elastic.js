import { items } from "../public/Items.json";
import Carousel from "react-elastic-carousel";
import styles from "../styles/Elastic.module.scss";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 900, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

export default function ElasticCarousel() {
  const { elastic } = items;
  const carouselRef = useRef(null);
  let resetTimeout;
  return (
    <div className={styles.container}>
      <div className={styles.contWrapper}>
        <Carousel
        breakPoints={breakPoints}
          ref={carouselRef}
          pagination={true}
          enableAutoPlay={true}
          showArrows={true}
          autoPlaySpeed={4000}
          isRTL={false}
          onNextEnd={({ index }) => {
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
              carouselRef?.current?.goTo(0);
            }, 4000); // same time
          }}
        >
          {elastic.map((item) => (
            <div className={styles.carousel}>
              <div className={styles.main_div}>
                <div>{item.description}</div>
                <h3>{item.title} </h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

