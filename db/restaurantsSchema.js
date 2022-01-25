import mongoose from "mongoose"

const restaurantSchema = new mongoose.Schema({
    info: Object,
    order: Object,
    bulkOffers: Array
})

const restaurant= mongoose.model('restaurant',restaurantSchema);

export default restaurant;