const Router = require('express');
const router = Router();
import users from "../models/Users";

router.get('/',(req,res) => {
    res.send('AgendaMensajeros');
});
router.get('/AgendaPaquetes',(req,res) => {
    res.send('AcercaDe');
});
router.get('/Login',async(req,res) => {
    const {correo, contrasena} = req.body;
    users.findOne({correo},(err,user)=>{
        if(err){
            res.status(500).send('ERROR AL AUTENTICAR USUARIO');
        }else if(!user){
            res.status(500).send('EL USUARIO NO EXISTE');
        }else{
            user.contrasenaCorrecta(contrasena,(err,resul)=>{
                if(err){
                    res.status(500).send('ERROR AL AUTENTICAR');
                }else if(resul){
                    res.status(200).send('EL USUARIO HA SIDO AUTENTICADO');
                }else{
                    res.status(500).send('USUARIO Y/O CONTRASEÑA INCORRECTA');
                }
            })
        }
    });
});
router.get('/ListUsuarios',async(req,res) => {
    const listUsers = await users.find();
    res.send(listUsers);
});
router.post('/Registro',async (req,res) => {
    const Usuario = users(req.body);
    console.log(Usuario)
    const UserSave = await Usuario.save(err =>{
        if(err){
            res.status(500).send('ERROR AL REGISTRAR USUARIO');
        }else{
            res.status(200).send('USUARIO REGISTRADO');
        }
    });
});

export default router;