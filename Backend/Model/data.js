
const mongoose = require('mongoose');
// const { Schema } = mongoose;


const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    img: {
        type: String,
        require: true,
        unique: true
    }

}, { timestamps: true })

// module.exports=HotelSchema;
module.exports = mongoose.model('Data', DataSchema);
// export default mongoose.model("Data", DataSchema)