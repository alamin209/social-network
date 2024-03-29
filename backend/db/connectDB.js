import mongoose from "mongoose";

const connnectDB= async()=>{
try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex:true

    });
    console.log(`MongoDb connect: ${conn.connection.host} `);
}catch(error){
   console.error(`Error: ${error.message}`)
   process.exit(1);
}

} 
export default connnectDB;