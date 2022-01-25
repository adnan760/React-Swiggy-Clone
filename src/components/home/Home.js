
import Banner  from "./Banner.js";
import ItemHeader from "./ItemHeader.js";
import ItemBody from "./ItemBody.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRestaurants as listRestaurants } from "../../redux/actions/restaurantActions.js";


const Home =() =>{

    const {restaurants} = useSelector(state => state.getRestaurants)


    const restaurantList = restaurants;


    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(listRestaurants())
    },[dispatch])
    return(
        <div>
            <Banner />
            <ItemHeader />
            <ItemBody list={restaurantList} />
        </div>
    )
}
export default Home;