const Creyente = require("../models/creyente.js");
const bcryptjs = require('bcryptjs');


const getCreyentes = async (req,res)=>{
    const creyentes = await Creyente.find();
    res.json(creyentes);
};
    
const deleteCreyentes = (req,res)=>{
    res.json({
        "message":"delete api"
    })

};

const insertCreyentes = async (req,res)=>{
 

    const {nombre,ministerio,password,rol} = req.body; 
    const creyente = new Creyente({nombre,ministerio,password,rol});
    await cancelAnimationFrame.save();
    /* verfificar si el email ya existe */
    const existeEmail = await Creyente.findOne({email});
        if(existeEmail){
            return res.status(400).json({
                msg: "Email is already registered"
            })
        };

    /* eNCRIPTAR NUESTRAS CONTRASEÑAS */
    const salt = bcryptjs.genSaltSync();
    creyente.password = bcryptjs.hashSync(password, salt);


    res.json({
        "message":"post api asdasd",
        usuario
    })
    
};

const updateCreyentes = (req,res)=>{
    res.json({
        "message":"patch api"
    })
    
};

module.exports = {
    getCreyentes,
    deleteCreyentes,
    insertCreyentes,
    updateCreyentes
}