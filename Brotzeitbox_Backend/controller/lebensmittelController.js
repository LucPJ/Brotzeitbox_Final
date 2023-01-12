import Lebensmittel from "../shemas/lebensmittelShema.js";
import db from '../mongooseDB/db.js';

export const lebensmittelListe = async (req,res)=>{
    
    const lebensmittelItems = await Lebensmittel.find()
    res.status(200).json(lebensmittelItems)
}

export const createLebensmittelListe = async (req,res)=>{
    console.log(req.body)

    const {id, title, image, kalorien, kategorie} = req.body
    
    const lebensmittelItem = await Lebensmittel
    .create({lebensmittelId: id, title: title, imgSrc: image, kalorien: kalorien, kategorie: kategorie})
    .then(lebensmittelItem => res.status(200).json(lebensmittelItem))
    .catch(err => res.status(400).send(err.msg))
}

export const getLebensmittel = async (req,res)=>{
    
    const {id} = req.params 
    const lebensmittelSelected = await Lebensmittel.findById(id)
    res.status(200).json(lebensmittelSelected)
}

export const updateLabensmittel = async (req,res)=>{
    
    const {id} = req.params;
    const {lebensmittelName} = req.body;

    const updatedLebensmittel = await Lebensmittel.findOneAndUpdate({_id: id}, {lebensmittelName: lebensmittelName}, {new: true})
    console.log(updatedLebensmittel)
    res.status(200).json(updatedLebensmittel)
}

export const deleteLebensmittel = async (req,res)=>{
    const {id} = req.params
    
    const deletedLebensmittel = await Lebensmittel.findByIdAndDelete(id, {new: true})
    res.status(200).json(`Lebensmittel with ID ${id} deleted`)
}