import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";


const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB is connected!! DB HOST: ${connectionInstance.connection.host }`)
    } catch(error){

        console.log("MONG0DB connection FAIELD" , error);
        process.exit(1)

    }
}


export default connectDB