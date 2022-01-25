
import restaurant from "../db/restaurantsSchema.js"

export const getRestaurants =async(request,response) =>{
    try {
        const restaurants =await restaurant.find({});
        response.json(restaurants);
    } catch (error) {
        console.log('Error',error.message);
    }
}

export const getRestaurantById = async(request, response) =>{
    try {
        const Restaurant = await restaurant.findOne({'id':request.params.resId});
        response.json(Restaurant);
    } catch (error) {
        console.log('Error',error.message);
    }
}