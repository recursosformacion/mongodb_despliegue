import mongoose from 'mongoose';

const Gruposschema = new mongoose.Schema({
    
    grupName:String,
    grupDescription: String,
},{
    timestamps:true,
    versionKey: false
});
 
export default mongoose.model('RfmGrupos', Gruposschema);