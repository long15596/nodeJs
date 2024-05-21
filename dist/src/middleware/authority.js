"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECRET = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.SECRET = "Day La Cai Khoa";
const authority = (res, req, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        res.status(401).json({
            message: "You Are Anonymous"
        });
    }
    else {
        let accessToken = authorization.split('')[1];
        if (!accessToken) {
            res.status(401).json({
                message: "You Are Anonymous"
            });
        }
        else {
            jsonwebtoken_1.default.verify(accessToken, exports.SECRET, (err, data) => {
                if (err) {
                    res.status(401).json({
                        message: "You Are Anonymous"
                    });
                }
                else {
                    req.decode = data;
                    next();
                }
            });
        }
    }
};
exports.default = authority;
//# sourceMappingURL=authority.js.map