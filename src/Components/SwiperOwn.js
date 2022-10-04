import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import s from "../pages/style.css";
import React from "react";
import 'swiper/css';
import {Items} from "./Items";

export const SwiperOwn = (props) => {
    return (
        <div className={s.dfsb}>
            <Swiper
                // install Swiper modules
                loop={true}
                spaceBetween={25}
                slidesPerView={4}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}

            >
                {props.categories.map((comp, i) => <SwiperSlide key={i}>
                    <Items
                        key={i}
                        comp={comp}
                        filter={props.filter}
                    />
                </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};