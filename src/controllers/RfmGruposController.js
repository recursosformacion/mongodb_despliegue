import RfmGrupos from "../models/RfmGrupos";

export default class RfmGruposController {

    async graba(req,res){
        const grupos = RfmGrupos(req.body);
        await grupos.save();
        console.log(grupos);
        res.redirect("/");
    }

    async leerTodos(req,res){
        const listaG = await RfmGrupos.find().lean();
        res.render("index",{salida:listaG});
    }

    async leerUno(id,res){
        const objeto = await RfmGrupos.findById(id).lean();
        console.log(objeto)
        res.render("edit",{salida:objeto});
    }

    async actualiza(req,res){
        const obj = req.body;
        const objeto = await RfmGrupos.findByIdAndUpdate(obj._id, obj);
        console.log("actualizado",obj);
        res.redirect("/");
    }

    async borra(id,res){
        id = req.params.id;
        const objeto = await RfmGrupos.findByIdAndDelete(id);
        console.log("borrado",objeto);
        res.redirect("/");
    }
}