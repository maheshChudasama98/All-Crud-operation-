const db = require('../Models/index')

const getCompany = async (req, res) => {
    const Company = db.Company;
    const jane = await Company.findAll();
    res.json(jane)
}

const pustCompany = async (req, res) => {
    const Company = db.Company;
    const data = req.body;
    const jane = await Company.create(data);
    res.json(jane)
}

const putCompany = async (req, res) => {
    const Company = db.Company;
    const fineId = req.params.id
    const data = req.body
    console.log(fineId, "---", data);
    const jane = await Company.update(data, { where: { Company_id: fineId } });
    res.send(jane)
}

const deleteCompany = async (req, res) => {
    const Company = db.Company;
    const fineId = req.params.id
    const jane = await Company.destroy({ where: { Company_id: fineId } });
    res.json(jane)
}

module.exports = {
    getCompany,
    pustCompany,
    putCompany,
    deleteCompany
}