import { Schema, model} from "mongoose";
const paqSchema = new Schema({
    idPaquete: {
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

export default model('Paquetes', paqSchema)