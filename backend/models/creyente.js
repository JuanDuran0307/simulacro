const {Schema, model} = require("mongoose");

const CreyenteSchema = Schema({
    nombre:{
        type:String,
        required:[true,"name is required"]
    },
    ministerio:{
        type:String,
        enum:["Adoracion","Mujeres","Jovenes","Hombres"]
    },
    nivelFormacion:{
        type:String,
        enum:["Liderazgo","Anciano"]
    },
    nivelRuta:{
        type:String,
        enum:["Nuevo","Consolidado","Enviado"]
    }
})

module.exports = model('Creyente',CreyenteSchema)