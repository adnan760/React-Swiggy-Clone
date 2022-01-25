import { restaurants } from "../contents/restaurants.js";
import  restaurant  from "./restaurantsSchema.js"
const restaurantData = async()=>{
    try{
        await restaurant.deleteMany({})
        await restaurant.insertMany(restaurants)
        console.log('Data loaded successfully')
    } catch(error){
        console.log('Data loading not succesfull',error.message);
    }
}

export default restaurantData;