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
            id: user.id,
            username: user.username,
            address: user.address,
            charId: user.charId,
            weaponId: user.weaponId
        })
    }else{
        res.status(200).json({
            message: "false"
        })
    }
}

const equip = async(req, res, next) =>{
    const result = await User.update({charId: req.body.charId, weaponId: req.body.weaponId}, {where: {address: req.body.address}});
    if(result){
        res.status(200).send("캐릭터 무기 장착 완료");
    } else{
        res.status(400).send("캐릭터 무기 장착 애러");
    }    
}

const userinfo = async(req, res, next) => { // 유저 address 조회
    const result = await User.findAll({
        attributes: ['username', 'address', 'charId', 'weaponId']
    });
    if (!result) {
        res.status(400).send({ data: null, message: '에러'})
    } else {
        res.status(200).json({ data: result })
    }
}

module.exports = {
    signup,
    check,
    equip,
    userinfo
};