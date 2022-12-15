import jwt from 'jsonwebtoken'

const auth = () =>{
    try{
        const token = req.headers.authrization.split(' ')[1]
        let decodeData = jwt.verify(token,'test')
        req.userId = decodeData?.id
        next()
    }catch(error){
        console.log(error)
    }
}
export default auth;