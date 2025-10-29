import mongoose from 'mongoose'

const connetDB = async()=>{
    try {
        await mongoose.connection.on('connected',()=>{
            console.log('Database Connected Successfully')
        })
        await mongoose.connect("mongodb+srv://test:admin1618@cluster0.ihylj37.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    } catch (error) {
        console.log("Database Not Found");
    }
}
export default connetDB;