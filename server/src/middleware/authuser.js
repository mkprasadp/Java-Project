import jwt from 'jsonwebtoken' 

const authUser = (req,res,next)=>{
    try {
        const authHeader = req.headers['authorization'];
        if(!authHeader){
            return res.status(401).json({
                message:"No taken provid"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"Authentication failed",
            error: error.message
        })
    }
}

export default authUser;