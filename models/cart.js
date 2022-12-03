var mongoose = require('mongoose');
var schema = mongoose.Schema;

var addToCartSchema = new schema ({
    id : {type:String,required:true},
    quantity : {type:Number,required:true},
    itemId : {type:String,required:true},
    ownerid : {type:String,required:true},
    imagepath : {type:[String],required:true},
    price : {type:Number,required:true},
    productby : {type:String,required:true},
    title:{type:String,required:true},
    stock:{type:Number,required:true},
    buy : {type:Boolean,required:false}, //when buying through buy now
    buycart : {type:Boolean,required:false} //when buying through cart
});

module.exports = mongoose.model("cart", addToCartSchema)