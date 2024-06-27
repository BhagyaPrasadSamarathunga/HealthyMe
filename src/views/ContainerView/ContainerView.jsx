import {useState, useEffect} from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.jsx";
import SearchField from "../../components/SearchField/SearchField.jsx";
import Cart from "../../components/Cart/Cart.jsx";
import rawRestaurant from "../../mocks/restaurants.json";
import rawDishes from "../../mocks/dishes.json";
import FoodCartView from "../FoodCartView/FoodCartView.jsx";
import RestaurantView from '../RestaurantView/RestaurantView';
import Pagination from '../../components/Pagination/Pagination.jsx';
import userQuestion from "../../mocks/userQuestion.json";
import AppContext from '../../store/AppContext.js';
import OptionView from '../OptionView/OptionView.jsx';
import BMIValue from '../../utils/bmiCalculator.js';
import styles from './ContainerView.module.css';

function ContainerView() {
    const [restaurants, setRestaurants] = useState(rawRestaurant);
    const [dishes, setDishes] = useState(rawDishes);
    const [selectedItems, setSelectedItems] = useState([]);
    const[questionVisibility, setQuestionVisibility] = useState(AppContext);
    const[bmiValue,setBmiValue] = useState(AppContext);
    const location = useLocation();

    const handleRestaurantFilter = (query) => {
        const filteredRestaurant= rawRestaurant.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase())
        );
        setRestaurants(filteredRestaurant);
        const filteredDishes= rawDishes.filter((dish) =>
        dish.name.toLowerCase().includes(query.toLowerCase())
        );
        setDishes(filteredDishes);
    };
    const handelBMI = (value) => {
        setBmiValue(BMIValue(value));
        setQuestionVisibility(false);
    }
    const handelAddItem = (value) => {
        console.log("KJ======>",value);
        setBmiValue(bmiValue- value);
    }
    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/option') {
            setQuestionVisibility(true);
        } else {
            setQuestionVisibility(false);
        }
        return () => { setQuestionVisibility(true) };
      }, [location]);
    
    return (
        <>
            <NavBar>
                <h1>Hello Food</h1>
                { !questionVisibility &&
                    <>
                        <SearchField filterItems={handleRestaurantFilter} />
                        <Cart
                            selectedItems={selectedItems}
                            onClear={() => setSelectedItems([])}
                        />
                        {bmiValue > 0 ? 
                            <div className={styles.bmiContainer}>Remaining Calorie Quotation: {bmiValue} kJ</div>
                            :<div className={styles.noBmiContainer}>No Remaining Calorie</div>}
                    </> 
                }
            </NavBar>
            <Routes>
                <Route path='/' element={<Pagination questionList={userQuestion} onsubmit={(e)=>handelBMI(e)}/>}/>
                <Route path='/option' element={<OptionView/>}/>
                <Route path='/resturent' element={<RestaurantView restaurants={restaurants}/>}/>
                <Route path='/foodcart' element={<FoodCartView dishes={dishes} onClick={(e)=>handelAddItem(e)}/>}/>
            </Routes>
        </>
    )
}

export default ContainerView