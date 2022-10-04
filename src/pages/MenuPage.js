import React, {useState} from "react";
import 'swiper/css';
import '../assets/images/burger.jpg'
import '../assets/images/shopping-cart-icon.svg'
import {Card} from "../Components/Card";
import {SwiperOwn} from '../Components/SwiperOwn'
import {Data} from "../assets/data/Data";
import {Name} from "../Components/Name";
import {Link} from "react-router-dom";


export const MenuPage = () => {
    let [foods, setFoods] = useState(Data['BURGERS'].menuData)
    let [totalItemsFood,setTotalItemsFood]=useState(0)
    let data = setCategoriesClass(Data)
    let [categories, setCategories] = useState(data)
    function setCategoriesClass(data) {
        let ar = []
        for (let key in data) {
            ar.push([key, data[key].class])
        }
        return ar
    }

    const filterFood = (event) => {
        let val = event.currentTarget.dataset.value
        let newCat = [...categories]
        for (let i = 0; i < newCat.length; i++) {
            newCat[i][1] = ''
            if (val === newCat[i][0]) {
                newCat[i][1] = 'filter-active'
            }
        }
        setCategories(newCat)
        let newKinds = [...Data[val].menuData]
        setFoods(newKinds)
    }
    return (
        <div className="container">
            <Name
                totalItems={totalItemsFood}
            />
            <SwiperOwn
                categories={categories}
                filter={filterFood}
            />
            {
                foods.map(k => <Card
                    key={k.id}
                    name={k.name}
                    url={k.url}
                    id={k.id}
                    price={k.price}
                    totalItems={totalItemsFood}
                    setTotalItems={setTotalItemsFood}
                />)
            }

            <div className="container fixed-bottom h-auto">
                <Link to='/orders' className="btn btn-lg mbgc  mb-4 w-100"> Заказы</Link>
            </div>
        </div>
    )
}