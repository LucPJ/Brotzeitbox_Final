import mongoose from "mongoose";

const Schema = mongoose.Schema;

const lebensmittelSchema = new Schema({
    lebensmittelId: {type: String, required: true},    
    title: {type: String, required: true},
    imgScr: {data: Buffer, type: String},
    kalorien: {type: Number, required: true},
    kategorie: {type: String, required: true},
    date: {type: Date, default: Date.now }
})

export default mongoose.model('Lebensmittel', lebensmittelSchema);