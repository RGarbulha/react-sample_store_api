const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
const ProductSchema = new Schema({
    sku:{
        type:String,
        required:true
    },
    title: {
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    description: String,
    comments: [String],
    review:Number,
    note:String,
    active:{
        type:Boolean,
        default:true
    },
    featured:Boolean,
    price: {
        type:String,
        required:true
    },
    dateAdded: {
        type:Date,
        default:new Date()
    },
    promoPrice:Number,
    promoStarts:Date,
    promoEnds:Date,
    variations:[{
        sku:String,
        type:String,
        image:String,
        price:Number,
        dateAdded: Date,
        promoPrice:Number,
        promoStarts:Date,
        promoEnds:Date
    }],
    images:[String],
});

module.exports = mongoose.model("products", ProductSchema);