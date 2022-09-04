const {User} = require('../models');

const signup = async(req, res, next) => {
    try {
        const { username, address } = req.body;

        await User.findOrCreate({
            where: { address: address },
            defaults: {
                username: username,
            }
        }).then(async ([user, created])=>{
            if(!created){
                res.status(409).send("이미 가입된 유저 이름입니다.");
            } else{
                res.status(201).json({
                    message: "회원가입이 완료되었습니다.",
                    data: { username: username, address: address},
                })                
            }
        });
    } catch(e) {
        throw Error(e);
    }
};

const check = async(req, res, next) => {
    const user = await User.findOne({
        where: {
            address: req.params.userAddr
        }
    });

    if(user){
        res.status(200).json({
            message: "true",
            username: user.username,
            address: user.address
        })
    }else{
        res.status(200).json({
            message: "false"
        })
    }
}

module.exports = {
    signup,
    check
};