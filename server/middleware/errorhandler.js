

// we need to pass four parameter to tell nodejs that it is a error middleware
const errorHandler = (error, req, res ,next)=>{
if(error instanceOf AppError){
    return res.status(error.errorCode).json({
        error
    })
}
}