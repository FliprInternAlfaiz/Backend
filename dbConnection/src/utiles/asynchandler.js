const asynchandler = (requesthandler) => {
    return (req, res, next) => {
        Promise.resolve(requesthandler(req, res, next)).catch((error) => {
            next(error);
        });
    };
};

export {asynchandler}


// const asyncHandler = (fn)=async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({sucess:false,message:error.message})               
//     }
// }