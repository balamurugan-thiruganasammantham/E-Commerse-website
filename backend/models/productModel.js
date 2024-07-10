const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name:String,
        price:String,
        decripition:String,
        retings:String,
        images:[
            {
                image:String
            }
        ],
        category:String,
        celler:String,
        stock:String,
        numOfReviews:String,
        createAt:Date

    }   
)
const productModel = mongoose.model('product',productSchema);

module.exports= productModel;