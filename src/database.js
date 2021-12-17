import { connect } from 'mongoose';
(async()=>{
    try {
        const db = await connect("mongodb+srv://admin:admin@pickrusbd.lcapc.mongodb.net/PICKRUSBD?retryWrites=true&w=majority");
        console.log("BD conectada a",db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();
const { MongoClient } = require('mongodb');