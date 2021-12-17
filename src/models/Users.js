const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userSchema = new mongoose.Schema({
    idUnico: {
        type: Number,
        required: true,
        unique: true
    },
    tipoUsuario: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    contrasena: {
        type: String,
        required: true
    },
    cedula: {
        type: Number,
        required: true,
        unique: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true,
        unique: true
    },
},{
    timestamps: true,
    versionKey: false
});

userSchema.pre('save', function(next){
    if(this.isNew || this.isModified('contrasena')){
        const document = this;
        bcrypt.hash(document.contrasena, saltRounds, (err, hashedPassword)=>{
            if(err){
                next(err)
            }else{
                document.contrasena = hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
});

userSchema.methods.contrasenaCorrecta = function(contrasena,callback){
    bcrypt.compare(contrasena, this.contrasena, function(err,same){
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    });
}

module.exports = mongoose.model('Users',userSchema)
/* export default model('Users',userSchema) */