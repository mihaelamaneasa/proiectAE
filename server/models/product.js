const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.ObjectId;

const productSchema = new Schema({
    _id: { type: objectId, auto: true },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true }
}, {
    versionKey: false
});

const product = mongoose.model('products', productSchema);

module.exports = product;