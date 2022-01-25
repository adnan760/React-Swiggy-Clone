import * as actionType from "../constants/restaurantConstant.js"

export const getRestaurantsReducer =(state ={restaurants:[]}, action) =>{
    switch (action.type){
        case actionType.GET_RESTAURANT_SUCCESS:
            return {restaurants: action.payload}
        case actionType.GET_RESTAURANT_FAIL:
            return {error: action.payload}
        default:
            return state
    }
}