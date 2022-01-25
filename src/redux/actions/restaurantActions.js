import axios from "axios";
import * as action from "../constants/restaurantConstant.js"

const url = 'http://localhost:4000'

export const getRestaurants = () => async(dispatch) =>{
    try {
        const {data} = await axios.get(url + '/restaurants');
        dispatch({type: action.GET_RESTAURANT_SUCCESS, payload:data})

    } catch (error) {
        dispatch({type: action.GET_RESTAURANT_FAIL, payload: error.response})
    }
}