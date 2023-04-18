const db = require('../Models/index')

const getRoles = async (req, res) => {
    const Roles = db.Roles;
    const jane = await Roles.findAll();
    res.json(jane)
}

const pustRoles = async (req, res) => {
    const Roles = db.Roles;
    const data = req.body;
    const jane = await Roles.create(data);
    res.json(jane)
}

const putRoles = async (req, res) => {
    const Roles = db.Roles;
    const fineId = req.params.id
    const data = req.body
    console.log(fineId, "---", data);
    const jane = await Roles.update(data, { where: { Role_id: fineId } });
    console.log(await Roles.update(data, { where: { Role_id: fineId } }));
    res.send(jane)
}

const deleteRoles = async (req, res) => {
    const Roles = db.Roles;
    const fineId = req.params.id
    const jane = await Roles.destroy({ where: { Role_id: fineId } });
    res.json(jane)
}

module.exports = {
    getRoles,
    pustRoles,
    putRoles,
    deleteRoles
}