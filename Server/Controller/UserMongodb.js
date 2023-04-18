const db = require('../Src/Mongodb')

const getUser = async (req, res) => {
    try {
        const userModel = db.MyModel
        const result = await userModel.find();
        // console.log("result", result);
        res.status(202).json({ msg: " Successful !", result })
    }
    catch (err) {
        res.status(404).json({ msg: " something is missing" })
    }
}

const pushUser = async (req, res) => {
    try {

        const userModel = db.MyModel
        const insetInto = new userModel({
            name: req.body.name,
            role: req.body.role,
            email: req.body.email,
            password: req.body.password,
        })
        const result = await insetInto.save();
        console.log(result);
        res.status(202).json({ mgs: "Successful" })
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: " something is missing" })
    }
}

const putUser = async (req, res) => {
    try {
        const userModel = db.MyModel
        const fineId = req.params.id
        console.log(fineId, "fineId--");
        const result = await userModel.updateOne({ _id: fineId }, {
            $set: {
                name: req.body.name,
                role: req.body.role,
                email: req.body.email,
                password: req.body.password
            }
        });
        console.log(result);
        res.status(202).json({ msg: " Successful !" })
    }
    catch (err) {
        res.status(404).json({ msg: " something is missing" })
    }

}

const deleteUser = async (req, res) => {
    const fineId = req.params.id
    console.log("fineId ", fineId);
    try {
        const userModel = db.MyModel
        const result = await userModel.deleteOne({ _id: fineId })

        res.status(202).json({ msg: " Successful !" })
    }
    catch (err) {
        console.log(err);
        res.status(404).json({ msg: " something is missing" })
    }
}

module.exports = {
    getUser,
    pushUser,
    putUser,
    deleteUser
}