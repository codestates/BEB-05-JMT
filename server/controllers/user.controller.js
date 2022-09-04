const {User} = require('../models');

const signup = async(req, res, next) => {
    try {
        const { nickname, address } = req.body;

        await User.findOrCreate({
            where: { address: address },
            defaults: {
                nickname: nickname,
            }
        }).then(async ([user, created])=>{
            if(!created){
                res.status(409).send("이미 가입된 회원입니다.");
            } else{
                res.status(201).json({
                    message: "회원가입이 완료되었습니다.",
                    data: { nickname: nickname, address: address},
                })                
            }
        });
    } catch(e) {
        throw Error(e);
    }
};


module.exports = {
    signup,
};