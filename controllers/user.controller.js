const { response } = require('express')
const Usuario = require("../models/user")
const bcryptjs = require('bcryptjs')

const usuariosGet = (req= request, res = response) => {

    const {q, nombre ='no name', apikey} = req.query
    
    res.json({
        msg:"GET API - Controlador",
        q,nombre,apikey
    });
};

const usuariosPost = async (req, res = response) => {
    
    const {nombre, correo, password, role} = req.body;
    const usuario = new Usuario({nombre, correo, password, role}) 
    // verificar si correo existe

    // Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)
    //Guardar en DB
    await usuario.save()

    res.json({
        usuario
    });
};

const usuariosPut = (req, res = response) => {
    const id = req.params.id

    res.json({
        msg:"PUT API - Controlador",
        id
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg:"PATCH API - Controlador"
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "DELETE API - Controlador"
    });
};


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}