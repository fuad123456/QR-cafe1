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
import {useSelector} from "react-redux";

export const SwiperOwn = (props) => {
    const initialCategories=Object.keys(useSelector((state)=>state.foods.fullFoods))

    return (
        <div className={s.dfsb}>
            <Swiper
                // install Swiper modules
                loop={true}
                spaceBetween={20}
                slidesPerView={4}

            >
                {initialCategories.map((comp, i) => <SwiperSlide key={i}>
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