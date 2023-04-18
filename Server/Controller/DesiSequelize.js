const db = require('../Models/index')

const getDesi = async (req, res) => {
    const Designation = db.Designation;
    const jane = await Designation.findAll();
    res.json(jane)
}

const pustDesi = async (req, res) => {
    const Designation = db.Designation;
    const data = req.body;
    const jane = await Designation.create(data);
    res.json(jane)
}

const putDesi = async (req, res) => {
    const Designation = db.Designation;
    const fineId = req.params.id
    const data = req.body
    console.log(fineId, "---", data);
    const jane = await Designation.update(data, { where: { Desi_id: fineId } });
    res.send(jane)
}

const deleteDesi = async (req, res) => {
    const Designation = db.Designation;
    const fineId = req.params.id
    const jane = await Designation.destroy({ where: { Desi_id: fineId } });
    res.json(jane)
}

module.exports = {
    getDesi,
    pustDesi,
    putDesi,
    deleteDesi
}