import jwt from "jsonwebtoken";
export const SECRET = "Day La Cai Khoa"
const authority = (res, req, next) => {
    let authorization = req.headers.authorization
    if (authorization) {
        res.status(401).json({
            message: "You Are Anonymous"
        })
    } else {
        let accessToken = authorization.split('')[1]
        if (!accessToken) {
            res.status(401).json({
                message: "You Are Anonymous"
            })
        } else {
            jwt.verify(accessToken, SECRET, (err, data) => {
                if (err) {
                    res.status(401).json({
                        message: "You Are Anonymous"
                    })
                } else {
                    req.decode = data
                    next()
                }
            })
        }
    }
}
export default authority