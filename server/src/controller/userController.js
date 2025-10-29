import userModel from '../model/User.js'

export const register = async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        if(!name||!email || !password){
            return res.json({
                success:false,
                message:"all feild required"
            })
        }

        const existinguser = await userModel.findOne({email});
        if(existinguser){
            return res.json({
                success:false,
                message:"user already signup"
            })
        }

        const newuser = await userModel.create({
            name,email,password
        })

        return res.json({
            success: true,
            message: "Sign Up Successfully",
            newuser
        })

    } catch (error) {
        console.error("Signup fail")
    }
}


export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email||!password){
            return res.json({
                success:false,
                message:"All feild Requested"
            })
        }
    } catch (error) {
        
    }
}

export default { register,login }


